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

public class ShellViewController: KCSingleViewController
{
	private var mTerminalView:	KCTerminalView? = nil
	private var mShellThread:	KHShellThreadObject? = nil

	public override func loadView() {
		super.loadView()
		setupContext() ;
	}

	private func setupContext() {
		guard let rootview = super.rootView else {
			NSLog("No root view")
			return
		}
		let termview = KCTerminalView()
		rootview.setup(childView: termview)
		mTerminalView = termview

		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}
		let queue    = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)
		let resource = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(termview.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(termview.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(termview.errorFileHandle)
		let conf = KEConfig(kind: .Terminal, doStrict: true, logLevel: .warning)

		let shell = KHShellThreadObject(virtualMachine: vm, queue: queue, resource: resource, input: instrm, output: outstrm, error: errstrm, config: conf)
		mShellThread = shell
	}

	public override func viewDidAppear() {
		super.viewDidAppear()
		if let thread = mShellThread {
			thread.start(arguments: [])
		}
	}
}


