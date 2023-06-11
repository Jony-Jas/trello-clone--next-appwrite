import { log } from "console";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-y4aDr8YYvqM5Wp3chMJwo0qX",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default openai;