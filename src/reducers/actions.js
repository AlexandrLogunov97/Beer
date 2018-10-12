export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_RANDOM_ITEM = 'LOAD_RANDOM_ITEM';
export const LOAD_FILTERED_ITEMS = 'LOAD_FILTERED_ITEMS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const FILTER_VALUE_CHANGE = 'FILTER_VALUE_CHANGE';
export const CLEAR_FILTER='CLEAR_FILTER';
export const CREATE_FILTER='CREATE_FILTER';
export const SET_PAGE='SET_PAGE';

export const loadItems = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: SET_PAGE, page: page });

        const state = getState();

        dispatch({ type: CREATE_FILTER });
        fetch(`https://api.punkapi.com/v2/beers?page=${state.pivasik.page}${state.pivasik.filterQuery}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: LOAD_ITEMS, items: data, canPrev: true, canNext: true })
            })
    }
}

/*export const loadItems = (page) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: LOAD_ITEMS, items: data })
        })
}*/

/*export const loadFilteredItems = dispatch => {
    fetch(`https://api.punkapi.com/v2/beers?abv_gt=`)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: LOAD_FILTERED_ITEMS, items: data })
        })
}*/
export const loadFilteredItems = (page,filter) => {
    return (dispatch) => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}${filter}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: LOAD_FILTERED_ITEMS, items: data, canPrev: true, canNext: true })
                console.log(data);
            })
    }
}
export const loadRandomItem = dispatch => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => {
            dispatch({ type: LOAD_RANDOM_ITEM, item: data })
        })
}