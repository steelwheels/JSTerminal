#
#
#

doc_dir		= ..
resource_dir	= ../../Resource
sample_dir	= $(resource_dir)/Sample

m4_cmd	= m4 --prefix-builtins \
	     --include=$(sample_dir) \
	     $(doc_dir)/Script/m4_header.m4

%.md: %.md-in
	$(m4_cmd) $< > $@

all: GUIs.md

clean:
	rm -f GUIs.md

dummy:

