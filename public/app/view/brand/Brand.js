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

    listeners:{
        itemclick: 'onBrandSelect'
    },

    bind:{
        store: '{brands}'
    },
    defaults:{
        xtype: 'gridcolumn'
    },
    columns:[
        {text: 'Brand', dataIndex: 'name', flex: 1}
    ]
});