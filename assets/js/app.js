function GetCategoryData(callback) {
    const categoryAPIURL = 'https://dummyjson.com/products/categories'

    fetch(categoryAPIURL)
    .then(CategoryResponse => {
        return CategoryResponse.json();
    })

    .then(data => {
        console.log('fetched category data:', data);
    })
}

function ReceiveCategoryData(data) {
    console.log('Processing data:', data);
}

GetCategoryData(ReceiveCategoryData);