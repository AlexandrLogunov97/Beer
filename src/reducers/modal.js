import * as actions from './actions';
const initialState = {
    selectedItem: {},
    modalState: false,
}
export default function modal(state = initialState, action) {
    switch (action.type) {
        case actions.SHOW_BEER: {
            return Object.assign({}, state, {
                selectedItem: action.beer,
                modalState: true
            });
        }
        case actions.HIDE_BEER: {
            return Object.assign({}, state, {
                modalState: false
            });
        }
        default:{
            break;
        }
    }
}