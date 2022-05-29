#
# common.mk
#

tsc	= npx tsc
tsc_opt	= -t ES2017 --lib "es2017" \
	  --declaration true \
	  --declarationDir ./types \
	  --alwaysStrict --strict --strictNullChecks --pretty


%.js: %.ts
	$(tsc) $(tsc_opt) $<

