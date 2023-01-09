import http from "../http-common";
class OrderDetailService{
    get(id){
        return http.get(`/OrderDetails/${id}`);
    }
    update(data){
        return http.post(`/OrderDetails/${data.id}`,data);
    }
    delete(id){
        return http.delete(`/OrderDetails/${id}`);
    }
}