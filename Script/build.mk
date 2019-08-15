#
#
#

osx_dir		= OSX
ios_dir		= iOS
script_dir	= Script
env_file	= xcode_sets.env

all: osx # ios

osx: dummy
	(cd $(osx_dir) \
	 && bash ../$(script_dir)/export_env.sh $(env_file) \
	 && source ${env_file} \
	 && echo "PROJECT_NAME=$$PROJECT_NAME" \
	 && make -f ../$(script_dir)/install_osx.mk \
	 && rm $(env_file) \
	)

ios: dummy
	(cd $(ios_dir) \
	 && bash ../$(script_dir)/export_env.sh $(env_file) \
	 && source ${env_file} \
	 && echo "PROJECT_NAME=$$PROJECT_NAME" \
	 && make -f ../$(script_dir)/install_ios.mk \
	 && rm $(env_file) \
	)

dummy:
