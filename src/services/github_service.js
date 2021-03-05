const BASE_URL = "https://api.github.com";
const { REACT_APP_GITHUB_USERNAME, REACT_APP_GITHUB_PASSWORD } = process.env;

async function apiFetch(...args) {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
}

function GithubService() {
  if (!GithubService.instance) {
    this.token = btoa(
      `${REACT_APP_GITHUB_USERNAME}:${REACT_APP_GITHUB_PASSWORD}`
    );
    GithubService.instance = this;
  }
  return GithubService.instance;
}

GithubService.prototype.profile = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${this.token}`,
    },
  });
};

export default GithubService;
