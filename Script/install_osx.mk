#
# install.mk
#

PROJECT_NAME ?= JSTerminal
DMG_PATH     ?= $(HOME)/tools/archive

TARGET_LIST  = JSTerminal

install: dummy
	for targ in $(TARGET_LIST) ; do \
		if xcodebuild install -target $$targ \
		  -project $(PROJECT_NAME).xcodeproj \
		  -configuration Release DSTROOT=/ ONLY_ACTIVE_ARCH=NO ; then \
			echo "done" ; \
		else \
			echo "*** Failed" ; \
			exit 1; \
		fi ; \
	done

make_dmg: dummy
	mkdir -p $(DMG_PATH)
	(cd $(DMG_PATH) && rm -rf JSTerminal JSTerminal.dmg && mkdir JSTerminal)
	(cd $(HOME)/Applications ; tar cf - JSTerminal.app) | (cd $(DMG_PATH)/JSTerminal ; tar xfv -)
	hdiutil create $(DMG_PATH)/JSTerminal.dmg \
		-volname "JSTerminal Disk Image" \
		-srcfolder $(DMG_PATH)/JSTerminal

dummy:

