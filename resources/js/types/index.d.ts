export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export type Product = {
    id: number;
    name: string;
    full_price: number;
    current_price: number;
    img_path: string;
};

export type CartProduct = {
    pivot: {
        cart_id: number;
        product_id: number;
        quantity: number;
    };
} & Product;

export type Cart = {
    id: number;
    user_id: number;
    products: CartProduct[];
};
