Ext.define('InventoryDemo.view.inventory.details.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-details-inventory',

    updateRecord: function (button, e){
        var record = this.getViewModel().get('inventoryitem');
        record.getProxy().setExtraParam('_method', 'PUT');
        // is there a way of adding an extra parameter here for "_method='PUT'?"
        record.save();
    },

    deleteRecord: function (button, e){
        debugger;
        var record = this.getViewModel().get('inventoryitem');
        record.getProxy().setExtraParam('_method', 'DELETE');
        record.erase();
        this.getView().fireEvent('refreshList');
        this.getView().destroy();
    }
    
});
