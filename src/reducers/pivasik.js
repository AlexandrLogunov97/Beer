import * as actions from './actions'

const initialState = {
    items: [],
    page: 1,
    canPrev: true,
    canNext: true,
    filter: [],
    filterQuery: '',
    selectedItem: {},
    modalState: false,
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
        case actions.CLEAR_FILTER: {
            let values = [...state.filter];
            values[0] = {
                name: 'abv_gt',
                value: ''
            };
            values[1] = {
                name: 'abv_lt',
                value: ''
            };
            values[2] = {
                name: 'ibu_gt',
                value: ''
            };
            values[3] = {
                name: 'ibu_lt',
                value: ''
            };
            values[4] = {
                name: 'ebc_gt',
                value: ''
            };
            values[5] = {
                name: 'ebc_lt',
                value: ''
            };
            values[6] = {
                name: 'beer_name',
                value: ''
            };
            values[7] = {
                name: 'yeast',
                value: ''
            };
            values[8] = {
                name: 'brewed_before',
                value: ''
            };
            values[9] = {
                name: 'brewed_after',
                value: ''
            };
            values[10] = {
                name: 'hops',
                value: ''
            };
            values[11] = {
                name: 'malt',
                value: ''
            };
            values[12] = {
                name: 'food',
                value: ''
            };
            return Object.assign({}, state, {
                filter: values,
                filterQuery: ''
            });
        }
        case actions.FILTER_VALUE_CHANGE: {
            let values = [...state.filter];
            let element = values.find(x => { return x.name === action.name ? x : null });
            values[values.indexOf(element)].value = action.value;
            return Object.assign({}, state, {
                filter: values
            });
        }
        case actions.CREATE_FILTER: {
            let filterQuery = '';
            let filter = [...state.filter];
            filter.forEach(node => {

                if (node.value)
                    filterQuery += `&${node.name}=${node.value}`;
            });
            if (filterQuery === '&')
                filterQuery = '';
            return Object.assign({}, state, {
                filterQuery: filterQuery,
                page: 1
            });
        }
        case actions.SET_PAGE: {
            return Object.assign({}, state, {
                page: action.page,
                canPrev: false,
                canNext: false
            });
        }
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
            console.log(action.beer);
            return Object.assign({}, state, {
                selectedItem: action.beer[0],
                modalState: action.modal
            });
        }
        default: {
            break;
        }
    }
    return state;
}