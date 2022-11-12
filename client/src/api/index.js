import axios from 'axios';

const url = 'http://localhost:5000/notes';

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const fetchNoteBySearch = (searchQuery) => axios.get(
    `${url}/search?searchQuery=${searchQuery.searchName||'none'}&${searchQuery.searchClass||'none'}&${searchQuery.searchType||'none'}`);