import * as api from '../api';

// action creators
export const getNotes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNotes();
        const action = { type:'FETCH_ALL', payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
}

export const createNote = (note) => async (dispatch) => {
    try{
        const { data } = await api.createNote(note)
        const action = { type:'CREATE', payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}