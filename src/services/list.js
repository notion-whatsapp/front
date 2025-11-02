import { notion, Database_ID } from '../config/notion.js'


export async function list(){
    const result = await notion.search({
        filter: {
            property: "object",
            value: "page"
        }
    })
    const pages = result.results.map(page => ({
        titulo: page.properties.Descrição?.title[0]?.text?.content || 'Sem título',
        valor: page.properties.Valor?.number || 0,
        origem: page.properties.Origem?.select?.name || 'Não especificada',
        data: page.properties.Data?.date?.start || 'Não especificada',
        url: page.url
    }))
    console.log('Páginas encontradas:', JSON.stringify(pages, null, 2))
}