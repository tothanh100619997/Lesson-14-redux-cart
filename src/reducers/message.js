
import * as Messages from './../constans/Message';
import * as Types from './../constans/ActionType';

var initialState =Messages.MSG_WELLCOM;
const message = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.CHANGE_MESSAGE:{
            return action.message;
        }
        default: return state;
    }
}

export default message;
