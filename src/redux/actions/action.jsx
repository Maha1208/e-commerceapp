export const ADD = (item) =>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

// remove items
export const DLT = (key) => {
    return {
        type: "RMV_CART",
        payload: key
    }
}

// remove individual item

export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}

//include every item in product details

export const STORE_PRODUCT =(item) => {
    return{
        type:"STORE_PRODUCTS",
        payload:item
    }
}