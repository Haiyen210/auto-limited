import http from "../http-common";
class WareHouseService {
    getAll() {
        return http.get("/Warehouses");
    }
    get(id) {
        return http.get(`/warehouses/${id}`);
    }
    create(data) {
        return http.post("/Warehouses", data);
    }
    update(data) {
        return http.post(`/warehouses/Putwarehouse`, data);
    }
    delete(id) {
        return http.delete(`/warehouses/${id}`);
    }
}
export default new WareHouseService();