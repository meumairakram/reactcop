/* 
====== ACTION TYPES =========
*/
export const CHANGE_MESSAGE_REQUEST = '/app/homepage/CHANGE_MESSAGE_REQUEST';
export const CHANGE_MESSAGE_SUCCESS = '/app/homepage/CHANGE_MESSAGE_SUCCESS';
export const CHANGE_MESSAGE_ERROR = '/app/homepage/CHANGE_MESSAGE_ERROR';





/* 
====== Reducer =========
*/

const initialState = {
    welcomeMessage:'Hello World',
    loading:false
};

export const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        
        case 'increment': 

            break;
        
        case CHANGE_MESSAGE_REQUEST:
            return {...state, ...action.payload}

        case CHANGE_MESSAGE_SUCCESS:
            return {...state, ...action.payload}

        default:
            return state;


    
    }




}





/* 
====== ACTION CREATORS =========
*/


export const changeMessageRequest = (payload) => {

    return {
        type:CHANGE_MESSAGE_REQUEST,
        payload: {
            loading:payload
        }
    }


}




export const changeMessageSuccess = (payload) => {

    return {
        type:CHANGE_MESSAGE_SUCCESS,
        payload: {
            welcomeMessage:payload
        }
    }


}




/* 
====== THUNKS =========
*/


export const changeMessage = (message) => {

    return (dispatch) => {

        dispatch(changeMessageRequest(true))


        setTimeout(() => {

            dispatch(changeMessageSuccess(message));

        },3500);

    }


}