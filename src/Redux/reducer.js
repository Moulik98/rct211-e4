import * as types from "./actionTypes"


const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COUNTRIES_REQUEST: {
      return { ...state, isLoading: true, 
        isError: false };
    }
    case types.GET_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_COUNTRIES_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case types.UPDATE_COUNTRY_REQUEST: {
      return { ...state };
    }
    case types.UPDATE_COUNTRY_SUCCESS: {
      const newBooks = state.countries.map((item) =>
        item.id === payload.id ? payload : item
      );

      return { ...state, countries: newBooks };
    }
    case types.UPDATE_COUNTRY_FAILURE: {
      return { ...state };
    }

    case types.DELETE_COUNTRY_SUCCESS:
      return {countries : state.countries.filter((item)=> item.id!==payload)};
    default: 
      return state;
    
}
}