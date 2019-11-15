let initialState = { jwt: "" };

function reducer(state = initialState, action){

    switch(action.type) {
        case 'MODIFY_JWT' : {
              return {
                  ... state, 
                  jwt: action.payload
              }
        }
        default:
             return state;
    }
}

export default reducer;
