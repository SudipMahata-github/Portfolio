import axios from "axios"


const api = axios.create({
    // env
    baseURL: 'https://portfolio-backend-7v1z.onrender.com',
    headers: {
        'Content-Type': 'Application/json'
    }
})

export const login = async (data) => {
    return api.post('/users/login', data)
}
export const register = async (data) => {
    return api.post('/users/register', data)
}

export const getTestimonials = async (data) => {
    return api.get('/testimonials', data)
}

export const postTestimonial = async (data, token) => {
    console.log(token)
    return api.post('/testimonials', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
export const contact = async (data) => {
    return api.post('/contact', data)
}
