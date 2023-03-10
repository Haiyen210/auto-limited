import http from "../http-common";
class AccountUserService {

    getAll() {
        return http.get("/AccountUsers/getAll")
    }
    login(data) {
        return http.post("/AccountUsers/Login", data)
    }
    register(data) {
        return http.post("/AccountUsers", data)
    }
    profile(id) {
        return http.get(`/AccountUsers/${id}`)
    }
    editProfile(data) {
        return http.post(`/AccountUsers/${data.id}`, data)
    }
    sendEmail(email) {
        return http.post("/AccountUsers/SendEmail", email)
    }
    changePassword(data) {
        return http.post(`/AccountUsers/ChangePassword/${data.id}`, data.password)
    }
    getOrderDebit(id) {
        return http.get(`/AccountUsers/getOrderDebit/${id}`)
    }

}
export default new AccountUserService();