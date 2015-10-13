Ext.define("InventoryDemo.view.inventory.details.Inventory",{
    extend: "Ext.form.Panel",

    requires: [
        "InventoryDemo.view.inventory.details.InventoryController",
        "InventoryDemo.view.inventory.details.InventoryModel"
    ],

    controller: "inventory-details-inventory",
    viewModel: {
        type: "inventory-details-inventory"
    },

    flex: 1,
    closable: true,
    bodyPadding: 10,
    reference: 'inventorydetails',
    defaults:{
        layout: 'anchor',
        anchor: '50%'
    },
    dockedItems:[
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            reference: 'buttonbar',
            items:[
                {xtype: 'button', text: 'Delete', handler: 'deleteRecord'},
                "->"
            ]
        }
    ],

    items:[
        {
            xtype: 'fieldset',
            title: 'IDs',
            collapsible: true,
            defaults:{
                xtype: 'textfield'
            },
            items:[
                {
                    name: 'id',
                    fieldLabel: 'ID',
                    readOnly: true,
                    bind: '{inventoryitem.id}'
                },
                {
                    name: 'brand_id',
                    fieldLabel: 'Brand ID',
                    // readOnly: true,
                    bind: '{brandId}'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Details',
            defaults:{
                xtype: 'textfield'
            },
            items:[
                {
                    name: 'name',
                    fieldLabel: 'Name',
                    bind: '{inventoryitem.name}'
                },
                {
                    name: 'price',
                    fieldLabel: 'Price',
                    bind: '{inventoryitem.price}'
                }
            ]
        }
    ]
});
