<?php

Route::get('/brands', 'BrandController@index');
Route::get('/brand/{brandId}/inventory', 'BrandInventoryController@index');
Route::resource('/inventory', 'InventoryController');
