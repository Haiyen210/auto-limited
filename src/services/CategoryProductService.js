import http from "../http-common";
class CategoryProductService {
    getAll() {
        return http.get("/CategoryProduct");
    }
    getByCategory(id) {
        return http.get(`/categoryProduct/getProduct/${id}`);
    }
    get(id) {
        return http.get(`/CategoryProduct/${id}`);
    }

}
export default new CategoryProductService();