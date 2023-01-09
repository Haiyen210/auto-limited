import http from "../http-common";
class FactoryService {
    getAll() {
        return http.get("/Factory");
    }
    get(id) {
        return http.get(`/Factory/${id}`);
    }
    create(data) {
        return http.post("/Factory", data);
    }
    update(data) {
        return http.post(`/Factory/PutFactory`, data);
    }
    delete(id) {
            return http.delete(`/Factory/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new FactoryService();