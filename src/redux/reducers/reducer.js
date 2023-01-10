const INIT_STATE ={
    carts:[]  //data store
};

export const cartreducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_CART":
            return{
                ...state, //adding no.of items using these
                carts:[...state.carts,action.payload]
            }

            default:
                return state    //return default state

    }
}