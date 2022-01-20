export interface Producto {
  id: number;
  name: string;
  binomialName?: string;
  price?: number;
  imgUrl: string;
  wateringsPerWeek?: number;
  fertilizerType?: string;
  heightInCm?: number;
}
