const initialState = {
    words: []
  };
  
  export default function dictionaryReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_WORD':
        return {
          ...state,
          words: [...state.words, action.payload]
        };
      case 'DELETE_WORD':
        return {
          ...state,
          words: state.words.filter(word => word.esp !== action.payload)
        };
      default:
        return state;
    }
  }
  