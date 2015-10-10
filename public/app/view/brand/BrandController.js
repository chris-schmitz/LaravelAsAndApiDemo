Ext.define('InventoryDemo.view.brand.BrandController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.brand-brand',

    onBrandSelect: function (table, record, item, index, e, eOpts){
        this.getView().fireEvent('openBrandTab', record);
    }
    
});
