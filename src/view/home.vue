<template>

    <!-- Main Container  -->
    <div class="main-container container-fulid">
        <div id="content">

            <div class="row-advanced" style="padding-bottom: 0px;">
                <div class="box-advanced-search " style="margin-top: -129px;">
                    <!-- container -->
                    <div class="so_advanced_search">
                        <div class="sas_wrap">
                            <Carousel class="carousel_home">
                                <Slide v-for="item in banner" :key="item.id">
                                    <div class="carousel__item"><img
                                            :src="'http://localhost:54195/images/' + item.image" alt=""></div>
                                </Slide>

                                <template #addons>
                                    <Navigation />
                                    <Pagination />
                                </template>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="block-services">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-margin1">
                            <div class="icon-service">
                                <div class="icon"><i class="pe-7s-car">&nbsp;</i></div>
                                <div class="text">
                                    <h6>World wide Free shipping</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-margin1">
                            <div class="icon-service">
                                <div class="icon"><i class="pe-7s-refresh-2">&nbsp;</i></div>
                                <div class="text">
                                    <h6>Money Back Guarantee</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="icon-service">
                                <div class="icon"><i class="pe-7s-users">&nbsp;</i></div>
                                <div class="text">
                                    <h6>Online support 24/24</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <!-- Extra new arrivals -->
                <div class="module extra-layout1">

                    <h3 class="modtitle"><span>New Products</span></h3>
                    <div class="modcontent container">
                        <div id="so_extra_slider_12" style="display: flex;" class="so-extraslider button-type1 row">
                            <div class="products-list yt-content-slider extraslider-inner col-lg-3 col-md-4 col-sm-6 col-xs-12"
                                data-rtl="yes" data-pagination="no" data-arrows="no" data-autoplay="no" data-delay="4"
                                data-speed="0.6" data-margin="30" data-items_column00="4" data-items_column0="4"
                                data-items_column1="3" data-items_column2="2" data-items_column3="1"
                                data-items_column4="1" data-lazyload="yes" data-loop="no" data-buttonpage="top"
                                v-for="item in productDesc" :key="item.id">
                                <div class="item">
                                    <div class="product-layout product-grid">
                                        <div class="item-inner product-layout transition product-grid">
                                            <div class="product-item-container item--static">
                                                <div class="left-block">
                                                    <div class="product-image-container second_img">
                                                        <a href="#" target="_self" title="DPicanha porkcho">
                                                            <img style="width: 268px;height: 268px;"
                                                                :src="'http://localhost:54195/images/' + item.images"
                                                                class="img-1 img-responsive" alt="image1">
                                                            <img style="width: 268px;height: 268px;"
                                                                :src="'http://localhost:54195/images/' + item.images"
                                                                class="img-2 img-responsive" alt="image2">
                                                        </a>
                                                    </div>
                                                    <!--quickview-->
                                                    <div class="so-quickview">
                                                        <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                            href="#" title="Quick view"
                                                            data-fancybox-type="iframe"><i
                                                                class="fa fa-search"></i><span>Quick view</span></router-link>
                                                    </div>
                                                    <!--end quickview-->
                                                </div>
                                                <div class="right-block" style="height: 97px;">
                                                    <div class="button-group cartinfo--static">
                                                        <button type="button" class="addToCart" title="Add to cart"
                                                        v-on:click.stop.prevent="onCart(item.id)">
                                                            <span>Add to cart </span>
                                                        </button>   
                                                    </div>
                                                    <h4><router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" title="Picanha porkcho" target="_self">{{
                                                        item.name
                                                    }}</router-link></h4>

                                                    <div class="price">
                                                        <div v-if="item.salePrice > 0">
                                                            <span class="price-new product-price">${{
                                                                item.salePrice
                                                            }}</span>&nbsp;&nbsp;
                                                            <span class="price-old">${{ item.price }}</span>&nbsp;
                                                        </div>
                                                        <div v-else>
                                                            <span class="price-old">${{ item.price }}</span>&nbsp;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end Extra new arrivals -->

                <div class="banners banners2">
                    <div>
                        <a href="#"><img src="image/catalog/banners/id8-bn4.jpg" alt="banner"></a>
                    </div>
                </div>

                <div class="module listingtab-layout5">

                    <h3 class="modtitle"><span>Products Sale</span></h3>
                    <div class="modcontent">
                        <div id="so_listing_tabs_4" class="so-listing-tabs first-load">
                            <div class="loadeding"></div>
                            <div class="ltabs-wrap">
                                <div class="ltabs-tabs-container" data-delay="300" data-duration="600"
                                    data-effect="none" data-ajaxurl="" data-type_source="0" data-lg="4" data-md="4"
                                    data-sm="3" data-xs="1" data-margin="30" data-type_show="loadmore">

                                </div>
                                <div class="wap-listing-tabs products-list grid">
                                    <div class="ltabs-items-container">
                                        <!--Begin Items-->
                                        <div class="ltabs-items ltabs-items-selected items-category-34" data-total="16">
                                            <div class="ltabs-items-inner owl2-carousel owl2-theme owl2-loaded">
                                                <div class="owl2-stage-outer">
                                                    <div class="owl2-stage row"
                                                        style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;  ">

                                                        <div class="owl2-item active col-lg-3 col-md-4 col-sm-6 col-xs-12"
                                                            v-for="item in product" :key="item.id">
                                                            <div class="item" style="width: 100%;height: 100%;">
                                                                <div class="product-layout product-grid">
                                                                    <div class="product-item-container item--static">
                                                                        <div class="left-block">
                                                                            <div
                                                                                class="product-image-container second_img">
                                                                                <a href="#" target="_self"
                                                                                    title="Stickrum bresao">
                                                                                    <img style="width: 268px; height: 268px;"
                                                                                        :src="'http://localhost:54195/images/' + item.images"
                                                                                        class="img-1 img-responsive"
                                                                                        alt="image1">
                                                                                    <img style="width: 268px; height: 268px;"
                                                                                        :src="'http://localhost:54195/images/' + item.images"
                                                                                        class="img-2 img-responsive"
                                                                                        alt="image2">
                                                                                </a>
                                                                            </div>
                                                                            <span
                                                                                class="label-product label-sale">Sale</span>
                                                                            <!--quickview-->
                                                                            <div class="so-quickview">
                                                                                <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }" class="iframe-link btn-button quickview quickview_handler visible-lg"
                                                                                    href="#"
                                                                                    title="Quick view"
                                                                                    data-fancybox-type="iframe"><i
                                                                                        class="fa fa-search"></i><span>Quick
                                                                                        view</span></router-link>
                                                                            </div>
                                                                            <!--end quickview-->
                                                                        </div>
                                                                        <div class="right-block" style="height: 97px;">
                                                                            <div class="button-group cartinfo--static">
                                                                                <button type="button" class="addToCart"
                                                                                    title="Add to cart"
                                                                                    v-on:click.stop.prevent="onCart(item.id)">
                                                                                    <span>Add to cart </span>
                                                                                </button>
                                                                               
                                                                            </div>
                                                                            <h4><router-link :to="{ name: 'ProductDetail', params: { id: item.id } }"
                                                                                    title="Stickrum bresao"
                                                                                    target="_self">{{ item.name }}</router-link>
                                                                            </h4>
                                                                            <div class="price">
                                                                                <div v-if="item.salePrice > 0">
                                                                                    <span
                                                                                        class="price-new product-price">${{
                                                                                            item.salePrice
                                                                                        }}</span>&nbsp;&nbsp;
                                                                                    <span class="price-old">${{
                                                                                        item.price
                                                                                    }}</span>&nbsp;
                                                                                </div>
                                                                                <div v-else>
                                                                                    <span class="price-old">${{
                                                                                        item.price
                                                                                    }}</span>&nbsp;
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ltabs-loadmore" data-active-content=".items-category-31"
                                                data-rl_start="12" data-rl_total="12" data-ajaxurl="" data-rl_load="8"
                                                data-moduleid="253">
                                                <router-link :to="{ name: 'Product' }" href="#">
                                                    <div class="ltabs-loadmore-btn loaded" data-label="Products"
                                                        style="display: inline-block;">
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="ltabs-items items-category-32 grid" data-total="16">
                                            <div class="ltabs-loading"></div>

                                        </div>
                                        <div class="ltabs-items  items-category-33 grid" data-total="16">
                                            <div class="ltabs-loading"></div>
                                        </div>
                                        <!--End Items-->
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-brands">
                <div class="slider-brands container">
                    <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no"
                        data-autoheight="no" data-autowidth="no" data-delay="4" data-speed="0.6" data-margin="0"
                        data-items_column00="6" data-items_column0="6" data-items_column1="5" data-items_column2="3"
                        data-items_column3="2" data-items_column4="1" data-arrows="yes" data-pagination="no"
                        data-lazyload="yes" data-hoverpause="yes">
                        <div class="item"><a href="#"><img src="image/catalog/brands/b1.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b2.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b3.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b4.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b5.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b6.jpg" alt="brand"></a></div>
                        <div class="item"><a href="#"><img src="image/catalog/brands/b3.jpg" alt="brand"></a></div>
                    </div>

                </div>
            </div>



        </div>
    </div>
    <!-- //Main Container -->
</template>
<style>
.carousel_home>.carousel__viewport >ol{
    justify-content: inherit !important;
    height: 550px!important;
}
/* .carousel__track{
    justify-content: inherit !important;
} */
</style>
<script>
import BannerService from '@/services/BannerService';
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import "vue3-carousel/dist/carousel.css";
import { ref } from 'vue'
import store from '@/store';
export default {
  
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        defineComponent
    },
    setup() {
        store.dispatch('fetchProductSale');
        store.dispatch('fetchProductDesc');
        const banner = ref(null);
        BannerService.getAll().then((res) => {
            banner.value = res.data
            console.log(banner.value);
        })
        function onCart(itemId) {
            console.log(itemId);
            store.commit('onCart', itemId);
        }
        return { banner ,onCart}
    },
    computed:{
        product(){
            return store.state.productSale;
        },
        productDesc(){
            return store.state.productDesc;
        }
    },
  
}

</script>
<style>
.carousel__item {
    min-height: 618px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 0px !important;
}

.carousel__next {
    right: 4px !important;
}

.carousel__slide {
    padding: 0px !important;
}
</style>