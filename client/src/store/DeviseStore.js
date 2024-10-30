import { makeAutoObservable } from "mobx";
export default class DeviseStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфон" },
      { id: 3, name: "Телевизоры" },
      { id: 4, name: "Флешки" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 250000,
        rating: 5,
        img: "https://activ.kz/shop/media/products/iphone_11_black1222.jpg",
      },
      {
        id: 2,
        name: "Iphone 13 pro",
        price: 250000,
        rating: 3,
        img: "https://activ.kz/shop/media/products/iphone_11_black1222.jpg",
      },
      {
        id: 3,
        name: "Iphone 14 pro",
        price: 250000,
        rating: 1,
        img: "https://activ.kz/shop/media/products/iphone_11_black1222.jpg",
      },
      {
        id: 4,
        name: "Iphone 15 pro",
        price: 250000,
        rating: 6,
        img: "https://activ.kz/shop/media/products/iphone_11_black1222.jpg",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setDevice(device) {
    this._devices = device;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get device() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
}

