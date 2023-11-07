export const getProductListing = async () => {
    try {
        const data = await fetch("https://fakestoreapi.com/products/").then(response => response.json());

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    };
};
