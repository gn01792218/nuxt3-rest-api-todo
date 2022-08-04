import { Todo, ApiMethods, Msg, MsgType } from '../../../types/gloable'
import { db } from '../../db'
import { sendError } from 'h3'
export default defineEventHandler(async (e)=>{
    const method = e.req.method
    const context = e.context
    const { id } = context.params
     //1.從context的params獲取id參數
    const { todo, todoIndex } = findTodoById(id)
    function findTodoById(id:string){
         //2.從db撈取該todo
        let todoIndex:number
        const todo = db.todos.find((item,index)=>{
            if(item.id===id) todoIndex=index
            return item.id===id
        })
        //3.Error Handle
        if(!todo) {
            //createError方法也來自於h3,但會自動import
            const notFoundError = createError({
                statusCode:404,
                statusMessage:'Todo item not found',
                data:{}
            })
            sendError(e,notFoundError)
        }
        return { todo, todoIndex }
    }
    switch(method){
        case ApiMethods.PUT:
            //4.更新資料
            const updateTodo:Todo = {
                ...todo, //把所有todo屬性抓進來
                finished: !todo.finished, //更改finished
            }
            db.todos[todoIndex] = updateTodo
            return updateTodo
        case ApiMethods.DELETE:
            db.todos.splice(todoIndex,1)
            const msg:Msg = {
                msgType:MsgType.SUCCESS,
                message:'item deleted!!'
            }
            return msg
    }
})