#
# lint.mk
#

all: test.js
	eslint --config eslintrc.json test.js

test.js: libtrek.js main.js
	cat $^ > $@


