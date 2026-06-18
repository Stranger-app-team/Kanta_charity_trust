import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for logging
apiClient.interceptors.request.use((config) => {
  console.log(`[API Request] ${config.method.toUpperCase()} ${config.baseURL}${config.url}`, config.data ? config.data : '');
  return config;
}, (error) => {
  console.error('[API Request Error]', error);
  return Promise.reject(error);
});

// Add a response interceptor for logging
apiClient.interceptors.response.use((response) => {
  console.log(`[API Response] ${response.config.method.toUpperCase()} ${response.config.baseURL}${response.config.url} - Status: ${response.status}`, response.data);
  return response;
}, (error) => {
  if (error.response) {
    console.error(`[API Response Error] ${error.config.method.toUpperCase()} ${error.config.baseURL}${error.config.url} - Status: ${error.response.status}`, error.response.data);
  } else {
    console.error('[API Response Error]', error.message);
  }
  return Promise.reject(error);
});

// Items API
export const getItems = async () => {
  try {
    const response = await apiClient.get('/api/items');
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await apiClient.post('/api/items', itemData);
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Children API
export const registerChild = async (childData) => {
  try {
    const response = await apiClient.post('/api/children', childData);
    return response.data;
  } catch (error) {
    console.error('Error registering child:', error);
    throw error;
  }
};

export const getChildren = async () => {
  try {
    const response = await apiClient.get('/api/children');
    return response.data;
  } catch (error) {
    console.error('Error fetching children:', error);
    throw error;
  }
};
