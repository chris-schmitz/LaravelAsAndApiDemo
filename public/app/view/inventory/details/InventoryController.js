Ext.define('InventoryDemo.view.inventory.details.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-details-inventory',

    updateRecord: function (button, e){
        debugger;
        var form = button.up('form').getForm();
        // form.setValues({'_method': ''});
        form.submit({
            scope: this,
            success: function (response){
                 Ext.toast({
                     html: 'Record updated.',
                     title: 'Success',
                     width: 200,
                     align: 't'
                 });
            }
        });
        
    },

    // deleteRecord: function (button, e){
    //     debugger;
    //     var form = button.up('form').getForm();
    //     form.setValues({'_method': 'DELETE'});
    // }
    
});
