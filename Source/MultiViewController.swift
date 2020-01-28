/**
 * @file	MultiViewController.swift
 * @brief Define MultiViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiTerminal
import KiwiControls
import Cocoa

class MultiViewController: KCMultiViewController
{
	override func loadView() {
		super.loadView()

		/* Allocate cosole */
		let console = KCLogManager.shared.console
		super.set(console: console)

		/* Allocate terminal view */
		let controller = ShellViewController(parentViewController: self, console: console)
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

