import { Product } from './product.model';
import {
  CreateProductDto,
  findProductDto,
  updatedProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  changes: updatedProductDto
): Product => {
  const index = products.findIndex((product) => product.id === id);
  products[index] = {
    ...products[index],
    ...changes,
  };
  return products[index];
};
export const findProducts = (dto: findProductDto): Product[] => {
  // const findsProducts = products.filter((dto, i) => dto === products[i]);
  return products;
};

export const getProduct = (id: Product['id']) => {
  const index = products.findIndex((product) => product.id === id);
  return products[index];
};
export const deleteProduct = (id: Product['id']) => {
  const index = products.findIndex((product) => product.id === id);
  products.splice(index, 1);
};
