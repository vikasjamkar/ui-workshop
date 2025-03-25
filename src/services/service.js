import axios from "axios";
const BASE_URL = "https://ui-api-1.onrender.com";


export const getStudentsList = async () => {
    const res = await axios.get(`${BASE_URL}/getstudent`);
    return res;
}

export const fillStudent = async (payload) => {
    const res = await axios.post(`${BASE_URL}/add`, payload)
    return res;
}

export const updateStudent = async (id,payload) => {
    const res = await axios.put(`${BASE_URL}/update/${id}`,payload)
    return res;
}

export const deleteStudent = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete/${id}`)
    return res;
}