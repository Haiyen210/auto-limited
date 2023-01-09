import http from "../http-common";
class CategoryProductService {
    getAll() {
        return http.get("/CategoryProduct");
    }
    getTrash() {
        return http.get("/CategoryProduct/TrashCategoryProduct");
    }
    get(id) {
        return http.get(`/CategoryProduct/${id}`);
    }
    create(data) {
        return http.post("/CategoryProduct", data);
    }
    update(data) {
        return http.post(`/CategoryProduct/PutCategoryProduct`, data);
    }
    temporaryDelete(data) {
        return http.post(`/CategoryProduct/TemporaryDelete`, data);
    }
    repeat(data) {
        return http.post(`/CategoryProduct/RepeatCategoryProduct`, data);
    }
    delete(id) {
            return http.delete(`/CategoryProduct/${id}`);
        }
}
export default new CategoryProductService();