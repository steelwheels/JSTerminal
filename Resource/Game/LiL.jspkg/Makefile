#
# Makefile
#

srcs	= main.ts
dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" --declaration --declarationDir types \
	  --typeRoots types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: $(dsts)

clean:
	rm -f $(dsts)

dummy:

