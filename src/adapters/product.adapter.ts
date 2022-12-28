export const createProductAdapter = (product: any) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    images: product.images,
    category: product.category
})