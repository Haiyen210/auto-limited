<template>
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#" v-if="proDetails">{{ proDetails.name }}</a></li>

        </ul>

        <div class="row" style="font-family: 'Rubik';">
            <div id="content" class="col-md-12 col-sm-12">
                <div v-if="proDetails">
                    <div class="product-view row">
                        <div class="left-content-product">

                            <div class="content-product-left class-honizol col-md-5 col-sm-12 col-xs-12">
                                <div class="large-image  ">
                                    <img style="width: 100%;height: 300px;" itemprop="image" class="product-image-zoom"
                                        :src="'http://localhost:54195/images/' + proDetails.images"
                                        title="Chicken swinesha" alt="Chicken swinesha">
                                </div>

                            </div>

                            <div class="content-product-right col-md-7 col-sm-12 col-xs-12">
                                <div class="title-product">
                                    <h1 style="font-family: -webkit-body;font-size: 40px;">{{ proDetails.name }}</h1>
                                </div>

                                <div class="product-label form-group">
                                    <div class="product_page_price price" itemprop="offerDetails"
                                        itemtype="http://data-vocabulary.org/Offer"
                                        style="margin-top: 10px;margin-bottom: -10px;">

                                        <div v-if="proDetails.salePrice > 0" class="price" style="display: flex;">
                                            <h1 style="font-size: 35px; margin-right: 10px;" class="price-new">${{
                                                proDetails.salePrice
                                            }}</h1>
                                            <h4 style="font-size: 20px;padding-top: 10px;" class="price-old">${{
                                                proDetails.price
                                            }}</h4>

                                        </div>
                                        <div v-else class="price">

                                            <h1 style="font-size: 35px;" class="price-new">${{ proDetails.price }}</h1>
                                        </div>
                                    </div>

                                </div>
                                <h3>Category : {{ proDetails.categoryName }}</h3>
                                <div class="product-label form-group" style="margin-bottom: 10px;">
                                    <div style="float: left;" v-if="proDetails.status == true" class="stock">
                                        <span>Availability:</span> <span class="status-stock">In Stock</span>
                                    </div>
                                    <div v-else class=""><span>Availability:</span> <span class="status-stock"
                                            style="color: red;">Out Stock</span></div>

                                </div>
                                <p><span style="font-size: 20px;"></span> {{
                                    proDetails.description.substring(0, 100) + "..."
                                }}</p>
                                <div id="product">
                                    <div class="form-group box-info-product">
                                        <div class="option quantity">
                                            <div class="input-group quantity-control" unselectable="on"
                                                style="-webkit-user-select: none;margin-right: 20px;width: 215px;">
                                                <div class="cart-plus-minus" style="margin-top: 6px">
                                                    <input type="button" value="-" name="qtybutton"
                                                        class="cart-plus-minus-box" @click="reduction"
                                                        style="border: 1px solid;background: #ff2d37;color: #ffff;margin-right: -13px">
                                                    <input type="text" v-bind:value="count" v-bind:step="10"
                                                        name="qtybutton" class="cart-plus-minus-box"
                                                        style="width: 70px;height: 30px;margin: 1px 14px 0px 14px;padding-top: 4px;">

                                                    <input type="button" value="+" name="qtybutton"
                                                        class="cart-plus-minus-box" @click="plus"
                                                        style="border: 1px solid;background: #ff2d37;color: #ffff;margin-left: -13px">
                                                </div>

                                            </div>
                                        </div>
                                        <div class="cart">
                                            <input type="button" data-toggle="tooltip" title="" value="Add to Cart"
                                                data-loading-text="Loading..." id="button-cart"
                                                class="btn btn-mega btn-lg" data-original-title="Add to Cart">
                                        </div>


                                    </div>

                                </div>
                                <!-- end box info product -->

                            </div>

                        </div>
                    </div>
                    <!-- Product Tabs -->
                    <div class="producttab ">
                        <div class="tabsslider  vertical-tabs col-xs-12">
                            <ul class="nav nav-tabs col-lg-2 col-sm-3">
                                <li class="active"><a data-toggle="tab" href="#tab-1">Description</a></li>
                                <li class="item_nonactive"><a data-toggle="tab" href="#tab-review">Reviews (1)</a></li>

                            </ul>
                            <div class="tab-content col-lg-10 col-sm-9 col-xs-12"
                                style="overflow-y: scroll;height: 350px; width: 83%!important;">
                                <div id="tab-1" class="tab-pane fade active in">
                                    <p>
                                        {{ proDetails.description }}
                                    </p>

                                </div>
                                <div id="tab-review" class="tab-pane fade">
                                    <form>
                                        <h2 id="review-title">Write a review</h2>
                                        <div class="contacts-form">
                                            <div class="form-group"> <span class="icon icon-user"></span>
                                                <input type="text" name="name" class="form-control" value="Your Name"
                                                    onblur="if (this.value == '') {this.value = 'Your Name';}"
                                                    onfocus="if(this.value == 'Your Name') {this.value = '';}">
                                            </div>
                                            <div class="form-group"> <span class="icon icon-bubbles-2"></span>
                                                <textarea class="form-control" name="text"
                                                    onblur="if (this.value == '') {this.value = 'Your Review';}"
                                                    onfocus="if(this.value == 'Your Review') {this.value = '';}">Your Review</textarea>
                                            </div>
                                            <span style="font-size: 11px;"><span class="text-danger">Note:</span> HTML
                                                is not translated!</span>

                                         
                                            <div class="buttons clearfix"><a id="button-review"
                                                    class="btn buttonGray">Continue</a></div>
                                        </div>
                                    </form>
                                </div>
                                <div id="tab-4" class="tab-pane fade">
                                    <a href="#">Monitor</a>,
                                    <a href="#">Apple</a>
                                </div>
                                <div id="tab-5" class="tab-pane fade">
                                    <h3 class="custom-color">Take a trivial example which of us ever undertakes</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua.
                                        At vero eos et accusam et justo duo
                                        dolores et ea rebum. Stet clita kasd
                                        gubergren, no sea takimata sanctus est
                                        Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing
                                        elitr, sed diam nonumy eirmod tempor
                                        invidunt ut labore et dolore magna aliquyam
                                        erat, sed diam voluptua. </p>
                                    <p>At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren,
                                        no sea takimata sanctus est Lorem ipsum
                                        dolor sit amet. Lorem ipsum dolor sit
                                        amet, consetetur sadipscing elitr.</p>
                                    <ul class="marker-simple-list two-columns">
                                        <li>Nam liberempore</li>
                                        <li>Cumsoluta nobisest</li>
                                        <li>Eligendptio cumque</li>
                                        <li>Nam liberempore</li>
                                        <li>Cumsoluta nobisest</li>
                                        <li>Eligendptio cumque</li>
                                    </ul>
                                    <p>Sed diam nonumy eirmod tempor invidunt
                                        ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet
                                        clita kasd gubergren, no sea takimata
                                        sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- //Product Tabs -->
                </div>
                <!-- Related Products -->
                <div class="related titleLine products-list grid module ">
                    <h3 class="modtitle">Related Products </h3>
                    <Carousel :settings="settings" :breakpoints="breakpoints" style="height: 489px;" class="carousel_detail">
                        <Slide v-for="item in procate" :key="item.id" >
                            <div class="carousel__item" style="background-color:#fff!important;padding: 10px;height: 489px">
                                    <div class="product-layout product-grid">
                                        <div class="product-item-container item--static">
                                            <div class="left-block" style="height: 155px">
                                                <div class="product-image-container second_img">
                                                    <a href="#" target="_self" title="Shoulder kevinis">
                                                        <img :src="'http://localhost:54195/images/' + item.images"
                                                            class="img-1 img-responsive" alt="image1">
                                                        <img :src="'http://localhost:54195/images/' + item.images"
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
                                            <div class="right-block">
                                                <div class="button-group cartinfo--static">

                                                  
                                                    <button type="button" class="addToCart" title="Add to cart">
                                                        <span>Add to cart </span>
                                                    </button>

                                                </div>
                                                <router-link :to="{ name: 'ProductDetail', params: { id: item.id } }"
                                                    data-toggle="collapse" aria-expanded="false"
                                                    class="dropdown-toggle">

                                                    <h4><a href="#" title="Shoulder kevinis" target="_self">{{
                                                        item.name
                                                    }}</a></h4>
                                                </router-link>

                                                
                                                <div v-if="item.salePrice > 0" class="price">
                                                    <span class="price-old" style="margin-right: 6px;">${{
                                                        item.price
                                                    }}</span>
                                                    <span class="price-new">${{ item.salePrice }}</span>
                                                </div>
                                                <div v-else class="price">
                                                    <span class="price">${{ item.price }}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                  
                </div>

                <!-- end Related  Products-->
            </div>

        </div>

    </div>
