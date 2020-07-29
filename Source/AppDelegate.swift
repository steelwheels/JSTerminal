/*
 * @file AppDelegate.swift
 * @brief Define AppDelegate class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

#if os(OSX)

import KiwiControls
import CoconutScript
import CoconutData
import Cocoa

@NSApplicationMain
class AppDelegate: CNScriptableAppicationDelegate
{
	func applicationWillFinishLaunching(_ notification: Notification) {
		UserDefaults.standard.applyDefaultSetting()
	}

	func applicationWillTerminate(_ aNotification: Notification) {
		// Insert code here to tear down your application
	}

	@IBAction public func openLogWindow(_ sender: Any) {
		if let _ = sender as? NSMenuItem {
			let manager = KCLogManager.shared
			if manager.enable {
				/* enable -> disable */
				manager.enable = false
			} else {
				/* disable -> enable */
				manager.enable = true
			}
		}
	}
}

#else

import UIKit

@UIApplicationMain
class AppDelegate: CNApplicationDelegate
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

