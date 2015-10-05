<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inventory;

class BrandInventoryController extends Controller
{

    // Example of method injection
    public function index(Inventory $inventory, $brandId)
    {
        $records = $inventory->activeByBrand($brandId);
        return compact('records');
    }

}
