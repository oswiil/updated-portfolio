import { RestliClient } from "linkedin-api-client";

const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const API_VERSION = process.env.LINKEDIN_API_VERSION;

const restliClient = new RestliClient();

const getData = () =>
  restliClient.get({
    resourcePath: "/me",
    versionString: API_VERSION,
    accessToken: ACCESS_TOKEN,
  });

export default {
  getData,
};
