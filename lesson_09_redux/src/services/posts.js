import axios from 'axios';
const API = `https://65bbb81852189914b5bcf0b0.mockapi.io/posts`;

const todos = {
  get: (id) => axios(API + (id ? `/${id}` : ``)).then(({data}) => data),
  delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
  put: (id, obj) => axios.put(API + `/${id}`, obj).then(({data}) => data),
  post: (obj) => axios.post(API, obj).then(({data}) => data)
};

export default todos;