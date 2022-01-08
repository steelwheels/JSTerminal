#
# Makefile
#

srcs	= adb.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) $(dsts)

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

clean:
	rm -f $(dsts)

dummy:

