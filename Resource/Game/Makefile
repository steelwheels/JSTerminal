#
# Makefile
#

srcs	= moo.ts \
	  hangman.ts
dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

srcdecl	= ./types/KiwiLibrary.d.ts

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(srcdecl) $(dsts) LiL

$(srcdecl): dummy
	cp ../Library/types/*.d.ts ./types

LiL: dummy
	(cd LiL.jspkg && make)

clean:
	rm -f $(dsts)
	(cd LiL.jspkg && make clean)

dummy:

