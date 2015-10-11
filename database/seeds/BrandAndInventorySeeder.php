<?php

use App\Brand;
use Illuminate\Database\Seeder;

class BrandAndInventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->delete();
        DB::table('inventories')->delete();
        $brands = factory(App\Brand::class, 10)
            ->create()
            ->each(function ($brand) {
                $inventoryItems = factory(App\Inventory::class, 50)->create();
                $inventoryItems->each(function ($item) use ($brand) {
                    $brand->inventories()->save($item);
                });
            });
    }
}
