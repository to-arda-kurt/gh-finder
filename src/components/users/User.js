import React, { useEffect, useContext } from "react";
import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hirable: {""}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            className="round-img"
            style={{ width: "150px" }}
            src={avatar_url}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a className="btn btn-dark my-1" href={html_url}>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  {" "}
                  <strong>Username:</strong> {login}
                </>
              )}
            </li>
            <li>
              {" "}
              {company && (
                <>
                  {" "}
                  <strong> Username:</strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  {" "}
                  <strong>Username:</strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {followers} </div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Publig Gissts: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
