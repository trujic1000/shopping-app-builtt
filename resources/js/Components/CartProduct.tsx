import { router } from '@inertiajs/react';
import Icon from './Icon';
import { CartProduct as CartProductType } from '@/types';
import { formatNumber } from '@/utils';

type Props = CartProductType;

export default function CartProduct({
    id,
    name,
    full_price,
    current_price,
    img_path,
    pivot,
}: Props) {
    const incrementQuantity = () => {
        router.post('/cart/incrementQuantity', { productId: id });
    };

    const decrementQuantity = () => {
        router.post('/cart/decrementQuantity', { productId: id });
    };

    const removeFromCart = () => {
        router.post('/cart/remove', { productId: id });
    };

    return (
        <div className='py-6 flex gap-9'>
            <img
                src={`/storage/${img_path}`}
                alt={name}
                width='143'
                height='143'
            />
            <div className='flex flex-col items-start'>
                <h2 className='text-lg font-bold leading-6 text-[#313337]'>
                    {name}
                </h2>
                {pivot.quantity > 1 && (
                    <span className='text-xs leading-6 text-gray-600'>
                        {Math.trunc(current_price)} RSD po kom.
                    </span>
                )}
                <div className='mt-auto flex gap-6'>
                    <div className='px-3 py-1 flex gap-4 border border-black bg-white rounded-full'>
                        <button type='button' onClick={decrementQuantity}>
                            <Icon name='minus' />
                        </button>
                        <span>{pivot.quantity}</span>
                        <button type='button' onClick={incrementQuantity}>
                            <Icon name='plus' />
                        </button>
                    </div>
                    <button
                        type='button'
                        className='underline underline-offset-4 text-[#313337]'
                        onClick={removeFromCart}
                    >
                        Ukloni
                    </button>
                </div>
            </div>
            <div className='ml-auto'>
                <div className='flex align-top gap-1.5'>
                    <span className='text-2xl leading-8 tracking-tighter'>
                        {formatNumber(+current_price * pivot.quantity)}
                    </span>
                    <span className='text-sm leading-4 tracking-wide'>RSD</span>
                </div>
                {+full_price > +current_price && (
                    <div className='mt-2 flex align-top gap-1.5 text-[#C94D00]'>
                        <span className='leading-4 tracking-tighter line-through'>
                            {formatNumber(+full_price * pivot.quantity)}
                        </span>
                        <span className='text-[11px] leading-4'>RSD</span>
                    </div>
                )}
            </div>
        </div>
    );
}
