export const UPDATE_SARCH = 'UPDATE_SARCH';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const updateSearchResults = (data) => {
    return { type: SEARCH_RESULTS, data: data };
};

export const updateSearchQuery = (data) => {
    return { type: UPDATE_QUERY, data: data };
};

export const setLoading = (value) => {
    return { type: SET_LOADING, value: value };
};

export const setError = (value) => {
    return { type: SET_ERROR, value: value };
};