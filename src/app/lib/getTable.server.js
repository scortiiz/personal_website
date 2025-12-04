import Airtable from "airtable";

const apiKey = (process.env.NEXT_APP_AUTH_TOKEN || process.env.AIRTABLE_API_KEY)?.trim();
const baseId = process.env.NEXT_APP_BASE_ID?.trim();

const experienceTableName = process.env.NEXT_APP_EXPERIENCE_TABLE_NAME?.trim() || 'Experience';
const projectsTableName = process.env.NEXT_APP_PROJECTS_TABLE_NAME?.trim() || 'Projects';

// Debug logging (works in both development and production for server-side)
console.log('[Airtable Config] Environment variables check:');
console.log('[Airtable Config] API Key exists:', !!apiKey);
console.log('[Airtable Config] API Key length:', apiKey?.length || 0);
console.log('[Airtable Config] Base ID exists:', !!baseId);
console.log('[Airtable Config] Base ID:', baseId || 'MISSING');
console.log('[Airtable Config] Experience Table Name:', experienceTableName);
console.log('[Airtable Config] Projects Table Name:', projectsTableName);

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
    console.log('[getExperience] Attempting to fetch from table:', experienceTableName);
    console.log('[getExperience] Base ID:', baseId);
    const records = await experience.select({}).all();
    console.log('[getExperience] Successfully fetched', records.length, 'records');
    if (records.length === 0) {
      console.warn('[getExperience] WARNING: Table exists but returned 0 records. Check if table has data.');
    }
    return records.map((record) => ({
      fields: record.fields,
    }));
  } catch (error) {
    console.error("[getExperience] Error fetching experience:", error);
    console.error("[getExperience] Error details:", {
      message: error.message,
      error: error.error,
      statusCode: error.statusCode,
      tableName: experienceTableName,
      baseId: baseId ? 'SET' : 'MISSING',
      apiKeyExists: !!apiKey
    });
    if (error.error === 'AUTHENTICATION_REQUIRED') {
      console.error('[getExperience] Authentication failed. Check your API key.');
    } else if (error.error === 'NOT_FOUND') {
      console.error(`[getExperience] Table "${experienceTableName}" not found. Available tables might have different names.`);
    }
    // Return empty array to prevent app crash, but log the error
    return [];
  }
}

export async function getProjects() {
  try {
    console.log('[getProjects] Attempting to fetch from table:', projectsTableName);
    console.log('[getProjects] Base ID:', baseId);
    const records = await projects.select({}).all();
    console.log('[getProjects] Successfully fetched', records.length, 'records');
    if (records.length === 0) {
      console.warn('[getProjects] WARNING: Table exists but returned 0 records. Check if table has data.');
    }
    return records.map((record) => ({
      fields: record.fields,
    }));
  } catch (error) {
    console.error("[getProjects] Error fetching projects:", error);
    console.error("[getProjects] Error details:", {
      message: error.message,
      error: error.error,
      statusCode: error.statusCode,
      tableName: projectsTableName,
      baseId: baseId ? 'SET' : 'MISSING',
      apiKeyExists: !!apiKey
    });
    if (error.error === 'AUTHENTICATION_REQUIRED') {
      console.error('[getProjects] Authentication failed. Check your API key.');
    } else if (error.error === 'NOT_FOUND') {
      console.error(`[getProjects] Table "${projectsTableName}" not found. Available tables might have different names.`);
    }
    // Return empty array to prevent app crash, but log the error
    return [];
  }
}



