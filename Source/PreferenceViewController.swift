/**
 * @file PreferenceViewController.swift
 * @brief Define PreferenceViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import KiwiShell
import KiwiEngine
import CoconutData
import JavaScriptCore

public class PreferenceViewController: KCMultiViewController
{
	public override func loadView() {
		super.loadView()

		/* Allocate cosole */
		let console = KCLogManager.shared.console
		super.set(console: console)

		/* Allocate terminal view */
		let controller = PreferenceSubViewController(parentViewController: self, console: console)
		self.add(name: "preference", viewController: controller)
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
		if !self.pushViewController(byName: "preference") {
			NSLog("Failed to push terminal controller")
		}
	}
}

public class PreferenceSubViewController: KCSingleViewController
{
	public override func loadView() {
		super.loadView()
		setupContext() ;
	}

	private func setupContext() {
		let termview = KCTerminalPreferenceView()
		let box = KCStackView()
		box.axis = .vertical
		box.addArrangedSubView(subView: termview)
		if let root = super.rootView {
			root.addSubview(box)
		}
	}
}

