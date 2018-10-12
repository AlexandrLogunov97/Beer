import { LOAD_ITEMS, LOAD_FILTERED_ITEMS, LOAD_RANDOM_ITEM, PREV_PAGE, NEXT_PAGE,FILTER_VALUE_CHANGE,CLEAR_FILTER,CREATE_FILTER,SET_PAGE } from './actions'

const initialState = {
    items: [],
    page: 1,
    canPrev: true,
    canNext: true,
    filter: [],
    filterQuery:'',
    mode: 'items'
}
export default function pivasik(state = initialState, action) {

    switch (action.type) {
        case LOAD_ITEMS: {
            return Object.assign({}, state, {
                items: action.items,
                canPrev: true,
                canNext: true
            });
        }
        case LOAD_FILTERED_ITEMS: {
            return Object.assign({}, state, {
                items: action.items,
                canPrev: action.canPrev,
                canNext: action.canNext
            });
        }
        case LOAD_RANDOM_ITEM: {
            return action.randomItem;
        }
        case PREV_PAGE: {
            let page = state.page;
            if (page > 1)
                page--;
            return Object.assign({}, state, {
                page: page,
                canPrev: false,
                canNext: false
            });
        }
        case NEXT_PAGE: {

            let page = state.page;
            page++;
            return Object.assign({}, state, {
                page: page,
                canPrev: false,
                canNext: false
            });
        }
        case CLEAR_FILTER:{
            let values=[...state.filter];
            values[0]={
                name: 'abv_gt',
                value: ''
            };
            values[1]={
                name: 'abv_lt',
                value: ''
            };
            values[2]={
                name: 'ibu_gt',
                value: ''
            };
            values[3]={
                name: 'ibu_lt',
                value: ''
            };
            values[4]={
                name: 'ebc_gt',
                value: ''
            };
            values[5]={
                name: 'ebc_lt',
                value: ''
            };
            values[6]={
                name: 'beer_name',
                value: ''
            };
            values[7]={
                name: 'yeast',
                value: ''
            };
            values[8]={
                name: 'brewed_before',
                value: ''
            };
            values[9]={
                name: 'brewed_after',
                value: ''
            };
            values[10]={
                name: 'hops',
                value: ''
            };
            values[11]={
                name: 'malt',
                value: ''
            };
            values[12]={
                name: 'food',
                value: ''
            };
            return Object.assign({},state,{
                filter: values,
                mode: 'items'
            });
        }
        case FILTER_VALUE_CHANGE: {
            let values=[...state.filter];
            let element=values.find(x=> {return x.name===action.name? x: null});
            values[values.indexOf(element)].value=action.value;
            return Object.assign({}, state, {
               filter: values
            });
        }
        case CREATE_FILTER:{
            let filterQuery='';
            let filter=[...state.filter];
            filter.forEach(node=>{
                
                if(node.value)
                    filterQuery+=`&${node.name}=${node.value}`;
            });
            return Object.assign({},state,{
                filterQuery: filterQuery,
                mode: 'filter'
                
            });
        }
        case SET_PAGE:{
            return Object.assign({}, state,{
                page: action.page
            });
        }
    }
    return state;
}