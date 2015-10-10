<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inventory;
use Illuminate\Http\Request;

class BrandInventoryController extends Controller
{

    // Example of method injection
    public function index(Request $request, Inventory $inventory)
    {
        $brandId = $request->get('brandid');
        $records = $inventory->activeByBrand($brandId);
        return compact('records');
    }

}
