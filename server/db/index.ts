import { Todo } from '../../types/gloable'
interface Db {
    todos:Todo[]
}
export const db:Db = {
    todos:[
        {id:'20220802@#$',title:'To do One',description:'I want to go to interview at PM 2:00',finished:false}
    ]
}