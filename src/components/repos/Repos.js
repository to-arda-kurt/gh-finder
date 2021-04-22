import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

// repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)

const Repos = ({ repos }) => {
  console.log(repos);
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
