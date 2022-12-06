import * as api from '../api';

// Action Creators
export const getUploads = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUploads();
        const action = { type:'FETCH_ALL', payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
}

export const createUpload = (upload) => async (dispatch) => {
    // TODO
}