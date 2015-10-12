Ext.define("InventoryDemo.view.inventory.list.Inventory",{
    extend: "Ext.container.Container",
    xtype: 'inventory',

    requires: [
        "InventoryDemo.view.inventory.list.InventoryController",
        "InventoryDemo.view.inventory.list.InventoryModel"
    ],

    controller: "inventory-inventory",
    viewModel: {
        type: "inventory-inventory"
    },
    closable: true,
    layout:{
        type: 'hbox',
        align: 'stretch'
    },
    items:[
        {
            xtype: 'grid',
            flex: 1,
            bind:{
                store: '{inventory}'
            },

            listeners:{
                itemclick: 'showDetails'
            },

            columns:[
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Price', dataIndex: 'price' },
                { text: 'Active', dataIndex: 'active' },
            ]
        }
    ]
});
