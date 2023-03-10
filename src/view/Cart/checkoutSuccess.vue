<template>
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Checkout Success</a></li>

        </ul>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="checkout-scard card border-0 rounded">
                    <div class="card-body text-center">
                        <p class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" style="color:#ff2d37" width="50"
                                height="50" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                                <path
                                    d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                <path
                                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            </svg></p>
                        <h4 class="card-title">Thank you for your order!</h4>
                        <p class="card-text mb-1">You will receive an order confirmation email with details of your
                            order and a link to track its progress.</p>
                        <p class="card-text mb-1">All necessary information about the delivery, we sent to your email
                        </p>
                        <p class="card-text text-order badge bg-success my-3" style="background: #ff2d37;">Your order #
                            is: <b>{{ order.code }}</b></p>
                        <p class="card-text mb-0">Order date: {{ date }}</p>
                        <div class="ltabs-loadmore" data-active-content=".items-category-31" data-rl_start="12"
                            data-rl_total="12" data-ajaxurl="" data-rl_load="8" data-moduleid="253">
                            <router-link :to="{ name: 'Product' }" href="#">
                                Continue Shopping
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    setup() {
        let order = JSON.parse(localStorage.getItem("order"));
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return { order, date }
    }
}
</script>