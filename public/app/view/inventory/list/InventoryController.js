Ext.define('InventoryDemo.view.inventory.list.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-inventory',

    showDetails: function (grid, record, item, index, e, eOpts){
        var inventoryRecord = new InventoryDemo.model.Inventory({id: record.getId()});
        inventoryRecord.load({
            scope: this,
            success: function (response){
                debugger;
                if(this.lookupReference('inventorydetails') !== null){
                    this.lookupReference('inventorydetails').destroy();
                }
                var details = Ext.create('InventoryDemo.view.inventory.details.Inventory',{
                    title: response.get('name'),
                    url: 'inventory/' + response.getId(),
                    // method: 'POST',
                });
                details.loadRecord(response);
                this.getView().add(details);
            }
        });
    }
    
});
