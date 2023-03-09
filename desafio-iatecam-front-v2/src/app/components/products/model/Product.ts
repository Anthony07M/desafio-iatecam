export interface Product {
    id?: number;
    name: string;
    description: string;
    in_stock: number;
    minimum_stock: number;
    price: number;
    category_id: number;
}

export interface Response<T> {
    result: T
}