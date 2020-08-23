#
#
#

doc_dir		= .
resource_dir	= ../Resource
sample_dir	= $(resource_dir)/Sample/AppleScript

m4_cmd	= m4 --prefix-builtins \
	     --include=$(sample_dir) \
	     $(doc_dir)/Script/m4_header.m4

%.md: %.md-in
	$(m4_cmd) $< > $@

all: $(doc_dir)/AppleScript.md

clean:
	rm -f $(doc_dir)/AppleScript.md

dummy:

