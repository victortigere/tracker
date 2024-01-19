import axios from 'axios';

const BASE_URL = 'http://localhost:8001';

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/projects`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}