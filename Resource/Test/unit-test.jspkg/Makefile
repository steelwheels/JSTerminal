#
# Makefile
#

srcs	= test_color.ts \
	  test_graphics.ts \
	  test_string.ts \
	  test_table.ts \
	  main.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) $(dsts)

$(srcdecl): dummy
	if [ -f ~/Development/Library/KiwiLibrary.d.ts ] ; then \
		cp  ~/Development/Library/KiwiLibrary.d.ts $@ ; \
	fi

clean:
	rm -f $(dsts)

dummy:

