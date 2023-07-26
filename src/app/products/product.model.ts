import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  price: number;
  stock: number;
  sizes: Sizes;
  color: string;
  category: Category;
  isNew: boolean;
  tags?: string[];
}

// type CreateProductDto = Omit<
//   Product,
//   'id' | 'createdAt' | 'updatedAt' | 'category'
// >;
