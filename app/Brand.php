<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{

    protected $table = 'brands';
    protected $fillable = ['name'];

    public function inventories()
    {
        return $this->hasMany("App\Inventory");
    }
}
