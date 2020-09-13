-- TextEdit.applescript
tell application "TextEdit"
	activate
	open POSIX file "/Users/Tomoo/Project/JSTerminal/Resource/Sample/hello.js"
	close front window
	-- make new document
	-- set text of front document to "Hello, world !!"
	-- set name of front document to "a"
	-- set fpath to (((POSIX path of (path to users folder)) & "tomoo/tmp_dir/a.txt") as POSIX file)
	-- save front document as text in fpath
	-- save front document as text in (((POSIX path of (path to users folder)) & "tomoo/tmp_dir/a.txt") as POSIX file)
	
end tell
