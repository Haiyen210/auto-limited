import { createStore } from 'vuex';
import ProductService from './services/ProductService';
export const store = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem("carts")) ? JSON.parse(localStorage.getItem("carts")) : [],
        product: [],
        loginUser: JSON.parse(localStorage.getItem("loginUser")),
        productSale: [],
        productDesc: [],
        pro: []
    },
    getters: {
        total: state => {
            if (state.cart) {
                return state.cart.reduce((acc, val) => {
                    if (val.salePrice == 0) {
                        return acc + val.Quantity * val.price
                    } else {
                        return acc + val.Quantity * val.salePrice
                    }
                }, 0)
            }
        },
        count: state => {
            if (state.cart == null) {
                return 0;
            } else {
                return state.cart.length;
            }
        },
        getProduct: (state) => state.product,
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const data = await ProductService.getAll()
                commit('Set_Product', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchProductSale({ commit }) {
            try {
                const data = await ProductService.getProductSale()
                commit('Set_Product_Sale', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        async fetchProductDesc({ commit }) {
            try {
                const data = await ProductService.getProductDesc()
                commit('Set_Product_Desc', data.data)
            } catch (error) {
                console.log(error)
            }
        },
        onCart({ commit }, itemId) {
            commit('onCart', itemId)
        },
        onCount({ commit }, proId) {
            commit('onCount', proId);
        },
        onCountMinus({ commit }, proId) {
            commit('onCountMinus', proId);
        },
    },
    mutations: {
        Set_Product(state, product) {
            state.product = product
        },
        Set_Product_Sale(state, productSale) {
            state.productSale = productSale
        },
        Set_Product_Desc(state, productDesc) {
            state.productDesc = productDesc
        },
        onCart(state, itemId) {
            const loginUser = JSON.parse(localStorage.getItem("loginUser"));
            if (loginUser) {
                let itemIS;
                if (state.cart) {
                    itemIS = state.cart.find(({ id }) => id === itemId);
                }
                let item = state.product.find(({ id }) => id === itemId);
                if (!item) {
                    item = state.productDesc.find(({ id }) => id === itemId);
                    item = state.productSale.find(({ id }) => id === itemId);
                    console.log(item);
                }

                console.log(item);
                if (state.cart == null) {
                    state.cart = [];
                }
                if (item && !itemIS) {
                    if (item['Quantity'] == null) {
                        item['Quantity'] = 50;
                        item['name_user'] = loginUser['code'];
                        state.cart.push(item);
                    }
                }
                if (itemIS && itemIS.name_user == loginUser.code) {
                    if (itemIS['Quantity']) {
                        itemIS['Quantity'] += 10;
                        localStorage.setItem("carts", JSON.stringify(itemIS));
                    }
                }

                if (state.cart != null) {

                    localStorage.setItem("carts", JSON.stringify(state.cart));
                }
            } else {
                alert("Please login to add to cart!");
            }



        },
        onCount(state, ProId) {
            let indexs = state.cart.find(i => i.id === ProId);
            if (indexs) {
                if (indexs.Quantity >= 1) {
                    indexs.Quantity += 10;
                } else {
                    indexs.Quantity = 50;
                }
            }

            localStorage.setItem("carts", JSON.stringify(state.cart));
        },
        onCountMinus(state, proId) {
            let indexs = state.cart.find(({ id }) => id === proId);
            if (indexs) {
                if (indexs.Quantity > 1) {
                    indexs.Quantity -= 10;
                } else {
                    indexs.Quantity = 50;
                }

            }
            localStorage.setItem("carts", JSON.stringify(state.cart));
        },
        removeFromCart(state, item) {
            // console.log(item);
            var indexs = state.cart.indexOf(item);
            if (confirm("Are you sure you want to remove this product from the cart?")) {
                state.cart.splice(indexs, 1);
                const parsed = JSON.stringify(state.cart);
                localStorage.setItem('carts', parsed);
            }
        },
    }
});

export default store;