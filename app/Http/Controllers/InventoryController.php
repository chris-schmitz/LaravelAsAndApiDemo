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

        $this->setModelFields($request->all(), $this->inventory);
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
        // $this->validateForm($request);

        $inventoryItem = $this->inventory->findOrFail($id);

        if ($request->hasFile('image')) {
            $filePathAndName = $this->moveFileToDestination($request);
            $inventoryItem->image_path = $filePathAndName;
        }

        $requestData = $request->except('_method');
        // $requestData['active'] = (bool) $requestData['active']; // Get false as the constant, not as a string

        $this->setModelFields($requestData, $inventoryItem);
        $inventoryItem->active = true;

        $inventoryItem->save();

        return ['success' => true];

    }

    public function destroy($id)
    {
        $this->inventory->findOrFail($id)->delete();
        return ['success' => true];
    }

    // I'm leaving this in as a commented out rough in because I think it's a good bit of
    // structural planning that you may not see normally. I started with the idea of toggling the
    // status but then stopped because I didn't know if that was the best choice. Here's why I decided
    // against it:
    //
    // public function toggleActive(Request $request, $id)
    // {
    //     // should we handle this with a toggle or specific set active/inactive?
    //     // if we do a toggle we're putting the responsibility of knowing the existing state on the server
    //     // if we do specific set active/inactive routes and methods we're putting the responsibility of knowing the existing state on the client
    //     //
    //     // Since we're building this with a JS front end, we should put the responsibility on the client. If we put it on the server we would have
    //     // to make sure our front end state display matched the server whereas if we make it the client's responsibility then we don't have to worry as
    //     // much (e.g. you're always telling the server what the state *should be* according to the client regardless of what it is currently).
    //     //
    //     // If we were building server rendered views it would probably make more sense to make it a toggle because the state of the view will always
    //     // be generated *after* the state update has been set by the server.
    // }

    public function markItemActive($id)
    {
        $item = $this->inventory->findOrFail($id);

        $item->active = true;
        $item->save();

        return ['success' => true];
    }

    public function markItemInactive($id)
    {
        $item = $this->inventory->findOrFail($id);

        $item->active = false;
        $item->save();

        return ['success' => true];

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

    protected function setModelFields(array $requestData, &$inventoryItem)
    {
        $input = collect($requestData);

        // removes the sencha cache buster when saving
        $input->forget('_dc');

        // ooh, fancy!! :P
        $input->map(function ($value, $key) use ($inventoryItem) {
            $inventoryItem->{$key} = $value;
        });
    }
}
