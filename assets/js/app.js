function GetCategoryData(callback) {
    const categoryAPIURL = 'https://dummyjson.com/products/categories'

    fetch(categoryAPIURL)
    .then(CategoryResponse => {
        return CategoryResponse.json();
    })

    .then(data => {
        console.log('fetched category data:', data);
        callback(data);
    })
}

GetCategoryData(ReceiveCategoryData);

function GetProductData(callback) {
    const productAPIURL = 'https://dummyjson.com/products'

    fetch(productAPIURL)
    .then(productResponse => {
        return productResponse.json();
    })

    .then(data => {
        console.log('fetched product data:', data);
        callback(data);
    })
}

GetProductData(ReceiveProductData);