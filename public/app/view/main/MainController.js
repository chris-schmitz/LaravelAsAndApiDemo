Ext.define('InventoryDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onOpenBrandTab:function (record, e){
        var tabset = this.lookupReference('inventoryTabSet');
        var newtab = Ext.create('InventoryDemo.view.inventory.Inventory',{
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
        tabset.setActiveTab(newtab);
    }
});
