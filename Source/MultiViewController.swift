/**
 * @file MultiViewController.swift
 * @brief Define MultiViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiComponents
import KiwiEngine
import KiwiControls
import CoconutData
import CoconutShell
import Foundation

public class MultiViewController: KMMultiComponentViewController
{
	public var sourceURL: URL? = nil

	open override func loadResource() -> KEResource {
		if let path = Bundle.main.path(forResource: "JSTerminal", ofType: "jspkg") {
			let resource = KEResource.init(baseURL: URL(fileURLWithPath: path))
			let loader   = KEManifestLoader()
			if let err = loader.load(into: resource) {
				NSLog("Failed to load manifest: \(err.toString())")
			}
			return resource
		} else {
			NSLog("Can not find JSTerminal.jspkg")
			return super.loadResource()
		}
	}

	open override func viewDidLoad() {
		super.viewDidLoad()

		/* Update log level */
		//let _ = KCLogManager.shared
		//let syspref = CNPreference.shared.systemPreference
		//syspref.logLevel = .detail

		/* Add subview */
		if let res = self.resource {
			let cbfunc: KMMultiComponentViewController.ViewSwitchCallback = {
				(_ val: CNNativeValue) -> Void in
				let valstr: String
				if let str = val.toString() {
					valstr = str
				} else {
					valstr = "<unknown>"
				}
				NSLog("mainView: return_val=\(valstr)")
			}
			let _ = super.pushViewController(source: .mainView(res), callback: cbfunc)
		}
	}
}
