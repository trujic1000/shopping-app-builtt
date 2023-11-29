import { Cart } from '@/types';
import { formatNumber } from '@/utils';
import PrimaryButton from '@/Components/PrimaryButton';

type Props = { cart: Cart };

export default function CartInfo({ cart }: Props) {
    const totalFullPrice = cart.products
        .map((product) => +product.full_price * product.pivot.quantity)
        .reduce((acc, curr) => acc + curr, 0);
    const totalDiscount = cart.products
        .filter((product) => +product.full_price > +product.current_price)
        .map(
            (product) =>
                (+product.full_price - +product.current_price) *
                product.pivot.quantity
        )
        .reduce((acc, curr) => acc + curr, 0);
    const finalPrice = totalFullPrice - totalDiscount;

    return (
        <div className='px-6 pt-6 pb-24 bg-gray-100'>
            <h3 className='text-lg font-bold leading-6'>Tvoja narudžbina</h3>
            <div className='mt-7 flex justify-between items-center'>
                <span>Ukupno</span>
                <div className='flex align-top gap-1.5'>
                    <span className='text-lg leading-6 tracking-tighter'>
                        {formatNumber(totalFullPrice)}
                    </span>
                    <span className='text-[10px] leading-3 tracking-wide'>
                        RSD
                    </span>
                </div>
            </div>
            <div className='mt-3 flex justify-between items-center'>
                <span>Ušteda</span>
                <div className='flex align-top gap-1.5'>
                    <span className='text-lg leading-6 tracking-tighter'>
                        -{formatNumber(totalDiscount)}
                    </span>
                    <span className='text-[10px] leading-3 tracking-wide'>
                        RSD
                    </span>
                </div>
            </div>
            <div className='mt-3 flex justify-between items-center'>
                <span>Isporuka Daily Express*</span>
                <span className='text-xs leading-3 tracking-wide'>
                    Besplatna
                </span>
            </div>
            <hr className='mt-3 h-0.5 bg-gray-400' />
            <div className='mt-4 flex justify-between items-center'>
                <span>Ukupno</span>
                <div className='flex align-top gap-1.5'>
                    <span className='text-lg leading-6 tracking-tighter'>
                        {formatNumber(finalPrice)}
                    </span>
                    <span className='text-[10px] leading-3 tracking-wide'>
                        RSD
                    </span>
                </div>
            </div>
            <span className='block mt-2 text-xs'>
                Cena je sa uključenim PDV-om
            </span>
            <PrimaryButton type='button' className='mt-8 w-full'>
                Prijavi se za brže plaćanje
            </PrimaryButton>
        </div>
    );
}
