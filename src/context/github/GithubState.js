import { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //SEARCH USERS
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data,
    });
  };

  //GET USER

  //GET REPOS

  //CLEAR USERS

  //SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider>
      value=
      {{
        users: state.users,
        user: state.user,
        repos: state.users,
        loading: state.loading,
        searchUsers,
      }}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
