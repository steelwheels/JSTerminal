#
# Makefile
#

srcs	= main.ts \
	  character/character.ts \
	  character/weapon.ts

dsts	= $(srcs:.ts=.js)
decls	= $(srcs:.ts=.d.ts)

tsc	= npx tsc
tsc_opt	= -target ES2017 \
	  --lib "es2017" \
	  --declaration \
	  --alwaysStrict \
	  --strict \
	  --strictNullChecks \
	  --pretty \
	  --baseUrl "." \
	  --rootDir "." \
	  --declarationDir ./types

%.js: %.ts
	$(tsc) $(tsc_opt) $<

all: copylib $(dsts)

clean:
	rm -f $(dsts)
	(cd $(HOME)//Library/Containers/github.com.steelwheels.JSTerminal/Data/Library/Application\ Support && rm -rf LiL.jspkg)

copylib: dummy
	cp ../../Library/types/*.d.ts ./types

character/party.ts: character/character.ts

dummy:

