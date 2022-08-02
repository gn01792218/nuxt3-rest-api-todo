import { db } from '../../db'
import { Todo } from '../../../types/gloable'
import { v4 as uuid } from 'uuid'
enum ApiMethods{
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export default defineEventHandler(async (e)=>{
    const method = e.req.method
    switch(method){
        case ApiMethods.GET:
            return db.todos;
        case ApiMethods.POST:
            const body =await useBody(e)
            if(!body) throw new Error('Oops~')
            const newTodo:Todo = {
                id:uuid(),
                title:body.title,
                description:body.description,
                finished:false,
            }
            db.todos.push(newTodo)
            return newTodo
    }
})