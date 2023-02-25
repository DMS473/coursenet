const FarmView = require("../Views/FarmView.js");

class FarmController {
  static help() {
    FarmView.help();
  }

  static show() {
    FarmView.show();
  }
  static create(params) {
    FarmView.create(params);
  }
  static detail(params) {
    FarmView.detail(params);
  }
  static add(params) {
    FarmView.add(params);
  }
  static sell(params) {
    FarmView.sell(params);
  }
  static totalProduce(params) {
    FarmView.totalProduce(params);
  }
  static sort(params) {
    FarmView.sort(params);
  }
  static default() {
    FarmView.defalut();
  }
}

module.exports = FarmController;
