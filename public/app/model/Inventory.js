Ext.define('InventoryDemo.model.Inventory', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'brand_id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'price', type: 'auto' },
        { name: 'active', type: 'auto' },
        { name: 'image_path', type: 'auto' }
    ],

    proxy:{
        type: 'rest',
        url: 'inventory',
        actionMethods:{
            create: 'POST',
            read: 'GET',
            update: 'POST',
            destroy: 'POST'
        },
        reader:{
            type: 'json',
            rootProperty: 'record'
        }
    }
});
