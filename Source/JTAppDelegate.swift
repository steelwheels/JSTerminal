/**
 * @file	JTAppDelegate.swift
 * @brief	Define JTAppDelegate class
 * @par Copyright
 *   Copyright (C) 2019 Steel Wheels Project
 */

import CoconutData
import Cocoa

@NSApplicationMain
class JTAppDelegate: NSObject, NSApplicationDelegate
{
	func applicationDidFinishLaunching(_ aNotification: Notification) {
		// Initialize the application
		CNPreference.shared.applicationPreference.isWindowApplication = true
	}

	func applicationWillTerminate(_ aNotification: Notification) {
		// Insert code here to tear down your application
	}
}

