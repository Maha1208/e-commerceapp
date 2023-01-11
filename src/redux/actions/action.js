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