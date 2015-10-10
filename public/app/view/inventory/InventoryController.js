Ext.define('InventoryDemo.view.inventory.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-inventory',

    showDetails: function (grid, record, item, index, e, eOpts){
        debugger;
        var record = new InventoryDemo.model.Inventory({id: record.getId()});
        record.load({
            success: function (response){
                debugger;
            }
        })
    }
    
});
