/***********************************************************************************************************************

	i18n-chs.js – 简体中文

	Localization by: Billsfriend, with help of old script by Liyro Pen.

	Copyright © 2019–2021 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

	For more information about the guidelines used to create this localization, see:
		http://www.motoslave.net/sugarcube/2/docs/#guide-localization

***********************************************************************************************************************/
/* global l10nStrings */
/* eslint-disable strict */

/*
	ATTENTION TRANSLATORS

	The capitalization and punctuation used within the default replacement strings is
	deliberate, especially within the error and warning strings.  You would do well
	to keep your translations similar when possible.

	Replacement patterns have the format `{NAME}` (e.g. {identity}), where NAME is the
	name of a property within either the `l10nStrings` object or, in a few cases, an
	object supplied locally where the string is used—these instances will be commented.

	By convention, properties starting with an underscore (e.g. _warningIntroLacking)
	are used as templates, only being included within other localized strings.  Feel
	free to add your own if that makes localization easier—e.g. for gender, plurals,
	and whatnot.  As an example, the default replacement strings make use of this to
	handle various warning intros and outros.

	In use, replacement patterns are replaced recursively, so replacement strings may
	contain patterns whose replacements contain other patterns.  Because replacement is
	recursive, care must be taken to ensure infinite loops are not created—the system
	will detect an infinite loop and throw an error.

	FOR MORE INFORMATION: http://www.motoslave.net/sugarcube/2/docs/#guide-localization

	ALSO NOTE: There are two versions of this file within the repository.

		* The current release version, which is on the `master` branch.
			https://raw.githubusercontent.com/tmedwards/sugarcube-2/master/locale/l10n-template.js

		* The development version, which is on the `develop` branch.
			https://raw.githubusercontent.com/tmedwards/sugarcube-2/develop/locale/l10n-template.js

	You will likely want to use the development version.
*/
(function () {
	/*******************************************************************************
		General.
	*******************************************************************************/

	l10nStrings.textAbort = '终止';

	l10nStrings.textAborting = '正在终止';

	l10nStrings.textCancel = '取消';

	l10nStrings.textClear = '清空';

	l10nStrings.textClose = '关闭';

	l10nStrings.textDelete = '删除';

	l10nStrings.textExport = '导出';

	// In lowercase, if possible.
	l10nStrings.textIdentity = '游戏';

	l10nStrings.textImport = '导入';

	l10nStrings.textLoad = '读取';

	l10nStrings.textOff = '关闭';

	l10nStrings.textOk = '确认';

	l10nStrings.textOn = '开启';

	l10nStrings.textSave = '存档';

	// (noun) chance to act (in a game), moment, period
	l10nStrings.textTurn = '回合';


	/*******************************************************************************
		Errors.
	*******************************************************************************/

	// NOTE: `passage` is supplied locally.
	l10nStrings.errorNonexistentPassage = '段落"{passage}"不存在';


	/*******************************************************************************
		Warnings.
	*******************************************************************************/

	l10nStrings.warningNoStorage = '缺少所有可用的存储 API。可能的原因是禁用了第三方 cookie 设置（这也会影响网络存储），或使用了隐身（隐私）浏览模式。';

	l10nStrings.warningNoWebStorage = '网络存储 API 丢失，因此该{textIdentity}以降级模式运行。您可以继续运行，但某些部分可能无法正常工作。';

	l10nStrings.warningDegraded = '支持该{textIdentity}所需的某些功能缺失，因此正在降级模式下运行。您可以继续运行，但某些部分可能无法正常工作。';

	l10nStrings.warningNoSaves = '某些支持存档所需的功能缺失，因此在此次会话中已禁用存档功能。';


	/*******************************************************************************
		API: Save.
	*******************************************************************************/

	l10nStrings.saveErrorDisallowed = '现在不允许存档';

	l10nStrings.saveErrorDecodeFail = '无法解码存档，可能是文件损坏';

	l10nStrings.saveErrorDiskLoadFail = '从磁盘中读取存档文件失败';

	l10nStrings.saveErrorIdMismatch = '存档来自错误的{textIdentity}';

	l10nStrings.saveErrorInvalidData = '存档缺少必要的数据，可能是文件损坏';

	l10nStrings.saveErrorNonexistent = '存档不存在';


	/*******************************************************************************
		Base UI.
	*******************************************************************************/

	l10nStrings.uiBarLabelToggle = '打开/关闭导航栏';

	l10nStrings.uiBarLabelBackward = '在{textIdentity}历史记录中后退';

	l10nStrings.uiBarLabelForward = '在{textIdentity}历史记录中前进';

	// [DEPRECATED]
	l10nStrings.uiBarLabelJumpto = '跳到{identity}的历史记录中的某一点';


	/*******************************************************************************
		Dialog: Alert.
	*******************************************************************************/

	l10nStrings.alertTitle = '警告';


	/*******************************************************************************
		Dialog: Restart.
	*******************************************************************************/

	l10nStrings.restartTitle = '重新开始';

	l10nStrings.restartMesgPrompt = '未保存的进度将会丢失。你确定要重新开始吗？';


	/*******************************************************************************
		Dialog: Saves.
	*******************************************************************************/

	l10nStrings.continueTitle = '继续';

	l10nStrings.savesTitle = '存档';

	l10nStrings.savesHeaderBrowser = '浏览器存档';

	l10nStrings.savesHeaderDisk = '硬盘存档';

	l10nStrings.savesLabelBrowserClear = '清除所有浏览器存档';

	l10nStrings.savesLabelBrowserExport = '批量导出浏览器存档';

	l10nStrings.savesLabelBrowserImport = '批量导入浏览器存档';

	l10nStrings.savesLabelDiskLoad = '从硬盘读取存档';

	l10nStrings.savesLabelDiskSave = '保存存档到硬盘';

	l10nStrings.savesTextBrowserAuto = '自动存档';

	l10nStrings.savesTextBrowserSlot = '存档槽位';

	l10nStrings.savesTextNoDate = '未知日期';


	/*******************************************************************************
		Dialog: Settings.
	*******************************************************************************/

	l10nStrings.settingsTitle = '设置';

	l10nStrings.settingsTextReset = '重置为默认值';


	/*******************************************************************************
		Debugging: Error Views.
	*******************************************************************************/

	l10nStrings.errorViewTitle = '错误';

	l10nStrings.errorViewLabelToggle = '切换错误视图';


	/*******************************************************************************
		Debugging: Debug bar.
	*******************************************************************************/

	l10nStrings.debugBarLabelToggle = '切换调试栏';

	l10nStrings.debugBarLabelViewsToggle = '切换调试视图';

	l10nStrings.debugBarLabelWatchAdd = '新的监视';

	l10nStrings.debugBarLabelWatchAll = '监视所有';

	l10nStrings.debugBarLabelWatchClear = '清除所有监视';

	l10nStrings.debugBarLabelWatchDelete = '删除这个监视';

	l10nStrings.debugBarLabelWatchPlaceholder = '变量名称';

	l10nStrings.debugBarLabelPassagePlaceholder = '段落名称';

	l10nStrings.debugBarLabelPassagePlay = '游玩段落';

	l10nStrings.debugBarLabelWatchToggle = '切换监视面板';

	l10nStrings.debugBarMesgNoWatches = '未设置监视';

	l10nStrings.debugBarTextAdd = '增加';

	l10nStrings.debugBarTextPassage = '段落';

	l10nStrings.debugBarTextViews = '视图';

	l10nStrings.debugBarTextWatch = '监视';


	/*******************************************************************************
		Macros.
	*******************************************************************************/

	// (verb) rewind, revert
	l10nStrings.macroBackText = '回退';

	// (verb) go/send back
	l10nStrings.macroReturnText = '返回';


	/*******************************************************************************
		[DEPRECATED] Dialog: Autoload.
	*******************************************************************************/

	l10nStrings.autoloadTitle = '自动读取';

	l10nStrings.autoloadMesgPrompt = '存在一个自动存档，读取它还是从头开始？';

	l10nStrings.autoloadTextCancel = '从头开始';

	l10nStrings.autoloadTextOk = '读取自动存档';


	/*******************************************************************************
		[DEPRECATED] Dialog: Jump To.
	*******************************************************************************/

	l10nStrings.jumptoTitle = '跳到';

	l10nStrings.jumptoMesgUnavailable = '现在没有可用的跳跃点\u2026';


	/*******************************************************************************
		[DEPRECATED] Dialog: Share.
	*******************************************************************************/

	l10nStrings.shareTitle = '分享';
})();
