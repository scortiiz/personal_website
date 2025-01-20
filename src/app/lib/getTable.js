const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.NEXT_APP_AUTH_TOKEN,
}).base(process.env.NEXT_APP_BASE_ID);

const experience = base(process.env.NEXT_APP_EXPERIENCE_ID);
const projects = base(process.env.NEXT_APP_PROJECTS_ID);

export async function getExperience() {
  const records = await experience.select({}).all();
  return records.map((record) => ({
    fields: record.fields,
  }));
}

export async function getProjects() {
  const records = await projects.select({}).all();
  return records.map((record) => ({
    fields: record.fields,
  }));
}



