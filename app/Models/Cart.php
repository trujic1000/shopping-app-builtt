<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity');
    }

    public function addToCart($productId, $quantity = 1)
    { 
        $this->products()->attach($productId, ['quantity' => $quantity]);
    }

    public function incrementQuantity($productId, $quantity = 1)
    {
        $this->products()->updateExistingPivot($productId, ['quantity' => \DB::raw("quantity + $quantity")]);
    }

    public function decrementQuantity($productId, $quantity = 1)
    {
        $pivot = $this->products()->where('products.id', $productId)->first()->pivot;

        // Calculate the new quantity after decrement
        $newQuantity = max($pivot->quantity - $quantity, 0);

        if ($newQuantity > 0) {
            // Update the quantity if it's greater than 0
            $this->products()->updateExistingPivot($productId, ['quantity' => $newQuantity]);
        } else {
            // Remove the product from the cart if the new quantity is 0
            $this->products()->detach($productId);
        }
    }

    public function removeFromCart($productId)
    {
        $this->products()->detach($productId);
    }
}
