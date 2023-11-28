<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
        /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'full_price',
        'current_price',
        'img_path'
    ];

    public function cart()
    {
        return $this->belongsTo(Cart::class)->withPivot('quantity');
    }
}
