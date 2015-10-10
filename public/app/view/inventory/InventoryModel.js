Ext.define('InventoryDemo.view.inventory.InventoryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.inventory-inventory',

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
