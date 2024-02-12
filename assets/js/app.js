function GetCategoryData() {
    const categoryAPIURL = 'https://dummyjson.com/products/categories'

    fetch(categoryAPIURL)
    .then(CategoryResponse => {
        return CategoryResponse.json
    })

    .then(data => {
        console.log('fetched category data:', data);
    })
}

GetCategoryData();