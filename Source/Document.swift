/*
 * @file Document.swift
 * @brief Define Document class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import KiwiEngine
import CoconutData
import Cocoa

class Document: KCDocument
{
	private var mResource: KEResource? = nil

	override init() {
	    super.init()
		// Add your subclass-specific initialization here.
	}

	override class var autosavesInPlace: Bool {
		return true
	}

	override func makeWindowControllers() {
		// Returns the Storyboard that contains your Document window.
		let storyboard = NSStoryboard(name: NSStoryboard.Name("Main"), bundle: nil)
		let windowController = storyboard.instantiateController(withIdentifier: NSStoryboard.SceneIdentifier("Document Window Controller")) as! NSWindowController
		self.addWindowController(windowController)

		/* Set script*/
		if let res = mResource {
			if let viewctrl = windowController.contentViewController as? ShellViewController {
				viewctrl.set(mode: .resource(res))
			}
		}
	}

	override func data(ofType typeName: String) throws -> Data {
		// Insert code here to write your document to data of the specified type, throwing an error in case of failure.
		// Alternatively, you could remove this method and override fileWrapper(ofType:), write(to:ofType:), or write(to:ofType:for:originalContentsURL:) instead.
		throw NSError(domain: NSOSStatusErrorDomain, code: unimpErr, userInfo: nil)
	}

	override func read(from url: URL, ofType typeName: String) throws {
		switch KEResource.allocateResource(from: url) {
		case .ok(let res):
			mResource = res
		case .error(let err):
			var diddisplayed = false
			let controllers  = self.windowControllers
			if controllers.count > 0 {
				if let vcont = controllers[0].contentViewController {
					let _ = KCAlert.runModal(error: err, in: vcont)
					diddisplayed = true
				}
			}
			if !diddisplayed {
				NSLog("\(#function): [Error] \(err.toString())")
			}
		}
	}

	override func read(from fileWrapper: FileWrapper, ofType typeName: String) throws {
		if let fname = fileWrapper.filename {
			let url = URL(fileURLWithPath: fname)
			try self.read(from: url, ofType: typeName)
		} else {
			NSLog("No file name: \(fileWrapper.description)")
		}
	}
}

