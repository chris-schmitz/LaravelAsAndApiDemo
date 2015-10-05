<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateInventoriesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('inventories', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('brand_id')
				->unsigned()
				->references('id')
				->on('brands');
			$table->string('name');
			$table->float('price');
			$table->boolean('active');
			$table->string('image_path');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('inventories');
	}
}
