import http from "../http-common";
class BannerService {
    getAll() {
        return http.get("/Banner");
    }
    get(id) {
        return http.get(`/Banner/${id}`);
    }
    create(data) {
        return http.post("/Banner", data);
    }
    update(data) {
        return http.post(`/Banner/PutBanner`, data);
    }
    delete(id) {
            return http.delete(`/Banner/${id}`);
        }
        //   deleteAll() {
        //     return http.delete(`/tutorials`);
        //   }
        //   findByTitle(title) {
        //     return http.get(`/tutorials?title=${title}`);
        //   }
}
export default new BannerService();