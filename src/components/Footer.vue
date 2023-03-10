<template>
       <!-- Footer Container -->
    <footer class="footer-container typefooter-1">
        <!-- Footer Top Container -->
        <div class="row-top">
            <div class="block-services container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin1">
                        <div class="icon-service">
                            <div class="icon"><i class="pe-7s-car">&nbsp;</i></div>
                            <div class="text">
                                <h6>Free shipping</h6>
                                <p class="no-margin">On all orders over $40</p>
                            </div>
                        </div>
                    </div>        
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin1">
                        <div class="icon-service">
                            <div class="icon"><i class="pe-7s-refresh-2">&nbsp;</i></div>
                            <div class="text">
                                <h6>30 days return</h6>
                                <p class="no-margin">You have 30 days to return</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin">
                        <div class="icon-service">
                            <div class="icon"><i class="pe-7s-door-lock">&nbsp;</i></div>
                            <div class="text">
                                <h6>Safe Shopping<br></h6>
                                <p class="no-margin">Payment 100% secure</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div class="icon-service">
                            <div class="icon"><i class="pe-7s-users">&nbsp;</i></div>
                            <div class="text">
                                <h6>Online support</h6>
                                <p class="no-margin">Contact us 24 hours a day</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- /Footer Top Container -->

        <!-- Footer middle Container -->
        <div class="container">
            <div class="row footer-middle">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-style">
                    <div class="box-footer box-infos">
                        <div class="module">
                            <h3 class="modtitle">Contact us</h3>
                            <div class="modcontent">
                                <ul class="list-icon">
                                    <li><span class="icon pe-7s-map-marker"></span>5611 Wellington Road, Suite 115, Gainesville, VA 20155</li>
                                    <li><span class="icon pe-7s-call"></span> <a href="#">888 9344 6000 - 888 1234 6789</a></li>
                                    <li><span class="icon pe-7s-mail"></span><a href="mailto:contact@opencartworks.com">contact@opencartworks.com</a></li>
                                    <li><span class="icon pe-7s-alarm"></span>7 Days a week from 10-00 am to 6-00 pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                            <div class="box-information box-footer">
                                <div class="module clearfix">
                                    <h3 class="modtitle">Information</h3>
                                    <div class="modcontent">
                                        <ul class="menu">
                                            <li><a href="#">Product List</a></li>
                                            <li><a href="#">Product Detail</a></li>
                                            <li><a href="#">Order</a></li>
                                            <li><a href="#">Order History</a></li>
                                            <li><a href="#">Cart</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                            <div class="box-account box-footer">
                                <div class="module clearfix">
                                    <h3 class="modtitle">My Account</h3>
                                    <div class="modcontent">
                                        <ul class="menu">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Register</a></li>
                                            <li><a href="#">Account Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                            <div class="box-service box-footer">
                              <div class="module clearfix">
                                <h3 class="modtitle">Categories</h3>
                                <div class="modcontent">
                                  <ul class="menu" v-for="item in category" :key="item.id">
                                    <li><a href="#">{{ item.name }}</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </footer>
    <!-- //end Footer Container -->
</template>
<script>
import CategoryProductService from '@/services/CategoryProductService'
export default {
    data(){
        return {
            category:null
        }
    },
    mounted(){
        CategoryProductService.getAll().then((res)=> this.category = res.data)
    }
}
</script>