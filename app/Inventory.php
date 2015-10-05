<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    protected $fillable = ['name', 'brand_id', 'price', 'active', 'image_path'];

    public function active()
    {
        return $this->where('active', true)->get();
    }

    public function activeByBrand($brandId)
    {
        return $this->where('brand_id', $brandId)->where('active', true)->get();
    }

    public function brand()
    {
        return $this->belongsTo('App\Brand');
    }
}
