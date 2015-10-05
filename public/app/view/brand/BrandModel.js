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
            // model: 'InventoryDemo.model.Brand',
            fields:['id', 'name'],
            data:[
                {id: 1, name: 'test'},
                {id: 2, name: 'test again'},
            ]
        }
    }

});
