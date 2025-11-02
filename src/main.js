import { list } from './services/list.js'
import { create } from './services/create.js'

const method = process.argv.at(2)

switch (method) {
    case 'create':{
        create()
        break
    }
    case 'list':{
        list()
        break
    }
    default:{
        console.error('metodo não encontrado')
    }}