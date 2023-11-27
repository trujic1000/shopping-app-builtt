<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productsData = [
            [
                'name' => 'Kokosov Puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod.png',
            ],
            [
                'name' => 'Naturela sa Rogacem i Agava Secerom',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => rand(500, $fullPrice),
                'img_path' => 'images/proizvod-15.png',
            ],
            [
                'name' => 'Kokosovo ulje',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-14.png',
            ],
            [
                'name' => 'Kikiriki puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-1.png',
            ],
            [
                'name' => 'Suncokretov Puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-2.png',
            ],
            [
                'name' => 'Kikiriki puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-1.png',
            ],
            [
                'name' => 'Kokosov protein',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-11.png',
            ],
            [
                'name' => 'Suncokretov Puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-2.png',
            ],
            [
                'name' => 'Zejtin suncokretovo ulje',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-6.png',
            ],
            [
                'name' => 'Devicansko susamovo tamno ulje',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-10.png',
            ],
            [
                'name' => 'Bar sa lesnikovim puterom',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => rand(500, $fullPrice),
                'img_path' => 'images/proizvod-13.png',
            ],
            [
                'name' => 'Zejtin suncokretovo ulje',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-6.png',
            ],
            [
                'name' => 'Suncokretov Puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-2.png',
            ],
            [
                'name' => 'Bar sa sumskim vocem',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-9.png',
            ],
            [
                'name' => 'Kokosov protein',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-11.png',
            ],
            [
                'name' => 'Suncokretov Puter',
                'full_price' => $fullPrice = rand(500, 1500),
                'current_price' => $fullPrice,
                'img_path' => 'images/proizvod-2.png',
            ],
        ];

        // Insert the specific data into the products table
        foreach ($productsData as $productData) {
            Product::create($productData);
        }
    }
}
