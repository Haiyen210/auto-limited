<template>
    <!-- Main Container  -->
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Register</a></li>
        </ul>

        <div class="row">
            <div class="col-sm-3"></div>
            <div id="content" class="col-sm-6">
                <h1 class="title text-center">Register Account</h1>
                <p>If you already have an account with us, please login at the <router-link :to="{ name: 'Login' }">login
                        page</router-link></p>
                <form method="post" class="form-horizontal account-register clearfix" v-on:submit.prevent="onRegister">
                    <fieldset id="account">
                        <legend>Your Personal Details</legend>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-code">Account Name</label>
                            <div class="col-sm-9">
                                <input type="text" placeholder="Account Name" id="input-code" class="form-control"
                                    v-model="account.code"
                                    :class="{ error: codeError.status, success: codeSuccess.status }" />
                                <p class="text-error" v-if="codeError.status">{{ codeError.text }}</p>
                                <p class="success-text" v-if="codeSuccess.status">{{ codeSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-fullname">Full Name</label>
                            <div class="col-sm-9">
                                <input type="text" placeholder="Full Name" id="input-fullname" class="form-control"
                                    v-model="account.name"
                                    :class="{ error: nameError.status, success: nameSuccess.status }" />
                                <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
                                <p class="success-text" v-if="nameSuccess.status">{{ nameSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Gender</label>
                            <div class="col-sm-9">
                                <label class="radio-inline">
                                    <input type="radio" v-model="account.gender" id="male" :value="1" checked> Male
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" v-model="account.gender" id="female" :value="0"> Female
                                </label>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-email">E-Mail</label>
                            <div class="col-sm-9">
                                <input type="text" placeholder="E-Mail" id="input-email" class="form-control"
                                    v-model="account.email"
                                    :class="{ error: emailError.status, success: emailSuccess.status }" />
                                <p class="text-error" v-if="emailError.status">{{ emailError.text }}</p>
                                <p class="success-text" v-if="emailSuccess.status">{{ emailSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-telephone">Telephone</label>
                            <div class="col-sm-9">
                                <input type="text" placeholder="Telephone" id="input-telephone" class="form-control"
                                    v-model="account.phone"
                                    :class="{ error: phoneError.status, success: phoneSuccess.status }" />
                                <p class="text-error" v-if="phoneError.status">{{ phoneError.text }}</p>
                                <p class="success-text" v-if="phoneSuccess.status">{{ phoneSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-birthday">Birthday</label>
                            <div class="col-sm-9">
                                <input type="date" placeholder="Birthday" id="input-birthday" class="form-control"
                                    v-model="account.birthday"
                                    :class="{ error: birthdayError.status, success: birthdaySuccess.status }" />
                                <p class="text-error" v-if="birthdayError.status">{{ birthdayError.text }}</p>
                                <p class="success-text" v-if="birthdaySuccess.status">{{ birthdaySuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label" for="input-address">Address</label>
                            <div class="col-sm-9">
                                <input type="text" placeholder="Address" id="input-address" class="form-control"
                                    v-model="account.address"
                                    :class="{ error: addressError.status, success: addressSuccess.status }" />
                                <p class="text-error" v-if="addressError.status">{{ addressError.text }}</p>
                                <p class="success-text" v-if="addressSuccess.status">{{ addressSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-password">Password</label>
                            <div class="col-sm-9">
                                <input type="password" placeholder="Password" id="input-password" class="form-control"
                                    v-model="account.password"
                                    :class="{ error: passwordError.status, success: passwordSuccess.status }" />
                                <p class="text-error" v-if="passwordError.status">{{ passwordError.text }}</p>
                                <p class="success-text" v-if="passwordSuccess.status">{{ passwordSuccess.text }}</p>
                            </div>
                        </div>
                        <div class="form-group required">
                            <label class="col-sm-3 control-label" for="input-confirm">Password Confirm</label>
                            <div class="col-sm-9">
                                <input type="password" placeholder="Password Confirm" id="input-confirm"
                                    class="form-control" v-model="confirmPassword"
                                    :class="{ error: confirmError.status, success: confirmSuccess.status }" />
                                <p class="text-error" v-if="confirmError.status">{{ confirmError.text }}</p>
                                <p class="success-text" v-if="confirmSuccess.status">{{ confirmSuccess.text }}</p>
                            </div>
                        </div>
                    </fieldset>
                    <div class="buttons">
                        <div class="pull-right">
                            <input class="box-checkbox" type="checkbox" name="agree" value="1">&nbsp;
                            I have read and agree to the <a href="#" class="agree"><b>Pricing Tables</b></a>
                            <input style="margin-left:10px;border-radius:10px;padding:10px 30px" type="submit"
                                value="Register" class="btn btn-success">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div style="margin-top:20px"></div>
    <!-- //Main Container -->
</template>
<script>
import router from "@/router";
import Account from "@/services/AccountUserService";
export default {
    data() {
        return {
            confirmPassword: "",
            list_user: null,
            
            account: {
                code: "",
                name: "",
                gender: true,
                birthday: "",
                address: "",
                email: "",
                phone: "",
                password: "",
                role: "",
                status: false,
                createdDate: "",
                modifiedDate: ""
            },
            codeError: {
                text: "",
                status: false
            },
            codeSuccess: {
                text: "",
                status: false
            },
            nameError: {
                text: "",
                status: false
            },
            nameSuccess: {
                text: "",
                status: false
            },
            emailError: {
                text: "",
                status: false
            },
            emailSuccess: {
                text: "",
                status: false
            },
            phoneError: {
                text: "",
                status: false
            },
            phoneSuccess: {
                text: "",
                status: false
            },
            birthdayError: {
                text: "",
                status: false
            },
            birthdaySuccess: {
                text: "",
                status: false
            },
            addressError: {
                text: "",
                status: false
            },
            addressSuccess: {
                text: "",
                status: false
            },
            passwordError: {
                text: "",
                status: false
            },
            passwordSuccess: {
                text: "",
                status: false
            },
            confirmError: {
                text: "",
                status: false
            },
            confirmSuccess: {
                text: "",
                status: false
            }
        }
    },
    mounted() {
        Account.getAll().then((res) => {
            this.list_user = res.data;
        })
    },
    methods: {
        onRegister() {
            if (this.account.code == "") {
                this.codeError = {
                    text: "Code dont't blank !",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.code.length < 0 && this.account.code.length > 6) {
                this.codeError = {
                    text: "Code must contain 1-6 characters !",
                    status: true
                }
                this.codeSuccess = {
                    text: "",
                    status: false
                }
            }
            else {
                var check_exist_code = true;
                for (var i = 0; i < this.list_user.length; i++) {
                    if (this.account.code === this.list_user[i].code) {
                        check_exist_code = false;
                    }
                }
                if (check_exist_code == false) {
                    this.codeError = {
                        text: "Code is exist ! Please change new !",
                        status: true
                    }
                    this.codeSuccess = {
                        text: "",
                        status: false,
                    };
                } else {
                    this.codeSuccess = {
                        text: "Code is valid",
                        status: true,
                    };
                    this.codeError = {
                        text: "",
                        status: false,
                    };
                }
            }
            if (this.account.name == "") {
                this.nameError = {
                    text: "Name dont't blank !",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.name.length < 2 || this.account.name.length > 30) {
                this.nameError = {
                    text: "Name contain from 2 to 30 characters !",
                    status: true
                }
                this.nameSuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.nameError = {
                    text: "",
                    status: false
                }
                this.nameSuccess = {
                    text: "Name is valid",
                    status: true
                }
            }
            const regex = /^([\w-\.]{2,50})+@(([\w-]){3,10}\.)+[\w-]{2,4}$/;
            if (this.account.email.length == 0 || this.account.email == '') {
                this.emailError = {
                    text: "Email cannot be empty!",
                    status: true
                }
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex.test(this.account.email)) {
                this.emailError = {
                    text: "Email is not in the correct format !",
                    status: true
                }
                this.emailSuccess = {
                    text: "",
                    status: false
                }
            } else {
                var check_exist_email = true;
                for (var i = 0; i < this.list_user.length; i++) {
                    if (this.account.email === this.list_user[i].email) {
                        check_exist_email = false;
                    }
                }
                if (check_exist_email == false) {
                    this.emailError = {
                        text: "Email is exist ! Please change new !",
                        status: true
                    }
                    this.emailSuccess = {
                        text: "",
                        status: false,
                    };
                } else {
                    this.emailSuccess = {
                        text: "Email is valid",
                        status: true,
                    };
                    this.emailError = {
                        text: "",
                        status: false,
                    };
                }
            }
            const regex_phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            if (this.account.phone.length == 0) {
                this.phoneError = {
                    text: "Phone can't be empty !",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex_phone.test(this.account.phone)) {
                this.phoneError = {
                    text: "Phone is not in the correct format !",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.phone.length != 10) {
                this.phoneError = {
                    text: "Phone must contain 10 characters ",
                    status: true
                }
                this.phoneSuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.phoneSuccess = {
                    text: "Phone is valid",
                    status: true
                }
                this.phoneError = {
                    text: "",
                    status: false
                }
            }
            if (this.account.password.length == 0) {
                this.passwordError = {
                    text: "Password cannot be empty",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.password.length < 8) {
                this.passwordError = {
                    text: "Password must contain at least 8 characters ",
                    status: true
                }
                this.passwordSuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.passwordSuccess = {
                    text: "Password is valid",
                    status: true
                }
                this.passwordError = {
                    text: "",
                    status: false
                }
            }
            if (this.account.address.length == 0) {
                this.addressError = {
                    text: "Address cannot be empty",
                    status: true
                }
                this.addressSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.account.address.length < 6 || this.account.address.length > 50) {
                this.addressError = {
                    text: "Address must be between 6 and 50 characters",
                    status: true
                }
                this.addressSuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.addressSuccess = {
                    text: "Success!",
                    status: true
                }
                this.addressError = {
                    text: "",
                    status: false
                }
            }
            if (this.confirmPassword == "") {
                this.confirmError = {
                    text: "Confirm password can't be empty !",
                    status: true
                }
                this.confirmSuccess = {
                    text: "",
                    status: false
                }
            } else if (this.confirmPassword != this.account.password) {
                this.confirmError = {
                    text: "Confirm password doesn't match password !",
                    status: true
                }
                this.confirmSuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.confirmError = {
                    text: "",
                    status: false
                }
                this.confirmSuccess = {
                    text: "Confirm password is correct ",
                    status: true
                }
            }
            if (this.account.birthday == "") {
                this.birthdayError = {
                    text: "Birthday mustn't be empty !",
                    status: true
                }
                this.birthdaySuccess = {
                    text: "",
                    status: false
                }
            } else {
                this.birthdayError = {
                    text: "",
                    status: false
                }
                this.birthdaySuccess = {
                    text: "Birthday is valid",
                    status: true
                }
            }
            if (this.codeSuccess.status == true && this.nameSuccess.status == true && this.emailSuccess.status == true &&
                this.birthdaySuccess.status == true && this.phoneSuccess.status == true && this.addressSuccess.status == true &&
                this.passwordSuccess.status == true && this.confirmSuccess.status == true) {
                this.account.role = 1;
                this.account.status = true;
                const today = new Date();
                const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date + ' ' + time;
                this.account.createdDate = dateTime;
                this.account.modifiedDate = dateTime;
                console.log(dateTime);
                Account.register(this.account).then((res) => {
                    if (res.status == 201) {
                        router.push("/Login");
                    }
                    console.log(res);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    }
}
</script>