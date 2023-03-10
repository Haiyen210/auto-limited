<template>
    <!-- Main Container  -->
    <div class="main-container container" style="margin-bottom: 60px;">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Login</a></li>
        </ul>

        <div class="row">
            <div id="content" class="col-sm-12">
                <div class="page-login">

                    <div class="account-border">
                        <div class="row">
                            <div class="col-sm-6 new-customer">
                                <div class="well">
                                    <h2><i class="fa fa-file-o" aria-hidden="true"></i> New Customer</h2>
                                    <p>By creating an account you will be able to shop faster, be up to date on an
                                        order's status, and keep track of the orders you have previously made.</p>
                                </div>
                                <div class="bottom-form">
                                    <a href="/Register" class="btn btn-default pull-right">Continue</a>
                                </div>
                            </div>

                            <form v-if="status" method="post" v-on:submit.prevent="onSubmitForm">
                                <div class="col-sm-6 customer-login">
                                    <div class="well">
                                        <h2><i class="fa fa-file-text-o" aria-hidden="true"></i> Returning Customer</h2>
                                        <p><strong>I am a returning customer</strong></p>
                                        <p class="text-error" v-if="response.status == false">Wrong account or password</p>
                                        <div class="form-group">
                                            <label class="control-label " for="email">E-Mail Or Phone</label>
                                            <input type="text" class="form-control" id="email"
                                                v-model="data.emailorphone"
                                                :class="{ error: emailError.status, success: emailSuccess.status }" />
                                            <p class="text-error" v-if="emailError.status">{{ emailError.text }}</p>
                                            <p class="success-text" v-if="emailSuccess.status">{{ emailSuccess.text }}
                                            </p>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label " for="password">Password</label>
                                            <input type="password" class="form-control" id="password"
                                                v-model="data.password"
                                                :class="{ error: passwordError.status, success: passwordSuccess.status }">
                                            <p class="text-error" v-if="passwordError.status">{{ passwordError.text }}
                                            </p>
                                            <p class="success-text" v-if="passwordSuccess.status">{{
                                                passwordSuccess.text
                                            }}
                                            </p>
                                        </div>
                                    </div>
                                    <div v-if="status" class="bottom-form">
                                        <a v-on:click="forgotPassword()" class="forgot">Forgotten Password</a>
                                        <input type="submit" value="Login" class="btn btn-default pull-right" />
                                    </div>
                                </div>
                            </form>
                            <form v-if="!status" method="post" v-on:submit.prevent="submitForm()">
                                <fieldset id="account">
                                    <legend>Forget Password</legend>
                                    <div class="form-group required">
                                        <label class="col-sm-2 control-label" for="input-email">Your
                                            Email</label>
                                        <div class="col-sm-8">
                                            <input type="text" placeholder="Email ..." id="input-email"
                                                class="form-control" v-model="forgot_email"
                                                :class="{ error: forgotEmailError.status, success: forgotEmailSuccess.status }" />
                                            <p class="text-error" v-if="forgotEmailError.status">{{
                                                forgotEmailError.text
                                            }}</p>
                                            <p class="success-text" v-if="forgotEmailSuccess.status">{{
                                                forgotEmailSuccess.text
                                            }}
                                            </p>
                                        </div>
                                        <div class="col-sm-2">
                                            <button type="submit" class="btn btn-success pull-right">Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                            <div v-if="!status" class="bottom-form">
                                <a v-on:click="forgotPassword()" class="forgot">Return to Login</a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- //Main Container -->
</template>
<script>
import AccountUser from '@/services/AccountUserService';
import router from '@/router'
export default {
    data() {
        return {
            data: {
                emailorphone: "",
                password: "",
            },
            list_acc: null,
            forgot_email: null,
            status: true,
            response: {
                data: "",
                status: true
            },
            emailError: {
                text: "",
                status: false
            },
            emailSuccess: {
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
            forgotEmailError: {
                text: "",
                status: false
            },
            forgotEmailSuccess: {
                text: "",
                status: false
            }
        }
    },
    mounted() {
        AccountUser.getAll().then((res) => {
            this.list_acc = res.data;
        })
    },
    methods: {
        forgotPassword() {
            if (this.status == true) {
                this.status = false
            } else {
                this.status = true
            }
            console.log(this.status)
        },
        onSubmitForm() {
            const regex_email = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
            const regex_phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            if (this.data.emailorphone.length == 0) {
                this.emailError = {
                    text: "Email cannot be empty !",
                    status: true
                },
                    this.emailSuccess = {
                        text: "",
                        status: false
                    }
            } else if (this.data.emailorphone.length == 10 && regex_phone.test(this.data.emailorphone) || regex_email.test(this.data.emailorphone)) {
                this.emailError = {
                    text: "",
                    status: false
                },
                    this.emailSuccess = {
                        text: "",
                        status: true
                    }
            } else {
                this.emailError = {
                    text: "Account must be email or phone !",
                    status: true
                },
                    this.emailSuccess = {
                        text: "",
                        status: false
                    }
            }
            if (this.data.password.length == 0) {
                this.passwordError = {
                    text: "Password cannot be empty !",
                    status: true
                },
                    this.passwordSuccess = {
                        text: "",
                        status: false
                    }
            } else if (this.data.password.length < 8) {
                this.passwordError = {
                    text: "Password least 8 characters !",
                    status: true
                },
                    this.passwordSuccess = {
                        text: "",
                        status: false
                    }
            } else {
                this.passwordError = {
                    text: "",
                    status: false
                },
                    this.passwordSuccess = {
                        text: "",
                        status: true
                    }
            }
            if (this.emailSuccess.status == true && this.passwordSuccess.status == true) {
                AccountUser.login(this.data).then((res) => {
                    console.log(res.data);
                    if (res.data == "") {
                        this.response.status = false
                    } else {
                        this.response.status = true
                        this.response.data = res.data;
                        localStorage.setItem("loginUser", JSON.stringify(res.data));
                        window.location.href = "/";
                    }

                })
            }
        },
        submitForm() {
            const regex_email = /^([\w-\.]{2,50})+@(([\w-]){3,10}\.)+[\w-]{2,4}$/;
            if (this.forgot_email == "") {
                this.forgotEmailError = {
                    text: "Email can't be empty !",
                    status: true
                }
                this.forgotEmailSuccess = {
                    text: "",
                    status: false
                }
            } else if (!regex_email.test(this.forgot_email)) {
                this.forgotEmailError = {
                    text: "Wrong email format !",
                    status: true
                }
                this.forgotEmailSuccess = {
                    text: "",
                    status: false
                }
            } else {
                var check_exist_email = false;
                for (var i = 0; i < this.list_acc.length; i++) {
                    if (this.forgot_email === this.list_acc[i].email) {
                        check_exist_email = true;
                    }
                }
                if (check_exist_email == false) {
                    this.forgotEmailError = {
                        text: "This email not exist !",
                        status: true
                    }
                    this.forgotEmailSuccess = {
                        text: "",
                        status: false
                    }
                } else {
                    this.forgotEmailError = {
                        text: "",
                        status: false
                    }
                    this.forgotEmailSuccess = {
                        text: "Email is valid",
                        status: true
                    }
                }
            }
            console.log(this.forgot_email);
            if (this.forgotEmailSuccess.status == true) {
                confirm("We are send a message to " + this.forgot_email + " !\nPlease check email !!")
                AccountUser.sendEmail(this.forgot_email).then((res) => {
                    localStorage.removeItem("loginUser");
                    router.push("/login")
                })
            }
        }
    }
}
</script>