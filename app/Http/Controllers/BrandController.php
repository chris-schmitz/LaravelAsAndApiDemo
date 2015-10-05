<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Http\Controllers\Controller;

class BrandController extends Controller
{
    protected $brand;

    public function __construct(Brand $brand)
    {
        $this->brand = $brand;
    }

    public function index()
    {
        $records = $this->brand->all();
        return compact('records');
    }
}
