import { useState } from 'react';
import { router } from '@inertiajs/react';
import Icon from './Icon';
import { Cart, Product as ProductType } from '@/types';

type Props = ProductType & {
    cart: Cart;
};

export default function Product({
    id,
    name,
    full_price,
    current_price,
    img_path,
    cart,
}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const isInCart = cart.products.some((product) => product.id === id);
    const quantity = cart.products.find((product) => product.id === id)?.pivot
        .quantity;

    const addToCart = () => {
        if (!isInCart) {
            router.post('/cart/add', { productId: id });
        }
    };

    const incrementQuantity = () => {
        router.post('/cart/incrementQuantity', { productId: id });
    };

    const decrementQuantity = () => {
        router.post('/cart/decrementQuantity', { productId: id });
    };

    return (
        <div>
            <div
                className='relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={`/storage/${img_path}`}
                    alt={name}
                    width='284'
                    height='284'
                />
                {isInCart && (
                    <div className='absolute bottom-2 left-2 px-4 py-2 flex gap-4 bg-white rounded-full'>
                        <button type='button' onClick={decrementQuantity}>
                            <Icon name='minus' />
                        </button>
                        <span>{quantity}</span>
                        <button type='button' onClick={incrementQuantity}>
                            <Icon name='plus' />
                        </button>
                    </div>
                )}
                {isHovered && !isInCart && (
                    <button
                        type='button'
                        onClick={addToCart}
                        className='absolute bottom-2 left-2 h-9 w-9 flex items-center justify-center bg-black rounded-full'
                    >
                        <Icon name='cart' variant='white' />
                    </button>
                )}
            </div>
            <h2 className='mt-4 text-lg font-bold leading-6'>{name}</h2>
            <div className='mt-2 flex align-top gap-1.5'>
                <span className='text-2xl leading-8 tracking-tighter'>
                    {new Intl.NumberFormat('sr').format(current_price)}
                </span>
                <span className='text-sm leading-4 tracking-wide'>RSD</span>
            </div>
        </div>
    );
}
