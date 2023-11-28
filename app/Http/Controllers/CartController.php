<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $cart = $user->cart;

        return Inertia::render('Cart', [
            'user' => $user,
            'cart' => $cart,
        ]);
    }

    public function addToCart(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('productId');

        $cart = $user->cart;

        // Ensure the cart exists
        if (!$cart) {
            $cart = new Cart();
            $user->cart()->save($cart);
        }

        $cart->addToCart($user->id, $productId);

        return redirect()->back();
    }

    public function incrementQuantity(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('productId');

        $cart = $user->cart;

        if ($cart) {
            $cart->incrementQuantity($user->id, $productId);
        }

        return redirect()->back();
    }

    public function decrementQuantity(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('productId');

        $cart = $user->cart;

        if ($cart) {
            $cart->decrementQuantity($user->id, $productId);
        }

        return redirect()->back();
    }

    public function removeFromCart(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('productId');

        Cart::removeFromCart($user->id, $productId);

        return redirect()->back();
    }
}
