import { GET_RECIPIE } from "./types";
import axios from "axios";

export const getRecipe = (search, from, to) => async dispatch => {
  await axios
    .get(
      `https://api.edamam.com/search?q=${search}&app_id=74f997d4&app_key=b8384559e563634f50181ae4a417cd40&from=11&to=20`
    )
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_RECIPIE,
        payload: res.data
      });
    });
};
