const INIT_STATE ={
    carts:[]  //data store
};

export const cartreducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item)=> item.key === action.payload.key);

        if(ItemIndex >= 0){
            state.carts[ItemIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

        case "REMOVE_CART":
            const data = state.carts.filter((el)=>el.key !== action.payload); 
            return {
                ...state,
                carts:data
            }

        case "REMOVE_ONE":
            const ItemIndex_dec = state.carts.findIndex((item)=> item.key === action.payload.key);
   
            if(state.carts[ItemIndex_dec].qnty >= 1){
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1
                // console.log([...state.carts,dltitems]);
                return {
                    ...state,
                    carts:[...state.carts,dltitems]
                }
            }else if(state.carts[ItemIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.key === action.payload); //!==

                return {
                    ...state,
                    carts:data
                }
            }
        break
        default:
            return state
    }
}