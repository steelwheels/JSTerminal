#
#
#

env_file=$1

if [ "x${env_file}" = "x" ] ; then
	echo "No output file is given"
	exit 1
fi

if (xcodebuild -showBuildSettings) \
   | grep -e "PROJECT_NAME" -e "BUILD_DIR" -e "INSTALL_PATH" \
   | sed -e 's/[ 	]//g' -e 's/=/="/' -e 's/$/"/' -e 's/^/export /' \
   > ${env_file} ; then
	echo "generate ... ${env_file}"
else
	echo "Failed to generate ${env_file}"
	exit 1
fi

