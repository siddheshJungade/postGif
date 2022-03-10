const AppReducer =  (state,action) => {
    switch(action.type){
        case 'ADD_POST':
                return {
                    posts: [action.payLoad, ...state.posts],
                }
        default : 
            return state;
    }

}
export default AppReducer;