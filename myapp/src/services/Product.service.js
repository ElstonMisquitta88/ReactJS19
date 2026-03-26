import Axios from 'axios';

function getAllProducts() {

    return Axios.get('https://localhost:7206/api/ProductApi/getall')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error;
        });
}


function addProduct(productToAdd) {
    return Axios.post('https://localhost:7206/api/ProductApi/add', productToAdd,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => response.data)
        .catch(error => {
            console.error('Error adding products:', error);
            throw error;
        });
}


function deleteProduct(id) {
    return Axios.delete(`https://localhost:7206/api/ProductApi/delete/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting products:', error);
            throw error;
        });
}

const ProductService = {
    getAllProducts,
    addProduct,
    deleteProduct
}

export default ProductService;