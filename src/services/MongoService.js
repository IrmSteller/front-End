import Axios from 'axios';

const RESOURCE_NAME = (`http://localhost:3000/book/`);
//const RESOURCE_NAME = (`http://192.168.178.47:3000/book/`);
export default {
    getAll(){
        try {
            return Axios.get(RESOURCE_NAME + 'getAll');
        } catch (error) {
            console.log(error);
        }        
    },

    addBook(n, p, q){
        try {
            return Axios.post(RESOURCE_NAME + 'add', {
                name: n,
                price: p,
                quantity: q
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteBook(id){
        try {
            console.log(id);
            Axios.delete(`${RESOURCE_NAME}${id}`);

        } catch (error) {
            console.log(error);
        }
    }

};