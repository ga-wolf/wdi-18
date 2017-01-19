import axios from 'axios';

const GithubHelpers = {
  getUserInfo: function (username) {
    const url = `https://api.github.com/users/${username}?client_id=8420fd99e9d49bb26114&client_secret=2a5b8f9fbde8942cd23e3de2523899746133ed3d`;
    return axios.get( url );
  },
  getUserRepos: function (username) {
    const url = `https://api.github.com/users/${username}/repos?client_id=8420fd99e9d49bb26114&client_secret=2a5b8f9fbde8942cd23e3de2523899746133ed3d`;
    return axios.get( url );
  }
};

export default GithubHelpers;
