/**
 * @file ShellViewController.swift
 * @brief Define ShellViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import KiwiShell
import KiwiEngine
import CoconutData
import JavaScriptCore

class ShellViewController: KCPlaneViewController
{
	private var	mTerminalView:	KCTerminalView? = nil
	private var	mShellThread: 	KHShellThreadObject? = nil

	open override func loadViewContext(rootView root: KCRootView) -> KCSize {
		let termview = KCTerminalView()
		root.setup(childView: termview)
		mTerminalView = termview

		/* Allocate shell */
		//NSLog("Launch shell")
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return termview.fittingSize
		}
		let queue    = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)
		let resource = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(termview.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(termview.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(termview.errorFileHandle)
		let conf = KEConfig(applicationType: .window, doStrict: true, logLevel: .warning)

		let shell = KHShellThreadObject(virtualMachine: vm, queue: queue, resource: resource, input: instrm, output: outstrm, error: errstrm, config: conf)
		mShellThread = shell

		return termview.fittingSize
	}

	override func viewDidAppear() {
		super.viewDidAppear()
		/* Start shell */
		if let shell = mShellThread {
			//NSLog("start shell")
			shell.start(arguments: [])
		}
	}

	override var representedObject: Any? {
		didSet {
		// Update the view, if already loaded.
		}
	}
}

