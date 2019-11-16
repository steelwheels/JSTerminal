#
#
#

osx_dir		= Project
script_dir	= Script
env_file	= xcode_sets.env

all: osx 

osx: dummy
	(cd $(osx_dir) \
	 && bash ../$(script_dir)/export_env.sh $(env_file) \
	 && source ${env_file} \
	 && echo "PROJECT_NAME=$$PROJECT_NAME" \
	 && make -f ../$(script_dir)/install_osx.mk \
	 && rm $(env_file) \
	)

dummy:
