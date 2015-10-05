
Ext.define("InventoryDemo.view.brand.Brand",{
    extend: "Ext.grid.Panel",
    xtype: 'brand',

    requires: [
        "InventoryDemo.view.brand.BrandController",
        "InventoryDemo.view.brand.BrandModel"
    ],

    controller: "brand-brand",
    viewModel: {
        type: "brand-brand"
    },

    bind:{
        store: '{brands}'
    },
    columns:[
        {text: 'Name', dataIndex: 'name'}
    ]
});
