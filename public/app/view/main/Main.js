Ext.define('InventoryDemo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'InventoryDemo.view.brand.Brand',
        'InventoryDemo.view.main.MainController',
        'InventoryDemo.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',


    title: '<h1>Inventory Demo</h1>',
    layout: 'border',

    items:[
        {
            xtype: 'brand',
            title: 'Brands',
            header: false,
            region: 'west',
            width: 200,
            split: true,
            listeners:{
                openBrandTab: 'onOpenBrandTab'
            }
        },
        {
            xtype: 'tabpanel',
            title: 'Inventories',
            header: false,
            region: 'center',
            reference: 'inventoryTabSet'
        }
    ]
});
