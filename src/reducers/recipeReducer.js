import { GET_RECIPIE } from "../actions/types";

const initialState = {
  recipe: "",
  count: "",
  from: "",
  to: "",
  currentPage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPIE:
      // console.log(action.payload.to);
      // console.log(((action.payload.from + action.payload.to )- 1) / 10);
      return {
        ...state,
        recipe: action.payload.hits,
        count: action.payload.count,
        from: action.payload.from,
        to: action.payload.to
        // currentPage: ((action.payload.from + action.payload.to )- 1) / 10
      };
    default:
      return state;
  }
}
