import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps, Product as ProductType, Cart } from '@/types';
import Product from '@/Components/Product';

type Props = PageProps & { products: ProductType[]; cart?: Cart };

export default function ProductsPage({ auth, products, cart }: Props) {
    return (
        <AuthenticatedLayout user={auth.user} cart={cart}>
            <Head title='Products' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-xl font-bold leading-6'>
                        Svi proizvodi
                        <span className='text-sm opacity-50 ml-1.5'>
                            {products.length} proizvoda
                        </span>
                    </h1>
                    <div className='mt-8 grid gap-x-5 gap-y-16 grid-cols-[repeat(auto-fit,_minmax(284px,_1fr))]'>
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                {...product}
                                cart={cart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
