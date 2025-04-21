export interface Product {
    product_id: number;
    name: string;
    description: string | null;
    category: string | null;
    quantity: number;
    condition: 'new' | 'used';
    price: number;
    added_date: Date | null;
}