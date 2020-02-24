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

public class PreferenceViewController: KCPlaneViewController
{
	private var mPreferenceView:	KCTerminalPreferenceView? = nil

	public override func loadView() {
		super.loadView()
		if let rootview = super.rootView {
			let termview = KCTerminalPreferenceView()
			rootview.setup(childView: termview)
			mPreferenceView = termview
		}
	}

	override public func viewDidAppear() {
		super.viewDidAppear()
	}
}

