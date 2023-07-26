import { Product } from './product.model';

// Omit
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

//Pick
type example = Pick<Product, 'color' | 'description'>;

//Partial
export interface updatedProductDto extends Partial<CreateProductDto> {}

//Required
type example2 = Required<Product>;

export interface findProductDto
  extends Readonly<Partial<Omit<Product, 'tags' | 'sizes'>>> {
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
