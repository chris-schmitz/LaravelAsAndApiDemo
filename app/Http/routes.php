<?php

Route::get('/brands', 'BrandController@index');

// Route::get('/brand/{brandId}/inventory', 'BrandInventoryController@index');
// This is the route uri I would normally use, but apparently sencha's rest
// proxy doesn't allow you to build more complex uris. Since this is a demo I'm
// just going to mangle the uri :/
Route::get('/inventoryperbrand/', 'BrandInventoryController@index');

Route::resource('/inventory', 'InventoryController');
Route::put('/inventory/{inventoryId}/markactive', 'InventoryController@markItemActive');
Route::put('/inventory/{inventoryId}/markinactive', 'InventoryController@markItemInactive');
