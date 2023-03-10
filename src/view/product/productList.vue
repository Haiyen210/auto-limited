<template>
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Products</a></li>
        </ul>

        <div class="row" style="margin-bottom: 50px;">
            <!--Left Part Start -->
            <aside class="col-sm-4 col-md-3 content-aside" id="column-left">
                <div class="module category-style">
                    <h3 class="modtitle">Categories</h3>
                    <div class="modcontent">
                        <div class="box-category">
                            <ul id="cat_accordion" class="list-group" v-for="item in category" :key="item.id">
                                <li><a v-on:click="onClickCategory(item.id)" class="cutom-parent">{{ item.name }} </a>
                                </li>
                                <!-- <hr> -->
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="module product-simple">
                    <h3 class="modtitle">
                        <span>Latest products</span>
                    </h3>
                    <div class="modcontent">
                        <div class="so-extraslider">
                            <!-- Begin extraslider-inner -->
                            <div class="yt-content-slider extraslider-inner" v-if="productDesc">
                                <div class="item " v-for="item in productDesc" :key="item.id">
                                    <div class="product-layout item-inner style1 ">
                                        <div class="item-image">
                                            <div class="item-img-info">
                                                <a href="#" target="_self">
                                                    <img style="height: 115px !important;"
                                                        :src="'http://localhost:54195/images/' + item.images"
                                                        class="img-1 img-responsive" alt="image1">
                                                </a>
                                            </div>

                                        </div>
                                        <div class="item-info" style="padding-top: 10%">
                                            <div class="item-title">
                                                <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" target="_self">{{ item.name }}
                                                </router-link>
                                            </div>

                                            <div class="content_price price">
                                                <div v-if="item.salePrice > 0">
                                                    <span class="price-new product-price">${{
                                                        item.salePrice
                                                    }}</span>&nbsp;&nbsp;
                                                    <span class="price-old">${{ item.price }}</span>&nbsp;
                                                </div>
                                                <div v-else>
                                                    <span class="price-new">${{ item.price }}</span>&nbsp;
                                                </div>

                                            </div>
                                        </div>
                                        <!-- End item-info -->
                                        <!-- End item-wrap-inner -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="module banner-left hidden-xs ">
                    <div class="banner-sidebar banners">
                        <div>
                            <a title="Banner Image" href="#">
                                <img src="image/catalog/banners/banner-sidebar.jpg" alt="Banner Image">
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
            <!--Left Part End -->

            <!--Middle Part Start-->
            <div id="content" class="col-md-9 col-sm-8">
                <div class="products-category">
                    <h3 class="title-category ">Products</h3>
                    <div class="category-desc">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="banners">
                                    <div>
                                        <a href="#"><img src="image/catalog/demo/category/img-cate.jpg"
                                                alt="img cate"><br></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- Filters -->
                    <div class="product-filter product-filter-top filters-panel">
                        <div class="row">
                            <div class="col-md-5 col-sm-3 col-xs-12 view-mode">

                                <div class="list-view">
                                    <button class="btn btn-default grid active" data-view="grid" data-toggle="tooltip"
                                        data-original-title="Grid"><i class="fa fa-th"></i></button>
                                    <button class="btn btn-default list" data-view="list" data-toggle="tooltip"
                                        data-original-title="List"><i class="fa fa-th-list"></i></button>
                                </div>

                            </div>
                          

                        </div>
                    </div>
                    <!-- //end Filters -->

                    <div v-if="pro">
                        <div class="products-list row nopadding-xs so-filter-gird grid" style="width: 100%;">
                            <div v-for="item in paginateCategory" :key="item"
                                class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12" style="height: 323px">
                                <div class="product-item-container item--static">
                                    <div class="left-block">
                                        <div class="product-image-container second_img">
                                            <a href="#" target="_self" title="Volup tatem accu">
                                                <img style="height: 160px !important;"
                                                    :src="'http://localhost:54195/images/' + item.productImages"
                                                    class="img-1 img-responsive" alt="image1">
                                                <img style="height: 160px !important;"
                                                    :src="'http://localhost:54195/images/' + item.productImages"
                                                    class="img-2 img-responsive" alt="image2">
                                            </a>
                                        </div>
                                        <!--quickview-->
                                        <div class="so-quickview">
                                            <a class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                href="#" title="Quick view" data-fancybox-type="iframe"><i
                                                    class="fa fa-search"></i><span>Quick view</span></a>
                                        </div>
                                        <!--end quickview-->
                                    </div>
                                    <div class="right-block" style="height: 120px !important;">
                                        <div class="button-group cartinfo--static">
                                            <button type="button" class="addToCart" title="Add to cart"
                                                v-on:click.stop.prevent="onCart(item.id)">
                                                <span>Add to cart </span>
                                            </button>
                                           
                                        </div>
                                        <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }"
                                            data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">

                                            <h4><a href="#" title="Shoulder kevinis" target="_self">{{ item.name }}</a>
                                            </h4>
                                        </router-link>
                                        <div class="rating">
                                        </div>
                                        <div class="price" style="margin-top: 15%;">
                                            <div v-if="item.productSalePrice > 0">
                                                <span class="price-new product-price">${{
                                                    item.productSalePrice
                                                }}</span>&nbsp;&nbsp;
                                                <span class="price-old">${{ item.productPrice }}</span>&nbsp;
                                            </div>
                                            <div v-else>
                                                <span class="price-new">${{ item.productPrice }}</span>&nbsp;
                                            </div>
                                        </div>
                                        <div class="description item-desc hidden">
                                            <p>{{ item.description }}</p>
                                        </div>
                                        <div class="list-block hidden">
                                            <button class="addToCart btn-button" type="button" title="Add to Cart"
                                                v-on:click.stop.prevent="onCart(item.id)">
                                                <i class="fa fa-shopping-basket"></i>
                                            </button>                                          
                                            <!--quickview-->
                                            <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                href="#" title="Quick view" data-fancybox-type="iframe"><i
                                                    class="fa fa-eye"></i></router-link>
                                            <!--end quickview-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ltn__pagination-area text-center">
                            <div class="ltn__pagination" v-if="totalPaginate > 1">
                                <ul>
                                    <li><a href="#" @click="prev"><i class="fas fa-angle-double-left"></i></a></li>
                                    <li v-for="item in totalPaginatePro" :key="item"
                                        v-bind:class="{ isActive: (item === current), 'text-dark': isActive == false }">
                                        <a href="#" v-on:click.prevent="onCurrent(item)">{{ item }} </a>
                                    </li>
                                    <li><a href="#" @click="next"><i class="fas fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div v-else>
                        <div class="products-list row nopadding-xs so-filter-gird grid" style="width: 100%;">
                            <div v-for="item in paginated" :key="item.id"
                                class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12" style="height: 323px">
                                <div class="product-item-container item--static">
                                    <div class="left-block">
                                        <div class="product-image-container second_img">
                                            <a href="#" target="_self" title="Volup tatem accu">
                                                <img style="height: 160px !important;"
                                                    :src="'http://localhost:54195/images/' + item.images"
                                                    class="img-1 img-responsive" alt="image1">
                                                <img style="height: 160px !important;"
                                                    :src="'http://localhost:54195/images/' + item.images"
                                                    class="img-2 img-responsive" alt="image2">
                                            </a>
                                        </div>
                                        <!--quickview-->
                                        <div class="so-quickview">
                                            <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                href="#" title="Quick view" data-fancybox-type="iframe"><i
                                                    class="fa fa-search"></i><span>Quick view</span></router-link>
                                        </div>
                                        <!--end quickview-->
                                    </div>
                                    <div class="right-block" style="height: 120px !important;">
                                        <div class="button-group cartinfo--static">

                                           
                                            <button type="button" class="addToCart" title="Add to cart"
                                                v-on:click.stop.prevent="onCart(item.id)">
                                                <span>Add to cart </span>
                                            </button>
                                           
                                        </div>
                                        <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }"
                                            data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">

                                            <h4><a href="#" title="Shoulder kevinis" target="_self">{{ item.name }}</a>
                                            </h4>
                                        </router-link>
                                        <div class="rating">
                                        </div>

                                        <div class="price" style="    margin-top: 15%;">
                                            <div v-if="item.salePrice > 0">
                                                <span class="price-new product-price">${{
                                                    item.salePrice
                                                }}</span>&nbsp;&nbsp;
                                                <span class="price-old">${{ item.price }}</span>&nbsp;
                                            </div>
                                            <div v-else>
                                                <span class="price-new">${{ item.price }}</span>&nbsp;
                                            </div>
                                        </div>
                                        <div class="description item-desc hidden">
                                            <p>{{ item.description }}</p>
                                        </div>
                                        <div class="list-block hidden">
                                            <button class="addToCart btn-button" type="button" title="Add to Cart"
                                                v-on:click.stop.prevent="onCart(item.id)"> <i
                                                    class="fa fa-shopping-basket"></i>
                                            </button>
                                            <!--quickview-->
                                            <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                href="#" title="Quick view" data-fancybox-type="iframe"><i
                                                    class="fa fa-eye"></i></router-link>
                                            <!--end quickview-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ltn__pagination-area text-center">
                            <div class="ltn__pagination" v-if="totalPaginate > 1">
                                <ul>
                                    <li><a href="#" @click="prev"><i class="fas fa-angle-double-left"></i></a></li>
                                    <li v-for="item in totalPaginate" :key="item"
                                        v-bind:class="{ isActive: (item === current), 'text-dark': isActive == false }">
                                        <a href="#" v-on:click.prevent="onCurrent(item)">{{ item }} </a>
                                    </li>
                                    <li><a href="#" @click="next"><i class="fas fa-angle-double-right"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <!--// End Changed listings-->
                    <!-- Filters -->

                </div>

            </div>

            <!--Middle Part End-->
        </div>
    </div>
