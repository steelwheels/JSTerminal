/*
 * @file AppDelegate.swift
 * @brief Define AppDelegate class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

#if os(OSX)

import KiwiControls
import CoconutData
import Cocoa

@NSApplicationMain
class AppDelegate: KCApplicationDelegate
{
	override func applicationWillFinishLaunching(_ notification: Notification) {
		super.applicationWillFinishLaunching(notification)
		UserDefaults.standard.applyDefaultSetting()
	}

	override func applicationDidFinishLaunching(_ notification: Notification) {
		super.applicationDidFinishLaunching(notification)
	}

	override func applicationWillTerminate(_ aNotification: Notification) {
		super.applicationWillTerminate(aNotification)
	}

	@IBAction public func openLogWindow(_ sender: Any) {
		if let _ = sender as? NSMenuItem {
			/* Update log level to output log */
			let _ = KCLogManager.shared
			let syspref = CNPreference.shared.systemPreference
			syspref.logLevel = .debug
		}
	}
}

#else

import UIKit

@UIApplicationMain
class AppDelegate: KCApplicationDelegate
{
	func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
		// Override point for customization after application launch.
		return true
	}

	// MARK: UISceneSession Lifecycle

	func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
		// Called when a new scene session is being created.
		// Use this method to select a configuration to create the new scene with.
		return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
	}

	func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
		// Called when the user discards a scene session.
		// If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
		// Use this method to release any resources that were specific to the discarded scenes, as they will not return.
	}
}

#endif

