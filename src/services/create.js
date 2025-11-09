import { notion, Database_ID } from '../config/notion.js';

export async function create(rawData) {
    const data = JSON.parse(rawData);
    const resposta = await notion.pages.create({
        parent: {
            type: "database_id",
            database_id: Database_ID
        },
        
        properties: {
            Descrição: {
                title: [
                    {
                        type: "text",
                        text: {
                            content: data.desc
                        }
                    }
                ]

            },

            Valor: {
                type: "number",
                number: data.number
            },
            Origem: {
                type: "select",
                select: {
                    name: data.origin
                }
            },
            Data: {
                type: "date",
                date: {
                    start: new Date().toISOString().split('T')[0]
                }
            }
        }
    })
    console.log(resposta);
}
