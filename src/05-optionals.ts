export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};
const p1 = createProduct(15, 5641);
console.log(p1);
const p2 = createProduct(5, 0, false);
console.log(p2);
