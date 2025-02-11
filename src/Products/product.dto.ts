export class CreateProductDto {
  name: string;
  price: number;
  description?: string;
  stock: number;
  image?: string;
}

export class UpdateProductDto {
  name?: string;
  price?: number;
  description?: string;
  stock?: number;
  image?: string;
}