</template>
<style>
.carousel_detail>.carousel__viewport >.carousel__track{
    justify-content: center !important;
    height: 440px !important;
}
</style>

<link href='https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,600,700' rel='stylesheet' type='text/css'/>    
<script>
import ProductService from '@/services/ProductService';
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import "vue3-carousel/dist/carousel.css";
export default {
    props: ['product'],
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            proDetails: null,
            procate: null,
            myResult: '',
            query: "",
            current: 1,
            pageSize: 5,
            isActive: false,
            count: 50,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'start',
                }
            }
        }
        },
            mounted() {
            ProductService.get(this.$route.params.id)
                .then((res) => {
                    this.proDetails = res.data;
                    ProductService.getcate(this.proDetails.categoryId)
                        .then((res) => {
                            this.procate = res.data;
                            console.log(res.data);
                        })
                        .catch((error) => {
                            console.log(error);

                        })
                        .finally(() => {

                        })
                })
                .catch((error) => {
                    console.log(error);

                })
                .finally(() => {

                })


        },
        methods: {
            getpro() {
                this.myResult = proDetails.description.toString(100);
            },
            plus() {
                this.count += 10
            },
            reduction() {
                if (this.count <= 50) {
                    this.count = 50
                } else {
                    this.count -= 10
                }

            }

        }
    }
</script>
