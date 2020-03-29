/*
 * @file Document.swift
 * @brief Define Document class
 * @par Copyright
 *   Copyright (C) 2020 Steel Wheels Project
 */

import KiwiControls
import Cocoa

class Document: KCDocument
{
	private var mScript: String? = nil

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
		if let scr = mScript {
			if let viewctrl = windowController.contentViewController as? ShellViewController {
				viewctrl.set(mode: .script(scr))
			}
		}
	}

	override func data(ofType typeName: String) throws -> Data {
		// Insert code here to write your document to data of the specified type, throwing an error in case of failure.
		// Alternatively, you could remove this method and override fileWrapper(ofType:), write(to:ofType:), or write(to:ofType:for:originalContentsURL:) instead.
		throw NSError(domain: NSOSStatusErrorDomain, code: unimpErr, userInfo: nil)
	}

	override func read(from data: Data, ofType typeName: String) throws {
		// Insert code here to read your document from the given data of the specified type, throwing an error in case of failure.
		// Alternatively, you could remove this method and override read(from:ofType:) instead.
		// If you do, you should also override isEntireFileLoaded to return false if the contents are lazily loaded.
		if let str = String(data: data, encoding: .utf8) {
			mScript = str
		} else {
			throw NSError.fileError(message: "Failed to read script file")
		}
	}
}

