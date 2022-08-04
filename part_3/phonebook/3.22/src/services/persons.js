import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const createNew = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then((response) => response.data)
}

const updateExisting = (personId, newPerson) => {
    const request = axios.put(`${baseUrl}/${personId}`, newPerson)
    return request.then((response) => response.data)
}

const deletePerson = (personId) => {
    const request = axios.delete(`${baseUrl}/${personId}`)
    return request
}

export default { getAll, createNew, updateExisting, deletePerson }