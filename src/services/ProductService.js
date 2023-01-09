import http from "../http-common";
class ProductService {
    getAll() {
        return http.get("/product");
    }
    get(id) {
        return http.get(`/product/${id}`);
    }
    getTrash() {
        return http.get("/Product/TrashProduct");
    }
    create(data) {
        return http.post("/product", data);
    }
    update(data) {
        return http.post(`/product/PutProduct`, data);
    }
    temporaryDelete(data) {
        return http.post(`/product/TemporaryDelete`, data);
    }
    repeat(data) {
        return http.post(`/product/RepeatProduct`, data);
    }
    delete(id) {
            return http.delete(`/product/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new ProductService();