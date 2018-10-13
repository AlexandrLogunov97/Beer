import * as actions from './actions'

const initialState = {
    items: [],
    page: 1,
    canPrev: true,
    canNext: true
}
export default function pivasik(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_ITEMS: {
            return Object.assign({}, state, {
                items: action.items,
                canPrev: true,
                canNext: true
            });
        }
        case actions.LOAD_FILTERED_ITEMS: {
            return Object.assign({}, state, {
                items: action.items,
                canPrev: true,
                canNext: true
            });
        }
        case actions.SET_PAGE: {
            return Object.assign({}, state, {
                page: action.page,
                canPrev: false,
                canNext: false
            });
        }
        default: {
            break;
        }
    }
    return state;
}