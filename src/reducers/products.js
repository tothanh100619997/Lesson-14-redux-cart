var initialState = [
    {
        id: 1,
        image: 'https://cdn.tgdd.vn/Products/Images/42/69783/iphone-6-plus-16gb-64gb128gb-400x450.png',
        name: 'Iphone 6 plus',
        price: 500,
        discription: 'sản phẩm được apple sản xuất',
        inventory: 10,
        rating: 4

    },
    {
        id: 2,
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        name: 'Iphone X ',
        price: 800,
        discription: 'sản phẩm được apple sản xuất',
        inventory: 6,
        rating:5

    },
    {
        id: 3,
        image: 'https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png',
        name: ' galaxy s8 ',
        price: 400,
        discription: 'sản phẩm được samsung sản xuất',
        inventory: 3,
        rating:3

    }
]
var products = (state=initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}
export default products;
