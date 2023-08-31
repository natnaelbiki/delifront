import axios from 'axios';

class SupplierDataService{
	getAll(token){
		return axios.get('url')
	}

	login(data){
		return axios.post("http://127.0.0.1:8000/api/login/", data);
	}

	signup(data){
		return axios.post("http://127.0.0.1:8000/api/signup/", data)
	}
}

export default new SupplierDataService();