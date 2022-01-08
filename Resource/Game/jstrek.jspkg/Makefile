#
#
#

srcs		= model.ts \
		  control.ts \
		  view.ts \
		  main.ts

dsts		= $(srcs:.ts=.js)
decls		= $(srcs:.ts=.d.ts)

types_dir 	= ../../Library/types
lib_type	= $(types_dir)/KiwiLibrary.d.ts
comp_type	= $(types_dir)/

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty

%.js: %.ts
	$(tsc) $(tsc_opt) $<


all: types $(dsts)

clean:
	rm -f $(dsts)

types: ./types/KiwiLibrary.d.ts ./types/KiwiComponent.d.ts \
       ./types/KiwiShell.d.ts

./types/KiwiLibrary.d.ts: $(types_dir)/KiwiLibrary.d.ts
	cp $< $@

./types/KiwiComponent.d.ts: $(types_dir)/KiwiComponent.d.ts
	cp $< $@

./types/KiwiShell.d.ts: $(types_dir)/KiwiShell.d.ts
	cp $< $@

dummy:

