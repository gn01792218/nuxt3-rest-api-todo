import { Todo, ApiMethods, Msg, MsgType } from '../types/gloable'
export default function useTodo(){
    const titleInput = ref("")
    const descriptionInput = ref("")
    //fetch api
    const { data:todos, refresh:refreshTodos } = useFetch('/api/todo') 
    async function addTodo(title:string,description:string){
        if(!descriptionInput.value && !titleInput.value) return
        const newTodo:Partial<Todo> = {
            title:title,
            description:description
        }
        await $fetch('/api/todo',{method:'post',body:newTodo})
        refreshTodos()
        clearInput()
    }
    async function switchTodoFinished(id:string){
        await $fetch(`/api/todo/${id}`,{method:'put'})
        refreshTodos()
    }
    async function deleteTodo(id:string){
        await $fetch(`/api/todo/${id}`,{method:'delete'})
        refreshTodos()
    }
    function clearInput(){
        titleInput.value = ""
        descriptionInput.value = ""
    }
    return {
        //data
        todos,
        titleInput,
        descriptionInput,
        //methods
        addTodo,
        switchTodoFinished,
        deleteTodo,
    }
}