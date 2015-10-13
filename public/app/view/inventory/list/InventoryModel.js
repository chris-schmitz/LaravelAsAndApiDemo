Ext.define('InventoryDemo.view.inventory.list.InventoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.inventory-inventory',

    data:{
        brandId: null
    },

    stores:{
        inventory:{
            model: 'InventoryDemo.model.Inventory',
            proxy:{
                type: 'rest',
                url: 'inventoryperbrand',
                reader:{
                    type: 'json',
                    rootProperty: 'records'
                },
            }
        }
    }

});
