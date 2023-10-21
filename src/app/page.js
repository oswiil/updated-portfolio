import github from "@/utils/github";

import styles from "./page.module.css";
import App from "@/components/animationcli";
import Sketchfab from "@/components/sketchfabIframes";

async function getGithubProfileData() {
  const { data, error } = await github.get(`/users/oswiil`);
  if (error) throw error;

  return data;
}

async function getGithubReposData() {
  // Obtener lista de repositorios de GitHub
  const { data, error } = await github.get(`/users/oswiil/repos`);
  if (error) throw error;

  return data;
}

export default async function Page() {
  // Render data...
  // const linkedinData = await getLinkedinData();
  const user = await getGithubProfileData();
  const repos = await getGithubReposData();
  return (
    <>
      <App />
      <header></header>
      <main className={styles.main}>
        <div className="columns">
          <div className="column">
            {" "}
            <Sketchfab />
          </div>
          <div className="column">
            <div classNameName="profile">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
              <h2>{user.login}</h2>
              <p>Followers: {user.followers}</p>
              <p>Repositories: {user.public_repos}</p>
            </div>
          </div>

          <div className="column">
            {" "}
            <div classNameName="repos">
              <h2>Repositories</h2>
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="column">4</div>
        </div>

        <h1>GitHub Profile Preview</h1>
      </main>
    </>
  );
}
