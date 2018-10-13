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
        case actions.LOAD_RANDOM_ITEM: {
            return Object.assign({}, state, {
                selectedItem: action.beer[0],
                modalState: action.modal
            });
        }
        default:{
            break;
        }
    }
    return state;
}