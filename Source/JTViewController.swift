/**
 * @file	JTViewController.swift
 * @brief	Define JTViewController class
 * @par Copyright
 *   Copyright (C) 2019 Steel Wheels Project
 */

import AmberComponent
import KiwiControls
import CoconutData
import Cocoa

class JTViewController: AMCMultiViewController
{
	private static var	mIsFirstWindow	= true
	private var 		mDidLoaded	= false

	#if os(OSX)
	public override func viewDidAppear() {
		super.viewDidAppear()

		if !mDidLoaded {
			let cons = KCLogManager.shared.console
			set(console: cons)
			loadTerminalView(console: cons)
			mDidLoaded = true
		}
	}
	#else
	public override func viewDidAppear(_ animated: Bool) {
		super.viewDidAppear(animated)

		if !mDidLoaded {
			let cons = KCLogManager.shared.console
			set(console: cons)
			loadTerminalView(console: cons)
			mDidLoaded = true
		}
	}
	#endif

	override var representedObject: Any? {
		didSet {
		// Update the view, if already loaded.
		}
	}

	private func loadTerminalView(console cons: CNConsole){
		if JTViewController.mIsFirstWindow {
			loadFirstTerminalView(console: cons)
			JTViewController.mIsFirstWindow = false
		} else {
			loadMoreTerminalView(console: cons)
		}
	}

	private func loadFirstTerminalView(console cons: CNConsole){
		/* Get URL for built-in package */
		guard let baseurl  = Bundle.main.resourceURL else {
			cons.error(string: "/* Failed to get resource URL */\n")
			return
		}
		//cons.print(string: "Resource URL: \(baseurl.path)")

		/* Load application */
		if let mainname = AMCFileLoader.loadApplication(parentViewController: self, URL: baseurl, console: cons) {
			cons.print(string: "Main name: \(mainname)\n")
		} else {
			cons.error(string: "No main name\n")
		}
	}

	private func loadMoreTerminalView(console cons: CNConsole){
		let shellview = AMCSingleViewController(viewName: "shell_window", parentViewController: self, console: cons)
		super.add(name: "shell_window", viewController: shellview)
		if !super.pushViewController(byName: "shell_window") {
			log(type: .error, string: "Failed to load shell_window", file: #file, line: #line, function: #function)
		}
	}
}

