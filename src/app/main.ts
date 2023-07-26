import { faker } from '@faker-js/faker';
import {
  products,
  addProduct,
  updateProduct,
  findProducts,
} from './products/product.services';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    sizes: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    tags: ['dark', 'New'],
  });
}
console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  sizes: 'S',
});
