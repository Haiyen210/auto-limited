<template>
    <!-- Main Container  -->
    <div class="main-container container" style="margin-bottom: 50px;">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Shopping Cart</a></li>
        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div id="content" class="col-sm-12">
                <h2 class="title">Shopping Cart</h2>
                <div class="table-responsive form-group">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td class="text-center">Image</td>
                                <td class="text-center">Product Name</td>
                                <td class="text-center">Product Code</td>
                                <td class="text-center">Quantity</td>
                                <td class="text-center">Unit Price</td>
                                <td class="text-center">Total</td>
                                <td class="text-center">Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cart" :key="item.id">
                                <td class="text-center"><a href="#"><img style="width:70px;height: 50px;"
                                            :src="'http://localhost:54195/images/' + item.images"
                                            alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop"
                                            class="img-thumbnail" /></a></td>
                                <td class="text-left"><a href="#">{{ item.name }}</a><br />
                                </td>
                                <td class="text-left">{{ item.code }}</td>
                                <td class="cart-product-quantity">
                                    <div class="cart-plus-minus" style="margin-top: 9px">
                                        <input type="button" value="-" name="qtybutton" class="cart-plus-minus-box"
                                            v-on:click="onCountMinus(item.id)"
                                            style="border: 1px solid;background: #ff2d37;color: #ffff;">
                                        <input type="text" v-bind:value="`${item.Quantity}`" name="qtybutton"
                                            class="cart-plus-minus-box"
                                            style="width: 70px;height: 30px;margin: 1px 14px 0px 14px;padding-top: 4px;">
                                        <input type="button" value="+" name="qtybutton" class="cart-plus-minus-box"
                                            v-on:click="onCount(item.id)"
                                            style="border: 1px solid;background: #ff2d37;color: #ffff;">
                                    </div>
                                </td>
                                <td class="text-right">
                                    <p v-if="item.salePrice > 0">${{ formatPrice(item.salePrice )}}</p>
                                    <p v-if="item.salePrice == 0">${{ formatPrice(item.price) }}</p>
                                </td>
                                <td class="text-right">
                                    <p v-if="item.salePrice > 0">${{ formatPrice(item.salePrice*item.Quantity) }}</p>
                                    <p v-if="item.salePrice == 0">${{ formatPrice(item.price*item.Quantity) }}</p>
                                </td>
                                <td class="cart-product-remove text-center" style="font-size: 22px;"><a
                                        @click.prevent="removeFromCart(item)">x</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-8">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-right">
                                        <strong>Sub-Total:</strong>
                                    </td>
                                    <td class="text-right">${{ formatPrice(sum) }}</td>
                                </tr>
                                <tr >
                                    <td class="text-right">
                                        <strong>Shipping charges:</strong>
                                    </td>
                                    <td class="text-right">$40</td>
                                </tr>
                                <tr>
                                    <td class="text-right">
                                        <strong>Total:</strong>
                                    </td>
                                    <td class="text-right">${{ formatPrice(sum+40) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="buttons">
                    <div class="pull-left"><router-link :to="{name:'Product'}" href="#" class="btn btn-primary">Continue Shopping</router-link></div>
                    <div class="pull-right"><a @click.prevent="onCheckOut()" class="btn btn-primary">Checkout</a></div>
                </div>
            </div>
            <!--Middle Part End -->

        </div>
    </div>
    <!-- //Main Container -->
</template>
<style>
.table>tbody>tr>td {
    vertical-align: baseline !important;
}
</style>
<script>
import store from '@/store'
import { ref } from '@vue/reactivity';
import router from '@/router';
export default {
    setup() {
        let cart = store.state.cart;
        function onCount(proId) {
            store.commit('onCount', proId);
        }
        function onCountMinus(proId) {
            store.commit('onCountMinus', proId);
        }
        function removeFromCart(item) {
            store.commit('removeFromCart', item);
        };
        let names = ref("")
        if (cart != null && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                names.value = cart[i].name_user

            }
        }
        let loginUser = JSON.parse(localStorage.getItem("loginUser"));
        function onCheckOut() {
            if (cart && loginUser.code == names.value) {
                router.push("/checkout");
            } else {
                alert("Please Add Product To Cart")
            }
        }
        return { cart, onCount, onCountMinus,removeFromCart,onCheckOut }
    },
    computed: {
        sum() {
            return store.getters.total;
        },
    },
    methods: {
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
    }
}
</script>