</template>

<style>
.isActive {
    background-color: #ff2d37;
    color: #ffff;
}
</style>

<script>
import "vue-awesome-paginate/dist/style.css";
import { store } from "../../store.js";
import CategoryProductService from "@/services/CategoryProductService";
export default {
    name: "Index",
    components: {

    },
    data() {
        return {
            pro: null,
            productDesc: null,
            category: null,
            current: 1,
            pageSize: 12,
            isActive: false
        }
    },

    mounted() {

        CategoryProductService.getAll()
            .then((res) => {
                this.category = res.data;
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                //Perform action in always
            })
           

    },
    computed: {
        productDesc() {
            return store.state.productDesc;
        },
        product() {
            return store.state.product
        },
        category() {
            return this.category
        },
        resultCount() {
            return this.product && this.product.length
        },

        countPro() {
            return this.pro && this.pro.length
        },
        indexStart() {
            return (this.current - 1) * this.pageSize;
        },
        indexEnd() {
            return this.indexStart + this.pageSize;
        },
        totalPaginate() {
            if ((this.resultCount % 12) == 0) {
                return Math.floor(this.resultCount / 12);
            } else {
                return Math.floor(this.resultCount / 12) + 1;
            }
        },
        totalPaginatePro() {
            if ((this.countPro % 12) == 0) {
                return Math.floor(this.countPro / 12);
            } else {
                return Math.floor(this.countPro / 12) + 1;
            }
        },
        paginated() {
            console.log(this.resultCount);
            if (this.resultCount > 12) {
                return this.product.slice(this.indexStart, this.indexEnd, this.totalPaginate);
            } else {
                return this.product;
            }
        },
        paginateCategory() {
            console.log(this.countPro);
            if (this.countPro > 12) {
                return this.pro.slice(this.indexStart, this.indexEnd, this.totalPaginatePro);
            } else {
                return this.pro;
            }
        }

    },
    methods: {
      
        onClickCategory(id) {
            CategoryProductService.getByCategory(id).then((res) => {
                console.log(res);
                this.pro = res.data;
            })
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
        onCurrent(item) {
            this.isActive = true;
            return this.current = item;

        },

        prev() {
            this.current--;
            if (this.current == 0) {
                return this.current = 1;
            }
        },
        next() {
            this.current++;
            if (this.current > this.totalPaginate) {
                return this.current = this.totalPaginate;
            }
        }


    },

    setup() {
        store.dispatch('fetchProductDesc');
        store.dispatch('fetchProduct');
        function onCart(itemId) {
            console.log(itemId);
            store.commit('onCart', itemId);
        }
        return {
            onCart
        }
    }
}
</script>
