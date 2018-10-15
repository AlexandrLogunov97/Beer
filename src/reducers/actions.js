export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_RANDOM_ITEM = 'LOAD_RANDOM_ITEM';
export const LOAD_FILTERED_ITEMS = 'LOAD_FILTERED_ITEMS';
export const FILTER_VALUE_CHANGE = 'FILTER_VALUE_CHANGE';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const CREATE_FILTER = 'CREATE_FILTER';
export const SET_PAGE = 'SET_PAGE';
export const SHOW_BEER = 'SHOW_BEER';
export const HIDE_BEER = 'HIDE_BEER';

export const loadItems = (page, mode, options) => {
    return (dispatch, getState) => {
        if(page>0)
         dispatch({ type: SET_PAGE, page: page });
        if (mode === LOAD_FILTERED_ITEMS)
            dispatch({ type: CREATE_FILTER });
        if (options===CLEAR_FILTER)
            dispatch({ type: CLEAR_FILTER });
        const state = getState();
        fetch(`https://api.punkapi.com/v2/beers?page=${state.pivasik.page}${state.filter.filterQuery}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: mode, items: data, canPrev: true, canNext: true })
            })
    }
}
export const loadRandomItem = dispatch => {
    return dispatch => fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(data => {
            dispatch({ type: LOAD_RANDOM_ITEM, beer: data, modal: true })
        });
}