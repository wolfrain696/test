import { makeAutoObservable } from 'mobx';
import { GetProducts } from '../../model/ProductsModel';

export class AppViewModel {
  loading = false;

  products = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
  }

  fetchProducts = async () => {
    this.setLoading(true);
    try {
      const { data } = await GetProducts();
      this.products = data;
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(true);
    }
  };

  setLoading = (isLoading) => {
    this.loading = isLoading;
  };
}
