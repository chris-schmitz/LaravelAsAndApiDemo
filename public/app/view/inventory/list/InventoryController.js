Ext.define('InventoryDemo.view.inventory.list.InventoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inventory-inventory',

    config:{
        detailsPanel: null
    },

    showDetails: function (grid, record, item, index, e, eOpts){
        this.createDetailsPanel();
        this.addTitleToDetailsPanel(record.get('name'));

        details.getViewModel().linkTo('inventoryitem', record);

        // this shouldn't be necessary since the two viewmodels are chained, but something about setting the link must 
        // alter the chaining (?)
        details.getViewModel().set('brandId', this.getViewModel().get('brandId'));

        this.addDetailsPanelToView();
        
        var submitButtonConfig = {xtype: 'button', text: 'Update', handler: 'updateRecord'};
        this.addSubmitButtonToDetailsPanel(submitButtonConfig);
    },

    newInventoryItem: function (button, e){
        this.createDetailsPanel();
        this.addTitleToDetailsPanel('New Item');
        this.addDetailsPanelToView();
        
        var submitButtonConfig = {xtype: 'button', text: 'Save', handler: 'createRecord'};
        this.addSubmitButtonToDetailsPanel(submitButtonConfig);
    },

    createDetailsPanel: function (){
        if(this.getDetailsPanel() !== null){
            this.getDetailsPanel().destroy();
        }
        details = Ext.create('InventoryDemo.view.inventory.details.Inventory',{
            session: true,
            listeners:{
                refreshList: 'onRefreshList'
            }
        });

        this.setDetailsPanel(details);
    },

    addDetailsPanelToView: function (){
        this.getView().add(this.getDetailsPanel());
    },

    addTitleToDetailsPanel: function (title){
        this.getDetailsPanel().setTitle("<h3>" + title + "</h3>");
    },

    addSubmitButtonToDetailsPanel: function (buttonConfig){
        this.getDetailsPanel().getController().lookupReference('buttonbar').add(buttonConfig);
    },

    onRefreshList: function (){
        this.getViewModel().get('inventory').load();
    }
});
