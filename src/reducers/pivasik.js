import * as actions from './actions'

const initialState = {
    items: [],
    page: 1,
    canPrev: false,
    canNext: true
}
export default function pivasik(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_ITEMS: {
            let canPrev=state.page===1?false:true;
            return Object.assign({}, state, {
                items: action.items,
                canPrev: canPrev,
                canNext: true
            });
        }
        case actions.LOAD_FILTERED_ITEMS: {
            let canPrev=state.page===1?false:true;
            return Object.assign({}, state, {
                items: action.items,
                canPrev: canPrev,
                canNext: true
            });
        }
        case actions.SET_PAGE: {
            let canPrev=action.page===1?false:true;
            return Object.assign({}, state, {
                page: action.page,
                canPrev: canPrev,
                canNext: false
            });
        }
        default: {
            break;
        }
    }
    return state;
}