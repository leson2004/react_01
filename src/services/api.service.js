import axios from "./axios.customize";
const createUserApi = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data); // phải luôn nhớ để lấy được giá trị của 1 hàm , thì hàm đó phải có return
  // , để khi gọi hàm sẽ nhận được giá trị , nếu không có sẽ trả về undefined , nếu khi có lỗi về undefined , phải nhớ return
};
const updateUserApi = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id: _id,
    fullName: fullName,

    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};
const fetchAllUserAPI = () => {
  const URL_BACKEND = "/api/v1/user";

  return axios.get(URL_BACKEND);
};
const deleteUserApi = (_id) => {
  const URL_BACKEND = `/api/v1/user/${_id}`;
  return axios.delete(URL_BACKEND);
};

export { createUserApi, updateUserApi, fetchAllUserAPI, deleteUserApi };
