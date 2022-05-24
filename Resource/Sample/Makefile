#
# Makefile
#

srcs	= alert.ts \
	  bitmap.jspkg/main.ts \
	  box.jspkg/main.ts \
	  buttons.jspkg/main.ts \
	  checkbox.jspkg/main.ts \
	  collection0.ts \
	  collection1.jspkg/main.ts \
	  colors.ts \
	  console-1.ts \
	  controls.jspkg/main.ts \
	  curses-frame.ts \
	  dictionary.ts \
	  drawing.jspkg/main.ts \
	  enter-view-2.jspkg/main.ts \
	  enter-view-3.jspkg/main.ts \
	  escape-code.ts \
	  exit.ts \
	  file.ts \
	  func-1.jspkg/main.ts \
	  graphics.jspkg/main.ts \
	  hello.ts \
	  hello_color.ts \
	  hello-world.jspkg/main.ts \
	  icon.jspkg/main.ts \
	  init.jspkg/main.ts \
	  image.jspkg/main.ts \
	  listner-1.jspkg/main.ts \
	  listner-2.jspkg/main.ts \
	  keycode.ts \
	  openPanel.ts \
	  popup-menu.jspkg/main.ts \
	  primitives-0.ts \
	  radio-button.jspkg/main.ts \
	  readline.ts \
	  readline-menu.ts \
	  scroll0.ts \
	  stdin.ts \
	  stepper.jspkg/main.ts \
	  symbol.ts \
	  text.ts \
	  text-field.jspkg/main.ts \
	  value-storage-1.jspkg/main.ts \
	  value-storage-2.jspkg/main.ts \
	  value-storage-3.jspkg/main.ts \
	  value-table-1.jspkg/main.ts \
	  value-table-2.jspkg/main.ts \
	  value-table-3.jspkg/main.ts \
	  value-table-4.jspkg/main.ts \
	  value-table-5.jspkg/main.ts \
	  value-table-6.jspkg/main.ts \
	  value-table-7.jspkg/main.ts \
	  turtle.jspkg/main.ts \
	  turtle.jspkg/pattern.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) resources $(dsts)

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

clean:
	rm -f $(dsts)

resources: ./icon.jspkg/terminal-icon.png

./icon.jspkg/terminal-icon.png: ../Welcome.jspkg/terminal-icon.png
	cp $< $@


dummy:

