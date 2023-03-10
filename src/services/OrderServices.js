import http from "../http-common";
class OrderService {
    getAll() {
        return http.get("/Orders");
    }
    getAllOrder(name) {
        return http.get(`/Orders/GetAllOrders/${name}`);
    }
    get(id) {
        return http.get(`/Orders/${id}`);
    }
    getOrder(name) {
        return http.get(`/Orders/OrderHistory/${name}`)
    }
    create(data) {
        return http.post("/Orders", data);
    }
    update(data) {
        return http.post(`/Orders/PutOrder`, data);
    }
    delete(id) {
        return http.delete(`/Orders/${id}`);
    }
}
export default new OrderService();