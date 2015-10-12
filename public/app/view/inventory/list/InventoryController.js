Ext.define('InventoryDemo.view.inventory.list.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-inventory',

    showDetails: function (grid, record, item, index, e, eOpts){
        if(this.lookupReference('inventorydetails') !== null){
            this.lookupReference('inventorydetails').destroy();
        }
        details = Ext.create('InventoryDemo.view.inventory.details.Inventory',{
            session: true,
            listeners:{
                refreshList: 'onRefreshList'
            }
        });

        // but this does
        details.getViewModel().linkTo('inventoryitem', record);
        // // but this does
        // details.getViewModel().linkTo('inventoryitem', {
        //     id: record.id,
        //     type: 'InventoryDemo.model.Inventory'
        // });
        this.getView().add(details);
    },

    onRefreshList: function (){
        this.getViewModel().get('inventory').load();
    }
    
});
