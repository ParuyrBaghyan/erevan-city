export default interface TrendBrandsModel {
  coverPhoto: string;
  id: number;
  itemCount: number;
  name: string;
  photo: string;
}


export interface TrendBrandsResponse {
  [x: string]: any;
  brands: TrendBrandsModel[];
}