/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';
  config.contentsCss = "fonts.css";
  config.font_names =
    "BBCNassim;IRANSansX;Vazirmatn;B-Nazanin;Tabssom" + config.font_names;

   config.extraPlugins = 'video';

};
