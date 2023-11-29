import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Cart } from '@/types';
import CartProduct from '@/Components/CartProduct';
import CartInfo from '@/Components/CartInfo';

type Props = PageProps & { cart: Cart };

export default function CartPage({ auth, cart }: Props) {
    return (
        <AuthenticatedLayout user={auth.user} cart={cart}>
            <Head title='Cart' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-xl font-bold leading-6'>Tvoja korpa</h1>
                    <div className='mt-8 grid gap-14 grid-cols-[2fr,1fr]'>
                        <div className='grid divide-y divide-gray-400'>
                            {cart.products.map((product) => (
                                <CartProduct key={product.id} {...product} />
                            ))}
                        </div>
                        <CartInfo cart={cart} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
