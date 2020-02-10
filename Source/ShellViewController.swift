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

class ShellViewController: KCMultiViewController
{
	public override func loadView() {
		super.loadView()

		/* Allocate cosole */
		let console = KCLogManager.shared.console
		super.set(console: console)

		/* Allocate terminal view */
		let controller = ShellSubViewController(parentViewController: self, console: console)
		self.add(name: "terminal", viewController: controller)
	}

	#if os(OSX)
	open override func viewDidAppear() {
		super.viewDidAppear()
		viewDidAppearMain()
	}
	#else
	open override func viewDidAppear(_ doanimate: Bool) {
		super.viewDidAppear(doanimate)
		viewDidAppearMain()
	}
	#endif

	private func viewDidAppearMain() {
		if !self.pushViewController(byName: "terminal") {
			NSLog("Failed to push terminal controller")
		}
	}
}

public class ShellSubViewController: KCSingleViewController
{
	private var mTerminalView:	KCTerminalView? = nil
	private var mShellThread:	KHShellThreadObject? = nil

	public override func loadView() {
		super.loadView()
		setupContext() ;
	}

	private func setupContext() {
		if let termview = setupTerminalView() {
			setupShell(terminalView: termview)
		}
	}

	private func setupTerminalView() -> KCTerminalView? {
		guard let rootview = super.rootView else {
			NSLog("No root view")
			return nil
		}
		let termview = KCTerminalView()
		termview.fontPointSize = 24.0

		rootview.setup(childView: termview)
		mTerminalView = termview
		return termview
	}

	private func setupShell(terminalView termview: KCTerminalView) {
		guard let vm = JSVirtualMachine() else {
			NSLog("Failed to allocate VM")
			return
		}
		let queue    = DispatchQueue(label: "jsh", qos: .userInitiated, attributes: .concurrent)
		let resource = KEResource(baseURL: Bundle.main.bundleURL)
		let instrm:  CNFileStream = .fileHandle(termview.inputFileHandle)
		let outstrm: CNFileStream = .fileHandle(termview.outputFileHandle)
		let errstrm: CNFileStream = .fileHandle(termview.errorFileHandle)
		let conf = KEConfig(applicationType: .window, doStrict: true, logLevel: .warning)

		let shell = KHShellThreadObject(virtualMachine: vm, queue: queue, resource: resource, input: instrm, output: outstrm, error: errstrm, config: conf)
		mShellThread = shell
	}

	#if os(OSX)
	public override func viewDidAppear() {
		super.viewDidAppear()
		viewDidAppearMain()
	}
	#else
	public override func viewDidAppear(_ animated: Bool) {
		super.viewDidAppear(animated)
		viewDidAppearMain()
	}
	#endif

	private func viewDidAppearMain() {
		if let thread = mShellThread {
			thread.start(arguments: [])
		}
	}
}


