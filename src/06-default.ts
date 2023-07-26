export const createProduct = (
  id: string | number,
  stock: number = 1,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew,
  };
};
const p1 = createProduct(15, 5641);
console.log(p1);
const p2 = createProduct(5, 0, false);
console.log(p2);
const p3 = createProduct(5);
console.log(p3);
