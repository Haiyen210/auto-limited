import http from "../http-common";
class DepartmentService {
    getAll() {
        return http.get("/Departments");
    }
    get(id) {
        return http.get(`/Departments/${id}`);
    }
    create(data) {
        return http.post("/Departments", data);
    }
    update(data) {
        return http.put(`/Departments/${data.id}`, data);
    }
    delete(id) {
        return http.delete(`/Departments/${id}`);
    }


}
export default new DepartmentService();