<template>
  <div class="bg-light p-4 my-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table class="table align-middle" v-else>
      <tbody>
        <tr v-for="cart in cartList.carts" :key="cart.id">
          <td width="100">
            <a
              href="#"
              class="text-dark"
              @click.prevent="removeCartItem(cart.id)"
              ><font-awesome-icon icon="fa-solid fa-trash"
            /></a>
          </td>
          <td width="100">
            <img
              :src="cart.product.imageUrl"
              class="table-image"
              :alt="cart.product.title"
            />
          </td>
          <td>{{ cart.product.title }}</td>
          <td width="200">
            <select
              name=""
              id=""
              class="form-select"
              :value="cart.qty"
              @change="(event) => setCartQty(cart.id, event)"
            >
              <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
            </select>
          </td>
          <td width="200" class="text-end">$ {{ cart.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["removeCartItem", "setCartQty"]),
  },
};
</script>
