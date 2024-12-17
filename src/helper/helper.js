const shortenText = (text) => {
    return text.split(" ").slice(0, 3).join(" ");
}
const serarchProducts = (products,search) => {
    if (!search) return products;
    const serarchProducts = products.filter((p) => p.title.toLowerCase().includes(search));
    return serarchProducts;
}
const filterProducts = (products,category) => {
    if (!category) return products;
    const filterProducts = products.filter((p) => p.category===category);
    return filterProducts;
}
const createqueryObject = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const { category, ...rest } = currentQuery;
        return rest;
    }
    if (newQuery.search === "") {
        const { search, ...rest } = currentQuery;
        return rest;
    }
    return { ...currentQuery, ...newQuery };
}
const getInitialQuery = (searchParams) => {
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) query.category = category;
    if (search) query.search = search;
    return query;
    
}
const sumProducts = (products) => {
    const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    return { itemsCounter, total };
}
const productQuantity = (state, id) => {
    
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) return 0;
    else {
        return state.selectedItems[index].quantity;
    }
}

export {
    shortenText,
    serarchProducts,
    filterProducts,
    createqueryObject,
    getInitialQuery,
    sumProducts,
    productQuantity
};