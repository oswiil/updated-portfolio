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
  // const user = await getGithubProfileData();
  // const repos = await getGithubReposData();
  return (
    <>
      <header></header>
      <main className={styles.main}>
        <AnimationCli />
      </main>
    </>
  );
}
