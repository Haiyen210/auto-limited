<template>
    <!-- Header Container  -->
    <header id="header" class="typeheader-8">

        <!-- Header Top -->
        <div class="header-top hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="header-top-left col-lg-3 col-md-4 col-sm-5 col-xs-5">
                        <ul class="top-log list-inline" v-if="loginUser">
                            <li><i class="fa fa-lock"></i><a href="">{{ loginUser.code }}</a> / </li>
                            <li><a  @click.prevent="logOut">Logout</a></li>
                        </ul>
                        <ul class="top-log list-inline" v-else>
                            <li><i class="fa fa-lock"></i><router-link :to="{ name: 'Login' }"
                                    >Login</router-link>
                                / </li>
                            <li><router-link :to="{name:'Register'}" >Register</router-link></li>
                        </ul>

                    </div>
                    <div class="header-top-right col-lg-9 col-md-8 col-sm-7 col-xs-7">
                        <ul class="top-link list-inline lang-curr">
                            <li class="currency">
                                <div class="btn-group currencies-block">
                                    <form action="#"
                                        method="post" enctype="multipart/form-data" id="currency">
                                        <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                                            <span class="icon icon-credit "></span> $ US Dollar <span
                                                class="fa fa-angle-down"></span>
                                        </a>
                                        <ul class="dropdown-menu btn-xs">
                                            <li> <a href="#">(€)&nbsp;Euro</a></li>
                                            <li> <a href="#">(£)&nbsp;Pounds </a></li>
                                            <li> <a href="#">($)&nbsp;US Dollar </a></li>
                                        </ul>
                                    </form>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                        <div class="search-header-w">
                            <div id="sosearchpro" class="sosearchpro-wrapper so-search ">
                                <form method="GET"
                                    action="">
                                    <div id="search0" class="search input-group form-group">

                                        <input class="autosearch-input form-control" type="text" value="" size="50"
                                            autocomplete="off" placeholder="Keyword here..." name="search">

                                        <button type="submit" class="button-search btn btn-primary"
                                            name="submit_search"><i class="fa fa-search"></i></button>

                                    </div>
                                    <input type="hidden" name="route" value="product/search" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6 middle-right">
                        <div class="logo">
                            <a href="#"><img src="image/catalog/logo.png" title="Your Store"
                                    alt="Your Store" /></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-3">
                        <div class="shopping_cart">
                            <div id="cart" class="btn-shopping-cart">
                                <a href="javascript:void(0)" data-loading-text="Loading... "
                                    class="btn-group top_cart dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="true">
                                    <div class="shopcart">
                                        <span class="icon-c">
                                            <i class="fa fa-shopping-basket"></i>
                                        </span>
                                        <div class="shopcart-inner">
                                            <p class="text-shopping-cart">
                                                My cart
                                            </p>

                                            <span class="total-shopping-cart cart-total-full">
                                                <span class="items_cart">{{ total }}</span><span class="items_cart2">
                                                    item(s)</span><span class="items_carts">$162.00</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>

                                <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">
                                    <li>
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr v-for="item in carts" :key="item.id">
                                                    <td class="text-center" style="width:70px">
                                                        <a href="#">
                                                            <img :src="'http://localhost:54195/images/' + item.images"
                                                                style="width:70px" alt="Yutculpa ullamcon"
                                                                title="Yutculpa ullamco" class="preview">
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="#">{{
                                                        item.name
                                                    }}</a>
                                                    </td>
                                                    <td class="text-center">x{{ item.Quantity }}</td>
                                                    <td class="text-center">
                                                        <p v-if="item.salePrice > 0">${{ formatPrice(item.salePrice) }}
                                                        </p>
                                                        <p v-if="item.salePrice == 0">${{ formatPrice(item.price) }}</p>
                                                    </td>

                                                    <td class="text-right">
                                                        <a @click.prevent="removeFromCart(item)"
                                                            class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <div>
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left"><strong>Sub-Total</strong>
                                                        </td>
                                                        <td class="text-right">${{ formatPrice(sum) }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>Shipping charges</strong>
                                                        </td>
                                                        <td class="text-right">$40</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>Total</strong>
                                                        </td>
                                                        <td class="text-right">${{ formatPrice(sum + 40) }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p class="text-right"> <router-link :to="{ name: 'Cart' }"
                                                    class="btn view-cart" href="#cart"><i
                                                        class="fa fa-shopping-cart"></i>View
                                                    Cart</router-link>&nbsp;&nbsp;&nbsp; 
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom hidden-compact">
            <div class="container">
                <div class="main-menu-w">
                    <div class="responsive so-megamenu megamenu-style-dev">
                        <nav class="navbar-default">
                            <div class=" container-megamenu  horizontal open ">
                                <div class="navbar-header">
                                    <button type="button" id="show-megamenu" data-toggle="collapse"
                                        class="navbar-toggle">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>

                                <div class="megamenu-wrapper">
                                    <span id="remove-megamenu" class="fa fa-times"></span>
                                    <div class="megamenu-pattern">
                                        <div class="container-mega">
                                            <ul class="megamenu" data-transition="slide" data-animationtime="250">
                                                <li class="with-sub-menu hover">
                                                    <p class="close-menu"></p>
                                                    <router-link :to="{ name: 'Home' }" 
                                                        class="clearfix">
                                                        <strong>Home</strong>
                                                    </router-link>

                                                </li>

                                                <li class="with-sub-menu hover">
                                                    <p class="close-menu"></p>
                                                    <router-link :to="{ name: 'Product' }" 
                                                        class="clearfix">
                                                        <strong>Product</strong>
                                                    </router-link>

                                                </li>
                                                <li class="with-sub-menu hover">
                                                    <p class="close-menu"></p>
                                                    <router-link :to="{ name: 'Profile' }"   class="clearfix">
                                                        <strong>Settings</strong>
                                                        <b class="caret"></b>
                                                    </router-link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>

    </header>
    <!-- //Header Container  -->
</template>
<style>

.clearfix:focus {
    background-image: linear-gradient(to bottom, transparent 80%,  rgba(0, 0, 0, 0.15) 90%, transparent 82%);
    background-color: rgba(0, 0, 0, 0.15)
}
</style>
<script>
import store from '@/store';
import { ref } from 'vue';
import router from '@/router';
export default {
    setup() {
        const loginUser = JSON.parse(localStorage.getItem("loginUser"));
        let cart = store.state.cart;
        function removeFromCart(item) {
            store.commit('removeFromCart', item);
        };
        let names = ref("")
        if (cart != null && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                names.value = cart[i].name_user

            }
        }
        function onCheckOut() {
            if (cart && loginUser.code == names.value) {
                router.push("/checkout");
            } else {
                alert("Please Add Product To Cart")
            }
        }
        function logOut() {
            localStorage.removeItem('loginUser');
            window.location.href = "/login";
        }
        return { loginUser, cart, removeFromCart, onCheckOut, logOut }
    },
    computed: {
        sum() {
            return store.getters.total;
        },
        carts() {
            return store.state.cart
        },
        total() {
            let names = null;
            for (let i = 0; i < store.state.cart.length; i++) {
                const element = store.state.cart[i];
                names = element.name_user;
            }
            if (store.state.cart && store.state.loginUser && store.state.loginUser.code == names) {
                return store.state.cart.length;
            } else {
                return 0;
            }
        }
    },
    methods: {
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
    }
}
</script>