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
		let winsize = windowSizeBox()

		if let root = super.rootView {
			root.addSubview(winsize)
		}
	}

	private func windowSizeBox() -> KCStackView {
		let winsizelabel = KCTextField()
		winsizelabel.text = "Window size"

		let widthfield  = labeledTextEdit(labelName: "Width:",  value: 80)
		let heightfield = labeledTextEdit(labelName: "Height:", value: 25)
		let sizebox     = KCStackView()
		sizebox.axis = .horizontal
		sizebox.addArrangedSubView(subView: widthfield)
		sizebox.addArrangedSubView(subView: heightfield)

		let winsizebox = KCStackView()
		winsizebox.axis = .vertical
		winsizebox.addArrangedSubView(subView: winsizelabel)
		winsizebox.addArrangedSubView(subView: sizebox)
		return winsizebox
	}

	private func labeledTextEdit(labelName name: String, value val: Int) -> KCStackView {
		let label = KCTextField()
		label.text = name
		let field = KCTextEdit()
		field.text = "\(val)"
		field.isEnabled  = true
		field.isEditable = true
		let box = KCStackView()
		box.axis = .horizontal
		box.addArrangedSubView(subView: label)
		box.addArrangedSubView(subView: field)
		return box
	}
}

