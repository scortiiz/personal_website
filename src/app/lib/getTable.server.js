import Airtable from "airtable";

// Get environment variables with fallback and trim whitespace
const apiKey = (process.env.NEXT_APP_AUTH_TOKEN || process.env.AIRTABLE_API_KEY)?.trim();
const baseId = process.env.NEXT_APP_BASE_ID?.trim();
// Use table names instead of IDs - these can be overridden via env vars if needed
const experienceTableName = process.env.NEXT_APP_EXPERIENCE_TABLE_NAME?.trim() || 'Experience';
const projectsTableName = process.env.NEXT_APP_PROJECTS_TABLE_NAME?.trim() || 'Projects';

// Debug logging (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Environment variables check:');
  console.log('API Key exists:', !!apiKey);
  console.log('API Key length:', apiKey?.length || 0);
  console.log('API Key preview:', apiKey ? `${apiKey.substring(0, 15)}...` : 'MISSING');
  console.log('Base ID:', baseId || 'MISSING');
  console.log('Experience Table Name:', experienceTableName);
  console.log('Projects Table Name:', projectsTableName);
}

if (!apiKey) {
  throw new Error("An API key is required to connect to Airtable. Please set NEXT_APP_AUTH_TOKEN or AIRTABLE_API_KEY environment variable.");
}

if (!baseId) {
  throw new Error("Airtable Base ID is required. Please set NEXT_APP_BASE_ID environment variable.");
}

// Initialize Airtable with error handling
let base;
try {
  base = new Airtable({
    apiKey: apiKey,
  }).base(baseId);
} catch (error) {
  console.error('Error initializing Airtable base:', error);
  throw error;
}

// Access tables by name instead of ID
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
    if (error.error === 'AUTHENTICATION_REQUIRED') {
      console.error('Authentication failed. API Key used:', apiKey ? `${apiKey.substring(0, 10)}...` : 'MISSING');
      console.error('API Key length:', apiKey?.length || 0);
    } else if (error.error === 'NOT_FOUND') {
      console.error(`Table "${experienceTableName}" not found. Available tables might have different names.`);
    }
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
    if (error.error === 'AUTHENTICATION_REQUIRED') {
      console.error('Authentication failed. API Key used:', apiKey ? `${apiKey.substring(0, 10)}...` : 'MISSING');
      console.error('API Key length:', apiKey?.length || 0);
    } else if (error.error === 'NOT_FOUND') {
      console.error(`Table "${projectsTableName}" not found. Available tables might have different names.`);
    }
    return [];
  }
}



