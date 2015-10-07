<?php

Route::get('/brands', 'BrandController@index');
Route::get('/brand/{brandId}/inventory', 'BrandInventoryController@index');

Route::resource('/inventory', 'InventoryController');
Route::put('/inventory/{inventoryId}/markactive', 'InventoryController@markItemActive');
Route::put('/inventory/{inventoryId}/markinactive', 'InventoryController@markItemInactive');
