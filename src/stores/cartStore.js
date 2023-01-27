import productStore from "./productStore.js";
import { defineStore } from "pinia";

export default defineStore("card", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const findCart = this.cart.find((item) => item.productId === productId);
      if (findCart) {
        findCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    setCartQty(id, event) {
      const findCart = this.cart.find((item) => item.id === id);
      if (findCart) {
        findCart.qty = +event.target.value;
      }
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      const { products } = productStore();
      const carts = cart.map((item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });

      const total = carts.reduce(
        (accumulator, currentValue) => (accumulator += currentValue.subtotal),
        0
      );
      return { carts, total };
    },
  },
});
