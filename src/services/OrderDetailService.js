import http from "../http-common";
class OrderDetailService {
    getAll() {
        return http.get("/OrderDetails");
    }
    get(id) {
        return http.get(`/OrderDetails/${id}`);
    }
    create(data) {
        return http.post("/OrderDetails", data);
    }
    update(data) {
        return http.post("/OrderDetails/PutProductQuantity", data);
    }
    delete(id) {
        return http.delete(`/OrderDetails/${id}`);
    }
}
export default new OrderDetailService();