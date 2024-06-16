import { Category } from "@prisma/client";
export interface CategoryCard {
  name: Category;
  description: string;
  image: string;
}