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
        // Note that some of this would be good to move out to a service class, command, repository or at least
        // other methods within the controller. I'm keeping it all in the controller to make the demo easy to see.

        $this->validateForm($request);

        if ($request->hasFile('image')) {
            $filePathAndName = $this->moveFileToDestination($request);
            $this->inventory->image_path = $filePathAndName;
        }

        $this->setModelFields($request);
        $this->inventory->active = true;

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
        // Again, some of this logic could/should be abstracted and even normalized with the store
        // method, but we'll keep it all in method and independent for demonstration purposes.

    }

    public function destroy($id)
    {
    }

    protected function validateForm($request)
    {
        $validation = Validator::make($request->all(), $this->validationRules);
        if ($validation->fails()) {
            throw new FormValidationException($validation->errors());
        }
    }

    protected function moveFileToDestination($request)
    {
        $fullDestinationPath = $this->imageDestinationBasePath . $request->get('brand_id');
        $fileName = rawurldecode($request->file('image')->getClientOriginalName());
        $request->file('image')->move(public_path() . $fullDestinationPath, $fileName);

        $filePathAndName = $fullDestinationPath . "/" . $fileName;
        return $filePathAndName;
    }

    protected function setModelFields($request)
    {
        // ooh, fancy!! :P
        $input = collect($request->input());
        $input->map(function ($value, $key) {
            $this->inventory->{$key} = $value;
        });
    }
}
