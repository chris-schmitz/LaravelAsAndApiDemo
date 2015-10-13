Ext.define('InventoryDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    config: {
        openTabs: new Array
    },

    onOpenBrandTab:function (record, e){
        debugger;
        var tabset = this.lookupReference('inventoryTabSet');
        var existingTab = this.getOpenTabs().filter(function (tab){
            return (record.get('name') == tab.title);
        });

        if(existingTab.length === 0){
            var newtab = Ext.create('InventoryDemo.view.inventory.list.Inventory',{
                title: record.get('name')
            });

            // note, this *shouldn't* be the way we have to make this request,
            // but I'm not exactly sure how to manipulate the sencha proxy yet
            // to rebuild the url to handle the proper rest url to make the
            // request, so we're hacking it out.
            var store = newtab.getViewModel().getStore('inventory');
            store.getProxy().setExtraParam('brandid', record.getId());
            store.load();

            tabset.add(newtab);
            this.getOpenTabs().push(newtab);
            tabset.setActiveTab(newtab);
        } else {
            tabset.setActiveTab(existingTab[0]);
        }
    }
});
