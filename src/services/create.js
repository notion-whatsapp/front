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
                                content: data.Descrição,
                            }
                        }
                    ]

                },

                Valor: {
                    type: "number",
                    number: data.Valor
                },
                Origem: {
                    type: "select",
                    select: {
                        name: data.Origem
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
