#
#
#

include ../common.mk

srcs = main.ts
dsts = $(srcs:.ts=.js)

all: $(dsts)

clean:
	rm -f $(dsts)

main.ts: types/enum.d.ts

types/enum.d.ts: enum.json manifest.json
	 ~/tools/bin/jsdecl ../enum-1.jspkg > $@

