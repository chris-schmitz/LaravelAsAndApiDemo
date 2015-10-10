Ext.define('InventoryDemo.view.brand.BrandModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.brand-brand',
    requires:[
        'InventoryDemo.model.Brand'
    ],
    data: {
        name: 'InventoryDemo'
    },

    stores:{
        brands:{
            model: 'InventoryDemo.model.Brand',
            autoLoad: true,
            proxy:{
                type: 'rest',
                url: 'brands',
                reader:{
                    type: 'json',
                    rootProperty: 'records'
                }
            }
        }
    }

});