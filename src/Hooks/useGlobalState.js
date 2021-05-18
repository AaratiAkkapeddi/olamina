import { useReducer } from 'react'

const initialState = {
  pageMode: "",
  popupClosed: false,
  books: "",
  about: {
    copy: "",
  },
  research: {
    copy: "",
  },
  credits: "",
  categories: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "set-books":
      return {
        ...state,
        books: action.books
      }
    case "set-author":
      return {
        ...state,
        author: action.name
      }
    case "set-reading":
      return {
        ...state,
        reading: action.name
      }
    case "set-categories":
      return {
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}

function useGlobalState() {
  return useReducer(reducer, initialState);
}

export default useGlobalState;