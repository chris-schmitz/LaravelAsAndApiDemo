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
        this.getView().destroy();

        // see if there's a better way of handling this. If the record is really linked to 
        // the list's viewmodel you'd think the refresh would happen automatically as part
        // of the `record.erase()`. There should be some better way of doing this where it
        // affects the local store, not pull again from the server.
        this.getView().fireEvent('refreshList');
    }
    
});
