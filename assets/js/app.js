function GetCategoryData(callback) {
    const categoryAPIURL = 'https://dummyjson.com/products/categories'

    fetch(categoryAPIURL)
    .then(CategoryResponse => {
        if(!CategoryResponse.ok){
            throw new Error ('failed to fetch data. Status: ' + CategoryResponse.status);
        }

        return CategoryResponse.json();
    })

    .then(data => {
        console.log('fetched category data:', data);
        callback(data);
    })

    .catch (error => {
        console.error('Error fetching category data:', error.message);
    })
}

function ReceiveCategoryData(data) {
    let myCategories = data
}

GetCategoryData(ReceiveCategoryData);

function GetProductData(callback) {
    const productAPIURL = 'https://dummyjson.com/products?limit=0'

    fetch(productAPIURL)
    .then(productResponse => {
        if(!productResponse.ok){
            throw new Error ('failed to fetch data. Status: ' + productResponse.status);
        }

        return productResponse.json();
    })  

    .then(data => {
        console.log('fetched product data:', data);
        callback(data);
    })

    .catch (error => {
        console.error('Error fetching category data:', error.message);
    })
}

function ReceiveProductData(data){
    let MyProducts = data.products
    let MyFeaturedProducts = [MyProducts[Math.floor(Math.random() * 101)], MyProducts[Math.floor(Math.random() * 101)], MyProducts[Math.floor(Math.random() * 101)]]
    console.log(MyFeaturedProducts);
}


GetProductData(ReceiveProductData);