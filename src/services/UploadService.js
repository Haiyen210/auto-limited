import http from "../http-common";
class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return http.post("/FileInFo/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }
    getFiles() {
        return http.get("/FileInFo");
    }
}
export default new UploadFilesService();