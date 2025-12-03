import Airtable from "airtable";

// Get environment variables with fallback
const apiKey = process.env.NEXT_APP_AUTH_TOKEN || process.env.AIRTABLE_API_KEY;
const baseId = process.env.NEXT_APP_BASE_ID;
const experienceId = process.env.NEXT_APP_EXPERIENCE_ID;
const projectsId = process.env.NEXT_APP_PROJECTS_ID;

if (!apiKey) {
  throw new Error("An API key is required to connect to Airtable. Please set NEXT_APP_AUTH_TOKEN or AIRTABLE_API_KEY environment variable.");
}

if (!baseId) {
  throw new Error("Airtable Base ID is required. Please set NEXT_APP_BASE_ID environment variable.");
}

const base = new Airtable({
  apiKey: apiKey,
}).base(baseId);

const experience = experienceId ? base(experienceId) : null;
const projects = projectsId ? base(projectsId) : null;

export async function getExperience() {
  if (!experience) {
    console.warn("NEXT_APP_EXPERIENCE_ID not set, returning empty array");
    return [];
  }
  try {
    const records = await experience.select({}).all();
    return records.map((record) => ({
      fields: record.fields,
    }));
  } catch (error) {
    console.error("Error fetching experience:", error);
    return [];
  }
}

export async function getProjects() {
  if (!projects) {
    console.warn("NEXT_APP_PROJECTS_ID not set, returning empty array");
    return [];
  }
  try {
    const records = await projects.select({}).all();
    return records.map((record) => ({
      fields: record.fields,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}



