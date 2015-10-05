Ext.define('InventoryDemo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'InventoryDemo.view.main.MainController',
        'InventoryDemo.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',

    title: '<h1>Inventory Demo</h1>',
    layout:{
        type: 'hbox',
        align: 'stretch'
    },
    items:[
        {
            xtype: 'brand'
        },
        {
            xtype: 'inventory'
        }
    ]
});
