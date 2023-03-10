import http from "../http-common";
class ProductService {
    getAll() {
        return http.get("/product");
    }
    get(id) {
        return http.get(`/product/${id}`);
    }
    getcate(id) {
        return http.get(`/product/getcategory/${id}`);
    }
    getProductDesc() {
        return http.get("/product/ProductDESC");
    }
    getProductSale() {
        return http.get("/product/ProductSale");
    }
}
export default new ProductService();