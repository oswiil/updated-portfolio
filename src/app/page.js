import github from "@/utils/github";

import styles from "./page.module.css";
import Sketchfab from "@/components/sketchfabIframes";
import AnimationCli from "@/components/animationcli";

import dino from "@/assets/dino.json";
import education from "@/assets/education.json";
import experience from "@/assets/experience.json";
import projects from "@/assets/Projects.json";
import CardComponent from "@/components/card";
import fs from "fs";
import Repos from "@/assets/repos.json";
import Progress from "@/components/progress";
const style = {
  height: "20%",
};
const style2 = {
  height: "15%",
};

const style3 = {
  width: "250px",
  height: "250px",
  alignItems: "center",
  alignContent: "center",
};
async function getGithubProfileData() {
  const { data, error } = await github.get(`/users/oswiil`);
  if (error) throw error;

  return data;
}

async function getGithubReposData() {
  // Obtener lista de repositorios de GitHub
  const { data, error } = await github.get(`/users/oswiil/repos`);

  const jsonData = JSON.stringify(data);
  const filePath = "src/assets/repos.json";
  fs.writeFileSync(filePath, jsonData, "utf-8");

  // data.map(async (repo) => {
  //   const languages = await github.get(repo.languages_url);
  // });
}
// async function getGithubLanguagesRepo(name) {
//   const { data, error } = await github.get(`/repos/oswiil/${name}/languages`);
//   if (error) throw error;
//   // return <div>{data}</div>;
// }

export default async function Page() {
  // Render data...
  // const linkedinData = await getLinkedinData();
  const repos = getGithubReposData();
  // const user = await getGithubProfileData();
  return (
    <>
      <header></header>
      <main className={styles.main}>
        <div className="columns is-desktop p-6 is-multiline">
          <div className="column has-text-centered">
            <AnimationCli data={dino} styles={style3} />
            <h5 className="title has-text-centered">Desarrollador Web</h5>
            <div className="textarea">Hola asasa</div>
          </div>
        </div>
        <div className="columns is-desktop p-6 is-multiline">
          <div className="column is-half">
            <AnimationCli data={education} styles={style3} />
            <h5 className="title has-text-centered">Education</h5>
            <CardComponent
              className="textarea"
              title={"CFGS-Digital Artist"}
              subtitle={"Audiovisuales, Animacion 2D 3D"}
              text={""}
              imageUrl={""}
            />
            <CardComponent
              title={"CFGS-DAM"}
              subtitle={"Desarrollo de Aplicaciones Multiplataforma"}
              text={""}
              imageUrl={""}
            />
          </div>
          <div className="column is-half">
            <AnimationCli data={experience} styles={style3} />
            <h5 className="title has-text-centered">Experience</h5>

            <CardComponent
              title={"Desarrollador web"}
              subtitle={"Consultor analista BaseTIS S.L."}
              text={""}
              imageUrl={""}
            />
            <CardComponent
              title={"Desarrollador .NET"}
              subtitle={"Programador Junior Indra S.A."}
              text={""}
              imageUrl={""}
            />
          </div>
          <div className="column is-offset">
            <div className="center">
              <AnimationCli data={projects} styles={style3}>
                s
              </AnimationCli>
            </div>
            <h5 className="title has-text-centered">Projects</h5>
            <div className="repos">
              <div className="columns is-multiline">
                {repos.map(async (repo) => {
                  // const languages = await github.get(repo.languages_url);
                  return (
                    <div key={repo.id} className="column is-one-quarter">
                      <div className="box">
                        <p className="title">{repo.name}</p>
                        <li>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {repo.description}
                            <Progress languages={repo.languages_url}></Progress>
                            {/* {languages} */}
                          </a>
                        </li>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="columns is-desktop">
          <div className="column">
            <div className="profile">
              <img
                src={user.avatar_url || null}
                alt={`${user.login}'s avatar`}
              />
            </div>
          </div>
          <div className="column">
            <h2>{user.login}</h2>
            <p>Followers: {user.followers}</p>
            <p>Repositories: {user.public_repos}</p>
          </div>
        </div> */}

        <div className="columns is-desktop">
          <div className="column">
            <Sketchfab />
          </div>
          <div className="column">
            <Sketchfab />
          </div>
        </div>

        <h1>GitHub Profile Preview</h1>
      </main>
    </>
  );
}
