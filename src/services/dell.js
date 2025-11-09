import { notion, database_id } from  '../config/notion.js';

export async function dell (){
    const response = await notion.pages.delete({
        parent:{
            type: "database_id",
            database_id: database_id
        },
        properties: {

        }
    })
}retrieve