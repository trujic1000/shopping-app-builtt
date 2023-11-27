import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Product from "@/Components/Product";

type ProductType = {
    id: number;
    name: string;
    full_price: number;
    current_price: number;
    img_path: string;
};

export default function Products({
    auth,
    products,
}: PageProps & { products: ProductType[] }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-xl font-bold leading-6">
                        Svi proizvodi
                        <span className="text-sm opacity-50 ml-1.5">
                            {products.length} proizvoda
                        </span>
                    </h1>
                    <div className="mt-8 grid gap-x-5 gap-y-16 grid-cols-[repeat(auto-fit,_minmax(284px,_1fr))]">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                fullPrice={product.full_price}
                                currentPrice={product.current_price}
                                imgPath={product.img_path}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
