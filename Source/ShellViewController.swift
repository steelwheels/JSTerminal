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

	private var	mMode:			Mode = .shell
	private var	mTerminalView:		KCTerminalView? = nil
	private var 	mShellThreadObject:	KHShellThreadObject? = nil
	private var 	mScriptThreadObject:	KHScriptThreadObject? = nil

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

	private var mIs1stAppear: Bool = true

	override func viewDidAppear() {
		super.viewDidAppear()
		/* Execute only once */
		if mIs1stAppear {
			guard let termview = mTerminalView else {
				NSLog("Can not happen")
				return
			}
			switch mMode {
			case .shell:
				startShell(in: termview)
			case .script(let script):
				startScript(script: script, in: termview)
			}
			mIs1stAppear = false
		}
	}

	private func startShell(in terminal: KCTerminalView) {
		/* Allocate shell */
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}
		let queue    = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)
		let resource = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(terminal.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(terminal.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(terminal.errorFileHandle)
		let conf = KEConfig(applicationType: .window, doStrict: true, logLevel: .warning)

		let shell = KHShellThreadObject(virtualMachine: vm, queue: queue, resource: resource, input: instrm, output: outstrm, error: errstrm, config: conf)
		shell.start(arguments: [])

		mShellThreadObject = shell
	}

	private func startScript(script scr: String, in terminal: KCTerminalView) {
		/* Allocate script thread */
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}
		let queue    = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)
		let resource = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(terminal.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(terminal.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(terminal.errorFileHandle)
		let conf = KHConfig(applicationType: .window, hasMainFunction: true, doStrict: true, logLevel: .warning)

		let thread = KHScriptThreadObject(virtualMachine: vm, script: .script(scr), queue: queue, resource: resource, input: instrm, output: outstrm, error: errstrm, config: conf)
		thread.start(arguments: [])

		mScriptThreadObject = thread
	}

	override var representedObject: Any? {
		didSet {
		// Update the view, if already loaded.
		}
	}
}

