import SHOP_DATA from "./shop.data";

const INITIAL_STATE={
    collections:SHOP_DATA
}

const shopReducer = (State=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return State;
    }
}
export default shopReducer;