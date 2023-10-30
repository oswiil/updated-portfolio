import github from "@/utils/github";

import styles from "./page.module.css";
import Sketchfab from "@/components/sketchfabIframes";
import AnimationCli from "@/components/animationcli";

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
// async function getGithubLanguagesRepo(name) {
//   const { data, error } = await github.get(`/repos/oswiil/${name}/languages`);
//   if (error) throw error;
//   // return <div>{data}</div>;
// }

export default async function Page() {
  // Render data...
  // const linkedinData = await getLinkedinData();
  const user = await getGithubProfileData();
  const repos = await getGithubReposData();
  return (
    <>
      <header></header>
      <main className={styles.main}>
        {/* <AnimationCli></AnimationCli> */}
        <div className="columns">
          <div className="column">
            <Sketchfab />
          </div>
          <div className="column">
            <div className="profile">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
              <h2>{user.login}</h2>
              <p>Followers: {user.followers}</p>
              <p>Repositories: {user.public_repos}</p>
            </div>
          </div>
          <div className="column">
            <div className="repos">
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
