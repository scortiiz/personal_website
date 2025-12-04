import Airtable from "airtable";

const apiKey = (process.env.NEXT_APP_AUTH_TOKEN || process.env.AIRTABLE_API_KEY)?.trim();
const baseId = process.env.NEXT_APP_BASE_ID?.trim();

const experienceTableName = process.env.NEXT_APP_EXPERIENCE_TABLE_NAME?.trim() || 'Experience';
const projectsTableName = process.env.NEXT_APP_PROJECTS_TABLE_NAME?.trim() || 'Projects';

if (!apiKey) {
  throw new Error("An API key is required to connect to Airtable. Please set NEXT_APP_AUTH_TOKEN or AIRTABLE_API_KEY environment variable.");
}

if (!baseId) {
  throw new Error("Airtable Base ID is required. Please set NEXT_APP_BASE_ID environment variable.");
}

let base;
try {
  base = new Airtable({
    apiKey: apiKey,
  }).base(baseId);
} catch (error) {
  console.error('Error initializing Airtable base:', error);
  throw error;
}

const experience = base(experienceTableName);
const projects = base(projectsTableName);

export async function getExperience() {
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

