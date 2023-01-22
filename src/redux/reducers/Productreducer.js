const INIT_STATE ={
    products:[]  //data store
};

export const Productreducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "STORE_PRODUCT":
            const ItemIndex = state.products.findIndex((item)=> item.key === action.payload.key);

    }
}