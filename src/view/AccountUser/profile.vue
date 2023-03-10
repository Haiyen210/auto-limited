<template>
    <!-- Main Container  -->
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Settings</a></li>
        </ul>

        <div class="liton__wishlist-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- PRODUCT TAB AREA START -->
                        <div class="ltn__product-tab-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="ltn__tab-menu-list mb-50">
                                            <div class="nav">
                                                <a class="active show" data-toggle="tab" href="#liton_tab_1_1">Home <i
                                                        class="fas fa-home"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_2">Order<i
                                                        class="fas fa-file-alt"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_3">Order Debit<i
                                                        class="fas fa-file-alt"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_4">Order History <i
                                                        class="fas fa-map-marker-alt"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_5">Account Details <i
                                                        class="fas fa-user"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_6">Forgotten Password <i
                                                        class="fas fa-key"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_7">Change Password <i
                                                        class="fas fa-key"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="liton_tab_1_1">
                                                <div class="ltn__myaccount-tab-content-inner" v-if="loginUser">
                                                    <p >Hello <strong>{{ loginUser.code }}</strong> </p>
                                                    <p>From your account dashboard, you can see your recent <span>
                                                            mine
                                                            orders </span>, manage <span> delivery and payment of
                                                            friend
                                                            address </span> and <span> edit your password and account
                                                            friend
                                                            details </span>.</p>
                                                </div>
                                                <div class="ltn__myaccount-tab-content-inner" v-else>
                                                    <p><router-link :to="{ name:'Login'}">Please login your account</router-link></p> 
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_2">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive" v-if="isShow == false">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Order Code</th>
                                                                    <th>Order Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(item, index) in order" :key="index"
                                                                    style="text-align: center;">
                                                                    <td>{{ index + 1 }}</td>
                                                                    <td>{{ item.code }}</td>
                                                                    <td>{{ format_date(item.createdDate) }}</td>
                                                                    <td>
                                                                        <span class="label label-warning"
                                                                            v-if="item.status == 0">Pending</span>
                                                                        <span class="label label-info"
                                                                            v-if="item.status == 1">Approved</span>
                                                                        <span class="label label-primary"
                                                                            v-if="item.status == 2">Delivering</span>
                                                                        <span class="label label-success"
                                                                            v-if="item.status == 3">Successful
                                                                            Delivery</span>
                                                                        <span class="label label-danger"
                                                                            v-if="item.status == 4">Cancelled</span>
                                                                        <span class="label label-dark" style="background:#000"
                                                                            v-if="item.status == 5">Returns</span>
                                                                        <span class="label label-warning"
                                                                            v-if="item.status == 6"> Payment
                                                                            approval</span>
                                                                    </td>
                                                                    <td>${{ formatPrice(item.totalAmount) }}</td>
                                                                    <td class="d-flex" style="display: flex;">
                                                                        <a href="#"
                                                                            v-on:click.prevent="onView(item)">View</a>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onSubmitEditForm(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 0"
                                                                                class="label label-danger"
                                                                                style="margin-left: 16px;border: 0px;">Cancelled</button>
                                                                        </form>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onEditFormStatus(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 2"
                                                                                class="label label-default"
                                                                                style="margin-left: 16px;border: 0px;">Returns</button>
                                                                        </form>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onSubmitEditStatus(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 2"
                                                                                class="label label-info"
                                                                                style="margin-left: 16px;border: 0px;">Has
                                                                                received the goods</button>
                                                                        </form>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" v-if="isShow == true" v-on:click.prevent="back_to"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16"
                                                            style="width: 32px; height: 32px" height="16"
                                                            fill="currentColor" class="bi bi-arrow-left-circle-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                                        </svg></a>
                                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12"
                                                        v-if="isShow == true">
                                                        <table class="table table-bordered" v-if="data">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product Code</th>
                                                                    <th> Product Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Price</th>
                                                                    <th>Total</th>
                                                                    <th>Note</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="item in data " :key="item.id">
                                                                <tr>
                                                                    <td>{{ item.productCode }}</td>
                                                                    <td>{{ item.productName }}</td>
                                                                    <td>{{ item.quantity }}</td>
                                                                    <td>${{ formatPrice(item.price) }}</td>
                                                                    <td>${{ formatPrice(items.totalAmount) }}</td>
                                                                    <td>{{ items.note }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_3">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive" v-if="isShow == false">
                                                        <h2 class="order-debit-h2">Order Debit</h2>
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Order Code</th>
                                                                    <th>Order Date</th>
                                                                    <th>Username</th>
                                                                    <th>Phone</th>
                                                                    <th>WareHouse</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(item, index) in order_debit" :key="index"
                                                                    style="text-align: center;">
                                                                    <td>{{ index + 1 }}</td>
                                                                    <td>{{ item.code }}</td>
                                                                    <td>{{ format_date(item.createdDate) }}</td>
                                                                    <td>{{ item.fullName }}</td>
                                                                    <td>{{ item.phone }}</td>
                                                                    <td>{{ item.wareHouse }}</td>
                                                                    <td>${{ formatPrice(item.totalAmount) }}</td>
                                                                    
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" v-if="isShow == true" v-on:click.prevent="back_to"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="16"
                                                            style="width: 32px; height: 32px" height="16"
                                                            fill="currentColor" class="bi bi-arrow-left-circle-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                                        </svg></a>
                                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12"
                                                        v-if="isShow == true">
                                                        <table class="table table-bordered" v-if="data">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product Code</th>
                                                                    <th> Product Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Price</th>
                                                                    <th>Total</th>
                                                                    <th>Note</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="item in data " :key="item.id">
                                                                <tr>
                                                                    <td>{{ item.productCode }}</td>
                                                                    <td>{{ item.productName }}</td>
                                                                    <td>{{ item.quantity }}</td>
                                                                    <td>${{ formatPrice(item.price) }}</td>
                                                                    <td>${{ formatPrice(items.totalAmount) }}</td>
                                                                    <td>{{ items.note }}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_4">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <p>Orders you have purchased</p>
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Order Code</th>
                                                                    <th>Order Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr v-for="(item, index) in orderSuccess" :key="index"
                                                                    style="text-align: center;">
                                                                    <td>{{ index + 1 }}</td>
                                                                    <td>{{ item.code }}</td>
                                                                    <td>{{ format_date(item.createdDate) }}</td>
                                                                    <td>
                                                                        <span class="label label-warning"
                                                                            v-if="item.status == 0">Pending</span>
                                                                        <span class="label label-info"
                                                                            v-if="item.status == 1">Approved</span>
                                                                        <span class="label label-primary"
                                                                            v-if="item.status == 2">Delivering</span>
                                                                        <span class="label label-success"
                                                                            v-if="item.status == 3">Successful
                                                                            Delivery</span>
                                                                        <span class="label label-danger"
                                                                            v-if="item.status == 4">Cancelled</span>
                                                                        <span class="label label-dark"
                                                                            v-if="item.status == 5">Returns</span>
                                                                        <span class="label label-warning"
                                                                            v-if="item.status == 6"> Payment
                                                                            approval</span>
                                                                    </td>
                                                                    <td>{{ formatPrice(item.totalAmount) }}</td>
                                                                    <td class="d-flex" style="display: flex;">
                                                                        <a href="#"
                                                                            v-on:click.prevent="onView(item)">View</a>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onSubmitEditForm(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 0"
                                                                                class="label label-danger"
                                                                                style="margin-left: 16px;border: 0px;">Cancelled</button>
                                                                        </form>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onEditFormStatus(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 2"
                                                                                class="label label-default"
                                                                                style="margin-left: 16px;border: 0px;">Returns</button>
                                                                        </form>
                                                                        <form method="post"
                                                                            v-on:submit.prevent="onSubmitEditStatus(item)"
                                                                            v-if="order">
                                                                            <button v-if="item.status == 2"
                                                                                class="label label-info"
                                                                                style="margin-left: 16px;border: 0px;">Has
                                                                                received the goods</button>
                                                                        </form>

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_5">
                                                <div class="ltn__myaccount-tab-content-inner" v-if="loginUser">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                        <h1 class="text-center">My Account</h1>
                                                        <tr>
                                                            <td>Account Name</td>
                                                            <td>{{ loginUser.code }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>FullName</td>
                                                            <td>{{ loginUser.name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gender</td>
                                                            <td v-if="loginUser.gender">Male</td>
                                                            <td v-if="!loginUser.gender">Female</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address</td>
                                                            <td>{{ loginUser.address }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone</td>
                                                            <td>{{ loginUser.phone }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Birthday</td>
                                                            <td>{{ format_date(loginUser.birthday) }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td>{{ loginUser.email }}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_6">
                                                <form method="post" class="form-horizontal account-register clearfix"
                                                    v-on:submit.prevent="submitForm()">
                                                    <fieldset id="account">
                                                        <legend>Forget Password</legend>
                                                        <div class="form-group required">
                                                            <label class="col-sm-2 control-label" for="input-email">Your
                                                                Email</label>
                                                            <div class="col-sm-8">
                                                                <input type="text" placeholder="Email ..."
                                                                    id="input-email" class="form-control"
                                                                    v-model="email"
                                                                    :class="{ error: emailError.status, success: emailSuccess.status }" />
                                                                <p class="text-error" v-if="emailError.status">{{
                                                                    emailError.text
                                                                }}</p>
                                                                <p class="success-text" v-if="emailSuccess.status">{{
                                                                    emailSuccess.text
                                                                }}
                                                                </p>
                                                            </div>
                                                            <div class="col-sm-2">
                                                                <button type="submit" 
                                                                    class="btn btn-success pull-right">Submit</button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_7">
                                                <form method="post" class="form-horizontal account-register clearfix"
                                                    v-on:submit.prevent="changePassword()">
                                                    <fieldset id="account">
                                                        <legend>Change Password</legend>
                                                        <div class="form-group required">
                                                            <div class="row mb-2">
                                                                <label class="col-sm-4 control-label"
                                                                    for="input-pass">Your Old Password</label>
                                                                <div class="col-sm-6">
                                                                    <input :type="passwordFieldType" id="input-pass"
                                                                        class="form-control" v-model="old_pass"
                                                                        :class="{ error: oldPassError.status, success: oldPassSuccess.status }" /><span
                                                                        id="toggle_old_pass" class="span_eye" type="password" @click="switchVisibility"><i
                                                                            class="fas fa-eye"></i></span>
                                                                    <p class="text-error" v-if="oldPassError.status">{{
                                                                        oldPassError.text
                                                                    }}</p>
                                                                    <p class="success-text"
                                                                        v-if="oldPassSuccess.status">{{
                                                                            oldPassSuccess.text
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-2">
                                                                <label class="col-sm-4 control-label"
                                                                    for="input-new-pass">Your New Password</label>
                                                                <div class="col-sm-6">
                                                                    <input :type="passwordFieldTypeS" id="input-new-pass"
                                                                        class="form-control" v-model="new_pass"
                                                                        :class="{ error: newPassError.status, success: newPassSuccess.status }" /><span
                                                                        id="toggle_new_pass" class="span_eye"><i
                                                                            class="fas fa-eye" type="passwords" @click="switchVisibilityS"></i></span>
                                                                    <p class="text-error" v-if="newPassError.status">{{
                                                                        newPassError.text
                                                                    }}</p>
                                                                    <p class="success-text"
                                                                        v-if="newPassSuccess.status">{{
                                                                            newPassSuccess.text
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="row mb-2">
                                                                <label class="col-sm-4 control-label"
                                                                    for="input-confirm-pass">Confirm New
                                                                    Password</label>
                                                                <div class="col-sm-6">
                                                                    <input :type="passwordFieldTypepassnew" id="input-confirm-pass"
                                                                        class="form-control" v-model="confirm_pass"
                                                                        :class="{ error: confirmPassError.status, success: confirmPassSuccess.status }" /><span
                                                                        id="toggle_confirm_pass" class="span_eye"><i
                                                                            class="fas fa-eye" type="passnew" @click="switchVisibilitypassnew"></i></span>
                                                                    <p class="text-error"
                                                                        v-if="confirmPassError.status">{{
                                                                            confirmPassError.text
                                                                        }}</p>
                                                                    <p class="success-text"
                                                                        v-if="confirmPassSuccess.status">{{
                                                                            confirmPassSuccess.text
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-2 justify-content-center">
                                                                    <input type="submit" value="Submit"
                                                                        class="btn btn-success pull-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- PRODUCT TAB AREA END -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="margin-bottom: 20px;"></div>
    <!-- //Main Container -->

</template>
<style>
.ltn__tab-menu-list .nav a.active {
    background-color: #ff2d37;
    color: #fff;
}

.ltn__tab-menu-list .nav a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #e5eaee;
}

.mb-50 {
    margin-bottom: 50px;
}

.ltn__tab-menu-list .nav {
    display: block;
    margin-right: 30px;
    border: 1px solid #eee;
}

.tab-content {
    width: 100%;
}

.tab-content {
    padding: 15px 15px 10px;
    margin-bottom: 20px;
    z-index: 2;
    border: 0px solid #ddd;
    border-top: 0px;
}

.tab-content .tab-pane.active {
    height: auto;
    visibility: visible;
    opacity: 1;
    overflow: visible;
}

.tab-content .tab-pane {
    display: block;
    height: 0;
    max-width: 100%;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
}

.ltn__myaccount-tab-content-inner>p {
    padding: 20px;
    background-color: #f7f5eb;
}
</style>
<script>
import Account from "@/services/AccountUserService";
import OrderServices from '@/services/OrderServices';
import OrderDetailService from "@/services/OrderDetailService";
import router from "@/router"
import { ref } from 'vue';
import moment from 'moment'
export default {
    data() {
        return {
            password: "",
            passwordFieldType: "password",
            passwordFieldTypeS: "passwords",
            passwords:"",
            passnew:"",
            passwordFieldTypepassnew: "passnew:",
            email: "",
            order: null,
            order_debit: null,
            status: false,
            list_acc: null,
            orderSuccess: null,
            old_pass: null,
            new_pass: null,
            confirm_pass: null,
            loginUsers: JSON.parse(localStorage.getItem("loginUser")),
            emailError: {
                text: "",
                status: false
            },
            emailSuccess: {
                text: "",
                status: false
            },
            oldPassError: {
                text: "",
                status: false
            },
            oldPassSuccess: {
                text: "",
                status: false
            },
            newPassError: {
                text: "",
                status: false
            },
            newPassSuccess: {
                text: "",
                status: false
            },
            confirmPassError: {
                text: "",
                status: false
            },
            confirmPassSuccess: {
                text: "",
                status: false
            },
        }
    },
    mounted() {
        Account.getAll().then((res) => {
            this.list_acc = res.data;
        })
        if(this.loginUser){
            OrderServices.getAllOrder(this.loginUsers.name).then((res) => {
            this.order = res.data
        })
        OrderServices.getOrder(this.loginUsers.name).then((res) => {
            this.orderSuccess = res.data
        })
        Account.getOrderDebit(this.loginUsers.id).then((res)=>{
            this.order_debit = res.data
        })
        }
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
        switchVisibilityS() {
            this.passwordFieldTypeS = this.passwordFieldTypeS === "password" ? "text" : "password";
        },
        switchVisibilitypassnew() {
            this.passwordFieldTypepassnew = this.passwordFieldTypepassnew === "password" ? "text" : "password";
        },
        format_date(value) {
            if (value) {
                return moment(String(value)).format('DD-MM-YYYY')
            }
        },
        formatPrice(value) {
            return new Intl.NumberFormat('en-US').format(value);
        },
        submitForm() {
            const regex_email = /^([\w-\.]{2,50})+@(([\w-]){3,10}\.)+[\w-]{2,4}$/;
            if (this.email == "") {
                this.emailError = {
                    text: "Email can't be empty !",
                    status: true
                }
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex_email.test(this.email)) {
                this.emailError = {
                    text: "Wrong email format !",
                    status: true
                }
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } 
            else if(this.email != this.loginUsers.email){
                this.emailError = {
                    text: "Email is incorrect !",
                    status: true
                }
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            }else{
                var check_exist_email = false;
                for (var i = 0; i < this.list_acc.length; i++) {
                    if (this.email === this.list_acc[i].email) {
                        check_exist_email = true;
                    }
                }
                if (check_exist_email == false) {
                    this.emailError = {
                        text: "This email not exist !",
                        status: true
                    }
                    this.emailSuccess = {
                        text: "",
                        status: false
                    }
                } else {
                    this.emailError = {
                        text: "",
                        status: false
                    }
                    this.emailSuccess = {
                        text: "Email is valid",
                        status: true
                    }
                }
            }
            console.log(this.email);
            if (this.emailSuccess.status == true) {
                confirm("We are send a message to " + this.email + " !\nPlease check email !!")
                Account.sendEmail(this.email).then((res) => {
                    localStorage.removeItem("loginUser");
                    router.push("/login")
                })
            }
        },
        changePassword() {
            if(this.old_pass == ""){
                this.oldPassError = {
                    text: "Old password can't br empty !! ",
                    status: true
                }
                this.oldPassSuccess.status = false
            }else if (this.old_pass != this.loginUsers.password) {
                this.oldPassError = {
                    text: "Old password is wrong !! Enter again ",
                    status: true
                }
                this.oldPassSuccess.status = false
            } else {
                this.oldPassError = {
                    text: "",
                    status: false
                }
                this.oldPassSuccess.status = true
                if (this.new_pass.length < 8) {
                    this.newPassError = {
                        text: "Password must be least 8 characters ",
                        status: true
                    }
                    this.newPassSuccess = {
                        text: "",
                        status: false
                    }
                } else {
                    this.newPassError = {
                        text: "",
                        status: false
                    }
                    this.newPassSuccess = {
                        text: "Password id valid",
                        status: true
                    }
                    if (this.confirm_pass != this.new_pass) {
                        this.confirmPassError = {
                            text: "Confirm password not match ",
                            status: true
                        }
                        this.confirmPassSuccess = {
                            text: "",
                            status: false
                        }
                    } else {
                        this.confirmPassError = {
                            text: "",
                            status: false
                        }
                        this.confirmPassSuccess = {
                            text: "Confirm password matched",
                            status: true
                        }
                    }
                }
            }

            if (this.oldPassSuccess.status == true && this.newPassSuccess.status == true && this.confirmPassSuccess.status == true) {
                var data = {
                    id: this.loginUsers.id,
                    password: this.new_pass
                }
                Account.changePassword(data).then((res) => {
                    console.log(res)
                    localStorage.removeItem("loginUser");
                    router.push("/login")
                })
            }
        }
    },
    setup() {
        const loginUser = JSON.parse(localStorage.getItem("loginUser"));
        const isShow = ref(false)
        const data = ref(null);
        const items = ref("")
        function onView(item) {
            items.value = item;
            OrderDetailService.get(item.id).then((res) => {
                data.value = res.data;
                console.log(data.value);
            })
            isShow.value = true

        }
        function back_to() {
            isShow.value = false
        }
        function onSubmitEditForm(item) {
            item.status = 4;
            OrderServices.update(item)
                .then((res) => {
                    console.log(res);

                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                });
        }
        function onEditFormStatus(item) {
            item.status = 6;
            OrderServices.update(item)
                .then((res) => {
                    console.log(res);

                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                });
        }
        function onSubmitEditStatus(item) {
            item.status = 3;
            OrderServices.update(item)
                .then((res) => {
                    console.log(res);

                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                });
        }
        return { loginUser, onView, back_to, items, data, isShow, onSubmitEditForm, onEditFormStatus, onSubmitEditStatus }
    }
} 
</script>