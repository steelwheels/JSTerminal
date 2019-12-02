#
# install.mk
#

PROJECT_NAME ?= JSTerminal
INSTALL_PATH ?= $(HOME)/Application
ARCHIVE_PATH ?= $(HOME)/tools/archive

all: install make_dmg

install: dummy
	xcodebuild install -target $(PROJECT_NAME) \
	  -project $(PROJECT_NAME).xcodeproj \
	  -configuration Release DSTROOT=/ ONLY_ACTIVE_ARCH=NO

make_dmg: dummy
	mkdir -p $(ARCHIVE_PATH)
	(cd $(ARCHIVE_PATH) && rm -rf JSTerminal JSTeminal.dmg && mkdir JSTerminal)
	(cd $(HOME)/Applications/Release ; tar cf - JSTerminal.app) | (cd $(ARCHIVE_PATH)/JSTerminal ; tar xfv -)
	hdiutil create $(ARCHIVE_PATH)/JSTeminal.dmg \
		-volname "JSTerminal Disk Image" \
	        -srcfolder $(ARCHIVE_PATH)/JSTerminal

dummy:
