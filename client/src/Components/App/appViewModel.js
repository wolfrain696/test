import { makeAutoObservable } from 'mobx';
import { GetProducts, SendCheck } from '../../model/ProductsModel';

export class AppViewModel {
  loading = false;

  selectedProducts = [];

  products = [];

  modalOpen = false;

  reasons = [];

  countPages = 0;

  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
    this.fetchReasons();
    this.fetchCountPages();
  }

  fetchProducts = async (page = 0) => {
    this.setLoading(true);
    try {
      const { data } = await GetProducts(`products?_limit=10&_page=${page}`);
      this.products = data;
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(true);
    }
  };

  fetchReasons = async () => {
    try {
      const { data } = await GetProducts('reasons');
      this.reasons = data;
    } catch (e) {
      console.log(e);
    }
  };

  fetchCountPages = async () => {
    try {
      const { data } = await GetProducts('products');
      this.countPages = data.length / 10;
    } catch (e) {
      console.log(e);
    }
  };

  sendWritingOff = async (check) => {
    this.setLoading(true);
    try {
      const { data } = await SendCheck(check);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(false);
    }
  };

  changePage = (direction) => {
    switch (direction) {
      case 'next':
        this.currentPage += 1;
        break;
      case 'back':
        this.currentPage -= 1;
        break;
      default:
    }
  };

  setLoading = (isLoading) => {
    this.loading = isLoading;
  };

  setSelectedProducts = (product) => {
    if (this.selectedProducts.findIndex((el) => el.id === product.id) > -1) {
      this.selectedProducts = this.selectedProducts.filter((el) => el.id !== product.id);
    } else {
      this.selectedProducts.push(product);
    }
  };

  setModalOpen = (status) => {
    this.modalOpen = status;
  };
}
