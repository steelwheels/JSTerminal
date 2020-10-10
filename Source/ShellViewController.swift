/**
 * @file ShellViewController.swift
 * @brief Define ShellViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import KiwiComponents
import KiwiShell
import KiwiEngine
import KiwiLibrary
import CoconutData
import JavaScriptCore

class ShellViewController: KCPlaneViewController
{
	public enum Mode {
		case shell
		case resource(KEResource)
	}

	private var	mMode:			Mode 			= .shell
	private var 	mIs1stAppear:		Bool 			= true
	private var	mTerminalView:		KCTerminalView?		= nil
	private var	mProcessManager:	CNProcessManager?	= nil
	private var 	mShellThreadObject:	KHShellThreadObject?	= nil
	private var 	mScriptThreadObject:	KHScriptThreadObject?	= nil

	open override func loadViewContext(rootView root: KCRootView) -> KCSize {
		let termview = KCTerminalView()
		root.setup(childView: termview)
		mTerminalView = termview

		return termview.fittingSize
	}

	public func set(mode md: Mode) {
		mMode = md
	}

	override func viewWillAppear() {
		super.viewWillAppear()
		if let window = self.view.window {
			window.title = "JSTerminal"
		}
	}

	override func viewDidAppear() {
		super.viewDidAppear()
		/* Execute only once */
		if mIs1stAppear {
			guard let termview = mTerminalView else {
				CNLog(logLevel: .error, message: "Can not happen")
				return
			}
			/* Block execution shell/script twice */
			mIs1stAppear	= false

			let procmgr = CNProcessManager()
			mProcessManager	= procmgr

			/* Setup external compiler */
			let extcomp:KLExternalCompiler? = nil // KMComponentCompiler(viewController: self)

			switch mMode {
			case .shell:
				startShell(processManager: procmgr, externalCompiler: extcomp, in: termview)
			case .resource(let resource):
				startScript(processManager: procmgr, resource: resource, externalCompiler: extcomp, in: termview)
			}
		}
	}

	private func startShell(processManager procmgr: CNProcessManager, externalCompiler extcomp: KLExternalCompiler?, in terminal: KCTerminalView) {
		/* Allocate shell */
		let environment = CNEnvironment()
		let resource    = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(terminal.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(terminal.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(terminal.errorFileHandle)
		let conf = KEConfig(applicationType: .window, doStrict: true, logLevel: .warning)

		/* Setup initial home directory */
		let homedir = CNPreference.shared.userPreference.homeDirectory
		environment.currentDirectory = homedir

		/* Set default environment value */
		setupEnvironment(environment: environment)

		let shell = KHShellThreadObject(processManager: procmgr, input: instrm, output: outstrm, error: errstrm, externalCompiler: extcomp, environment: environment, resource: resource, config: conf)
		shell.start(argument: .nullValue)

		mShellThreadObject = shell
	}

	private func startScript(processManager procmgr: CNProcessManager, resource res: KEResource, externalCompiler extcomp: KLExternalCompiler?, in terminal: KCTerminalView) {
		/* Allocate script thread */
		let environment = CNEnvironment()
		let instrm:  CNFileStream = .fileHandle(terminal.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(terminal.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(terminal.errorFileHandle)
		let conf = KHConfig(applicationType: .window, hasMainFunction: true, doStrict: true, logLevel: .warning)

		/* Set default environment value */
		setupEnvironment(environment: environment)

		let thread = KHScriptThreadObject(sourceFile: .resource(res), processManager: procmgr, input: instrm, output: outstrm, error: errstrm, externalCompiler: extcomp, environment: environment, config: conf)
		thread.start(argument: .nullValue)

		mScriptThreadObject = thread
	}

	private func setupEnvironment(environment env: CNEnvironment) {
		env.set(name: "TERM",           value: .stringValue("xterm-16color"))
		env.set(name: "CLICOLOR",       value: .stringValue("1"))
		env.set(name: "CLICOLOR_FORCE", value: .stringValue("1"))
	}

	override var representedObject: Any? {
		didSet {
		// Update the view, if already loaded.
		}
	}

	@IBAction public func stopChildProcess(_ sender: Any) {
		if let process = mShellThreadObject {
			//CNLog(logLevel: .detail, message: "Terminate shell thread")
			process.terminate()
		}
	}
}

