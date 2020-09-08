-- TextEdit.applescript
tell application "JSTerminal"
	-- activate
	-- make new document
	-- set text of front document to "Hello, world !!"
	-- set name of front document to "a"
	set fpath to (((POSIX path of (path to users folder)) & "tomoo/tmp_dir/a.txt") as POSIX file)
	save front document as text in fpath
	-- save front document as text in (((POSIX path of (path to users folder)) & "tomoo/tmp_dir/a.txt") as POSIX file)
	
end tell
