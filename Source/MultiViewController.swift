/**
 * @file MultiViewController.swift
 * @brief Define MultiViewController class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiComponents
import KiwiEngine
import CoconutShell
import Foundation

public class MultiViewController: KMMultiComponentViewController
{
	public static let TerminalViewControllerName	= "terminal"

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

		/* Add subview */
		if let res = self.resource {
			if let url = res.URLOfView(identifier: "terminal") {
				super.pushViewController(sourceURL: url, context: nil)
			} else {
				NSLog("Failed to get URL")
			}
		}
	}
}
