import { makeAutoObservable } from "mobx";
export default class BasketStore {
  constructor() {
    this._devices = [];
    makeAutoObservable(this);
  }

  setDevice(device) {
    this._devices = device;
  }

  get devices() {
    return this._devices;
  }
}
