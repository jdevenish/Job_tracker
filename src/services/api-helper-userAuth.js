import axios from 'axios'


const api = axios.create({
    baseURL: 'https://ga-job-tracker-backend.herokuapp.com/api/'
});

export const validToken = async (token) => {
    const resp =  await api.get('/checkToken', {
        params: {
            token: token
        }});
    return resp.data
};

/*======== Format of user ========================
    {
      "email": "{{userName}}",
      "password": "{{password}}"
    }
 */
export const registerNewUser = async (user) => {
    const resp  = await api.post(`/register`, user);
    return resp.data
};

/*======== Format of user ========================
    {
      "email": "{{userName}}",
      "password": "{{password}}"
    }
 */
export const authenticateUser = async (user) => {
    const resp = await api.post('/authenticate', user);
    console.log("authenticate user response: ", resp);
    return resp.data
};

