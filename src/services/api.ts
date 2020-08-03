import { Platform } from 'react-native';
import axios from 'axios';

const url =
  Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://192.168.0.108:3333';

const api = axios.create({
  baseURL: url,
});

export default api;
