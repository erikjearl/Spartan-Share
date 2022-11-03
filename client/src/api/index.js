import axios from 'axios';

const url = 'http://localhost:5000/uploads';

export const fetchUploads = () => axios.get(url);