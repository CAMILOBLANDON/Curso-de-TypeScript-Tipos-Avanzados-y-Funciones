type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: number | string;
//   title: string;
//   stock: number;
//   createdAt: Date;
//   sizes?: Sizes;
// };
interface Product {
  id: number | string;
  title: string;
  stock: number;
  createdAt: Date;
  sizes?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Product 1',
  stock: 10,
  createdAt: new Date(2000, 5, 30),
  sizes: 'S',
});

const addProduct = (data: Product) => {
  products.push(data);
};
