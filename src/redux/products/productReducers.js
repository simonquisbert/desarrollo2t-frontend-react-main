import { SET_PRODUCTS } from "./productTypes";

const initialState = {
    products : []
};

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productReducers;