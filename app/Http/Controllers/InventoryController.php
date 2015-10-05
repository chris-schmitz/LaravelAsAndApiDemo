<?php

namespace App\Http\Controllers;

use App\Exceptions\FormValidationException;
use App\Http\Controllers\Controller;
use App\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InventoryController extends Controller
{
    protected $inventory;
    protected $imageDestinationBasePath = '/resources/images/';
    protected $validationRules = [
        'name' => 'required',
        'brand_id' => 'required|exists:brands,id',
        'price' => 'required|numeric|min:0',
        'image' => 'image',
    ];

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

        $validation = Validator::make($request->all(), $this->validationRules);
        if ($validation->fails()) {
            throw new FormValidationException($validation->errors());
        }

        if ($request->hasFile('image')) {
            $fullDestinationPath = $this->imageDestinationBasePath . $request->get('brand_id');
            $fileName = rawurldecode($request->file('image')->getClientOriginalName());
            $request->file('image')->move(public_path() . $fullDestinationPath, $fileName);

            $filePathAndName = $fullDestinationPath . "/" . $fileName;
        }

        // ooh, fancy!! :P
        $input = collect($request->input());
        $input->map(function ($value, $key) {
            $this->inventory->{$key} = $value;
        });

        $this->inventory->image_path = $filePathAndName;
        $this->inventory->save();

        return ['success' => true];
    }

    public function show($id)
    {
        $record = $this->inventory->findOrFail($id);
        return compact('record');
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
