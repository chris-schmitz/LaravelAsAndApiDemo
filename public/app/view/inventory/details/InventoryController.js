Ext.define('InventoryDemo.view.inventory.details.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-details-inventory',

    createRecord: function (button, e){
        var recordData = this.getViewModel().get('inventoryitem');
        var record = Ext.create('InventoryDemo.model.Inventory');
        // probably not the right way of setting the model's data, but it works!!!
        record.data = recordData;
        record.save();
        this.showMessage('Record Saved', 'The record has been saved.');
    },

    updateRecord: function (button, e){
        var record = this.getViewModel().get('inventoryitem');
        record.getProxy().setExtraParam('_method', 'PUT');
        record.save();
        this.showMessage('Record Updated', 'The record has been updated.');
    },

    deleteRecord: function (button, e){
        var record = this.getViewModel().get('inventoryitem');
        record.getProxy().setExtraParam('_method', 'DELETE');
        record.erase();
        this.getView().destroy();
        this.showMessage('Record Deleted', 'The record has been deleted.');

        // see if there's a better way of handling this. If the record is really linked to 
        // the list's viewmodel you'd think the refresh would happen automatically as part
        // of the `record.erase()`. There should be some better way of doing this where it
        // affects the local store, not pull again from the server.
        this.getView().fireEvent('refreshList');
    },

    showMessage: function (title, message){

         Ext.toast({
             title: title,
             html: message,
             width: 300,
             align: 't'
         });
    }
    
});
