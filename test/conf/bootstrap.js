/**
 * This file is generated by Sencha Cmd and should NOT be edited.  It is 
 * provided to support globbing requires, custom xtypes, and other 
 * metadata-driven class system features 
 */
Ext.Loader.addClassPathMappings({
  "Ext": "ext/src",
  "App": "app"
});
Ext.ClassManager.addNameAlternateMappings({
  "App.Original": [
    "App.Orig"
  ],
  "App.doodad.Manager": [
    "App.DoodadManager",
    "App.DoodadMgr"
  ]
});
Ext.ClassManager.addNameAliasMappings({
  "App.Widget": [
    "widget.appwidget"
  ],
  "App.Proxy": [
    "proxy.appproxy",
    "proxy.app"
  ]
});
Ext.Loader.loadScript("app/overrides/Something.js");