import axios from 'axios';

const url = 'http://localhost:5000/notes';

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const fetchNoteBySearch = (searchQuery) => axios.get(
    `${url}/search?searchQuery=${searchQuery.searchName||'none'}&classCode=${searchQuery.searchClass||'none'}&fileType=${searchQuery.searchType||'none'}`);