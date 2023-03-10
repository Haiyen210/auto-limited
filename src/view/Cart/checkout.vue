<template>
	<!-- Main Container  -->
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Checkout</a></li>

		</ul>

		<div class="row">
			<!--Middle Part Start-->
			<div id="content" class="col-sm-12">
				<h2 class="title">Checkout</h2>
				<div class="so-onepagecheckout row">
					<form method="post" v-on:submit.prevent="onOrder">
						<div class="col-left col-sm-3">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><i class="fa fa-user"></i> Your Personal Details and Your
										Address</h4>
								</div>
								<div class="panel-body">
									<fieldset id="account">
										<div class="form-group required">
											<label for="input-payment-firstname" class="control-label">FullName</label>
											<input type="text" class="form-control" id="input-payment-firstname"
												placeholder="FullName" name="FullName" v-model="order.name" readonly>
										</div>
										<div class="form-group required">
											<label for="input-payment-lastname" class="control-label">Address</label>
											<input type="text" class="form-control" id="input-payment-lastname"
												placeholder="Address" name="Address" v-model="order.address" readonly>
										</div>
										<div class="form-group required">
											<label for="input-payment-email" class="control-label">E-Mail</label>
											<input type="text" class="form-control" id="input-payment-email"
												placeholder="E-Mail" name="email" v-model="order.email" readonly>
										</div>
										<div class="form-group required">
											<label for="input-payment-telephone" class="control-label">Telephone</label>
											<input type="text" class="form-control" id="input-payment-telephone"
												placeholder="Telephone" name="telephone" v-model="order.phone" readonly>
										</div>

									</fieldset>
								</div>
							</div>

						</div>
						<div class="col-right col-sm-9">
							<div class="row">
								<div class="col-sm-12">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><i class="fa fa-shopping-cart"></i> Shopping cart
											</h4>
										</div>
										<div class="panel-body">
											<div class="table-responsive">
												<table class="table table-bordered">
													<thead>
														<tr>
															<td class="text-center">Image</td>
															<td class="text-left">Product Code</td>
															<td class="text-left">Product Name</td>
															<td class="text-left">Quantity</td>
															<td class="text-right">Unit Price</td>
															<td class="text-right">Total</td>
														</tr>
													</thead>
													<tbody>
														<tr v-for="item in carts" :key="item.id">
															<td class="text-center"><a href="#"><img style="width:60px"
																		:src="'http://localhost:54195/images/' + item.images"
																		alt="Xitefun Causal Wear Fancy Shoes"
																		title="Xitefun Causal Wear Fancy Shoes"
																		class="img-thumbnail"></a></td>
															<td class="text-left"><a href="#">{{ item.code }}</a></td>
															<td class="text-left"><a href="#">{{ item.name }}</a></td>
															<td class="text-left">{{ item.Quantity }}</td>
															<td class="text-right">
																<p v-if="item.salePrice > 0">${{
																	formatPrice(item.salePrice
																																	)
																}}</p>
																<p v-if="item.salePrice == 0">${{
																	formatPrice(item.price)
																}}
																</p>
															</td>
															<td class="text-right">${{ formatPrice(sum) }}</td>
														</tr>
													</tbody>
													<tfoot>
														<tr>
															<td class="text-right" colspan="4">
																<strong>Sub-Total:</strong>
															</td>
															<td class="text-right" colspan="2">${{ formatPrice(sum) }}
															</td>
														</tr>
														<tr>
															<td class="text-right" colspan="4"><strong>Shipping
																	charges:</strong></td>
															<td class="text-right" colspan="2">$40</td>
														</tr>
														<tr>
															<td class="text-right" colspan="4"><strong>Tax:</strong></td>
															<td class="text-right" colspan="2">10%</td>
														</tr>
														<tr>
															<td class="text-right" colspan="4"><strong>Total:</strong>
															</td>
															<td class="text-right" colspan="2">${{ formatPrice((sum/100)*10 +sum + 40)
															}}
															</td>
														</tr>
													</tfoot>
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-12">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title"><i class="fa fa-pencil"></i> Add Comments About Your
												Order</h4>
										</div>
										<div class="panel-body">
											<textarea rows="4" class="form-control" id="confirm_comment" name="comments"
												v-model="order.note"></textarea>
											<br>
											<div class="form-group">
											<h4 for="input-payment-firstname" class="control-label">Payments:</h4>
											<label class="control-label" for="confirm_agree">
												<input type="radio" :value="0" class="validate required"
													id="confirm_agree" name="confirm agree1" v-model="order.payment">
												<span>Always pay </span> </label>
												<label class="control-label" for="confirm_agree" style="margin-left: 39px;">
												<input type="radio" :value="1" class="validate required"
													id="confirm_agree" name="confirm agree" v-model="order.payment">
												<span>Debit</span> </label>
										</div>
										
											<div class="buttons">
												<div class="pull-right">
													<button type="submit" class="btn btn-primary"
														id="button-confirm">Confirm Order</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<!--Middle Part End -->

		</div>
	</div>
	<!-- //Main Container -->
</template>
<script>
import store from '@/store'
import OrderServices from '@/services/OrderServices';
import OrderDetailService from '@/services/OrderDetailService';
import { ref } from '@vue/reactivity';
import router from '@/router';
export default {
	setup() {
		let carts = store.state.cart;
		let loginUser = JSON.parse(localStorage.getItem("loginUser"));
		const radom = Math.floor(Math.random() * 90000) + 10000;
		let Id = ref(null);
		let order = ref({
			id: "",
			code: radom,
			name: loginUser.name,
			address: loginUser.address,
			email: loginUser.email,
			phone: loginUser.phone,
			note: "",
			accountUserId: loginUser.id,
			totalQuantity: store.state.cart.length,
			totalAmount: (store.getters.total/100)*10 + store.getters.total+ 40,
			status: 0,
			payment:""

		})
		function onOrder() {
			if (order.value) {
				if (order.value.note == "") {
					order.value.note = null;
				}
				OrderServices.create(order.value)
					.then((res) => {
						Id.value = res.data.id;
						order.value.id = Id.value;
						localStorage.setItem("order", JSON.stringify(res.data));
						var dataOD = [];
						var countCart = 0;
						var count = 0;
						for (let i = 0; i < carts.length; i++) {
							countCart ++;
							const element = carts[i];
							const orderDetail = ref({
								productId: element.id,
								orderId: res.data.id,
								price: "",
								quantity: element.Quantity,
								status: true
							})
							if (element.salePrice > 0) {
								orderDetail.value.price = element.salePrice;
							} else {
								orderDetail.value.price = element.price;
							}
							dataOD.push(orderDetail.value);
						}
						console.log(dataOD);
						for (let i = 0; i < dataOD.length; i++) {
							const element = dataOD[i];
							count ++;
							OrderDetailService.create(element)
								.then((res) => {
								
									OrderDetailService.update(res.data).
									then();

								}).catch((error) => {

									console.log(error);

								}).finally(() => {
									
								})

						}
						console.log(countCart, count);
						if(countCart == count){
							localStorage.removeItem("carts")
							store.state.cart = [];
							router.push('/checkout-success')
							
							
						}
					
					}).catch((error) => {
						console.log(error);
					})
					.finally(() => {
					});


			} else {
				console.log("false")
			}
		}
		return { carts, loginUser, onOrder, order }
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