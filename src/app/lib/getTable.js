import Card from './cards'

const Airtable = require('airtable')

const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)

const experience = base(process.env.NEXT_APP_EXPERIENCE_ID)

const projects = base(process.env.NEXT_APP_PROJECTS_ID)

const getCardedrecords = records => {
    return records.map(record => cardRecords(record))
}
const cardRecords = record => {
    return <Card 
    title = {record.fields.Name} 
    value = {record.fields.Notes} 
    type = {record.fields.Type} 
    imageURL ={record.fields.Pics[0]["url"]}>
    </Card>
}

export async function getExperience() {
    const records = await experience.select({}).all();
    const allCards = await getCardedrecords(records);
    return (
        allCards
    )
}

export async function getProjects(){
    const records2 = await projects.select({}).all();
    const allcards = await getCardedrecords(records2);
    return (
        allcards
    )
    
}


