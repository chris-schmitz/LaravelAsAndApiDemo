
Ext.define("InventoryDemo.view.inventory.Inventory",{
    extend: "Ext.panel.Panel",
    xtype: 'inventory',

    requires: [
        "InventoryDemo.view.inventory.InventoryController",
        "InventoryDemo.view.inventory.InventoryModel"
    ],

    controller: "inventory-inventory",
    viewModel: {
        type: "inventory-inventory"
    },

    html: "Hello, World!!"
});
