/**
 * @file ShellViewController.swift
 * @brief Define ShellViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import KiwiShell
import KiwiEngine
import KiwiLibrary
import CoconutData
import JavaScriptCore

class ShellViewController: KCPlaneViewController
{
	public enum Mode {
		case shell
		case script(String)
	}

	private var	mMode:			Mode 			= .shell
	private var 	mIs1stAppear:		Bool 			= true
	private var	mTerminalView:		KCTerminalView?		= nil
	private var	mProcessManager:	CNProcessManager?	= nil
	private var	mQueue:			DispatchQueue?		= nil
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
				NSLog("Can not happen")
				return
			}

			let procmgr = CNProcessManager()
			let queue   = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)

			switch mMode {
			case .shell:
				startShell(processManager: procmgr, queue: queue, in: termview)
			case .script(let script):
				startScript(processManager: procmgr, queue: queue, script: script, in: termview)
			}

			mProcessManager	= procmgr
			mQueue		= queue
			mIs1stAppear	= false
		}
	}

	private func startShell(processManager procmgr: CNProcessManager, queue disque: DispatchQueue, in terminal: KCTerminalView) {
		/* Allocate shell */
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}
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

		let shell = KHShellThreadObject(virtualMachine: vm, processManager: procmgr, queue: disque, input: instrm, output: outstrm, error: errstrm, environment: environment, resource: resource, config: conf)
		shell.start(arguments: [])

		mShellThreadObject = shell
	}

	private func startScript(processManager procmgr: CNProcessManager, queue disque: DispatchQueue, script scr: String, in terminal: KCTerminalView) {
		/* Allocate script thread */
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}

		let environment = CNEnvironment()
		let resource    = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(terminal.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(terminal.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(terminal.errorFileHandle)
		let conf = KHConfig(applicationType: .window, hasMainFunction: true, doStrict: true, logLevel: .warning)

		/* Set default environment value */
		setupEnvironment(environment: environment)

		let thread = KHScriptThreadObject(virtualMachine: vm, script: .script(scr), processManager: procmgr, queue: disque, input: instrm, output: outstrm, error: errstrm, environment: environment, resource: resource, config: conf)
		thread.start(arguments: [])

		mScriptThreadObject = thread
	}

	private func setupEnvironment(environment env: CNEnvironment) {
		env.set(name: "TERM", string: "xterm-16color")
		env.set(name: "CLICOLOR", string: "1")
		env.set(name: "CLICOLOR_FORCE", string: "1")
	}

	override var representedObject: Any? {
		didSet {
		// Update the view, if already loaded.
		}
	}

	@IBAction public func stopChildProcess(_ sender: Any) {

		if let process = mShellThreadObject {
			NSLog("Terminate shell thread")
			process.terminate()
		}
		if let process = mScriptThreadObject {
			NSLog("Terminate script thread")
			process.terminate()
		}
	}
}

