Ext.define("InventoryDemo.view.inventory.Inventory",{
    extend: "Ext.grid.Panel",
    xtype: 'inventory',

    requires: [
        "InventoryDemo.view.inventory.InventoryController",
        "InventoryDemo.view.inventory.InventoryModel"
    ],

    controller: "inventory-inventory",
    viewModel: {
        type: "inventory-inventory"
    },

    bind:{
        store: '{inventory}'
    },
    closable: true,

    listeners:{
        itemclick: 'showDetails'
    },

    columns:[
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Price', dataIndex: 'price' },
        { text: 'Active', dataIndex: 'active' },
    ]

});
