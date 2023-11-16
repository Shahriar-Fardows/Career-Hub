// const getJobId = () =>{
//     const storJobId = localStorage.getItem('job-id')
//     if(storJobId){
//         return JSON.parse(storJobId);
//     }
// }

// const saveJobId = id => {
//  const storJobId = getJobId();
//  const cake = storJobId.find(Id => Id === id);
//  if(!cake){
//     storJobId.push(id);
//     localStorage.setItem('job-id', JSON.stringify(storJobId));
//  }
// }

// export {getJobId , saveJobId}


// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('job-id', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('job-id', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-id');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('job-id');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}