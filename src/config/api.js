import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api`,
});
// utilização de const api para acessar api baseado em ambiente. Facilita entendimento

export default api;
