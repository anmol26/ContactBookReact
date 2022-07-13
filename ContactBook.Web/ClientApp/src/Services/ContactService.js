
import axios from 'axios';

export const post = (person) => {
    axios.post("https://localhost:44356/api/contact/Create", person)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        }); 
};

export const del = (deleteId) => {

    axios.delete('https://localhost:44356/api/contact/Delete?contactId=' + deleteId)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

export const update = (person) => {
    axios.patch('https://localhost:44356/api/contact/Update', person)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export const get = () => {
    return axios.get("https://localhost:44356/api/contact/Get");
}