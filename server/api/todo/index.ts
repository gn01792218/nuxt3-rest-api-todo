import { db } from '../../db'
import { Todo, ApiMethods } from '../../../types/gloable'
import { v4 as uuid } from 'uuid'
import { sendError } from 'h3'
export default defineEventHandler(async (e)=>{
    const method = e.req.method
    switch(method){
        case ApiMethods.GET:
            return db.todos;
        case ApiMethods.POST:
            const body =await useBody(e)
            if(!body) {
                const error = createError({
                    statusCode:400,
                    statusMessage:'Bad request',
                    data:{}
                })
                sendError(e,error)
            }
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