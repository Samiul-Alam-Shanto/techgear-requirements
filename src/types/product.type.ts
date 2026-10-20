export interface IProduct {
  id: number;
  name: string;
  image: string;
  categories: string[];
  brand: string;
  tier: string;
  deliveryTime: number;
  price: number;
  warranty: number;
  stock: string;
  rating: number;
  description: string;
  setupGuide: string[];
}
export interface IProductContext {
  buildList: IProduct[];
  wishList: IProduct[];
  setBuildList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setWishList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
