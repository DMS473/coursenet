const Farm = require("../Models/Farm.js");

class FarmView {
  static help() {
    Farm.help();
  }

  static show() {
    Farm.show();
  }
  static create(params) {
    Farm.create(params);
  }
  static detail(params) {
    Farm.detail(params);
  }
  static add(params) {
    Farm.add(params);
  }
  static sell(params) {
    Farm.sell(params);
  }
  static totalProduce(params) {
    Farm.totalProduce(params);
  }
  static sort(params) {
    Farm.sort(params);
  }
  static default() {
    Farm.defalut();
  }
}

module.exports = FarmView;
