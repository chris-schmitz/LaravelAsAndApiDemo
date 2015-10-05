<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    protected $inventory;
    protected $imageDestinationBasePath = '/resources/images/';

    public function __construct(Inventory $inventory)
    {
        $this->inventory = $inventory;
    }

    public function index()
    {
        $records = $this->inventory->active();
        return compact('records');
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $record = $this->inventory->findOrFail($id);
        return compact('record');
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
