<template>
    <div class="bg-black p-5">
        <div class="p-1 mx-auto max-w-1/2">
            <NCard class="p-2">
                <h1>My Todos</h1>
                <div>
                    <input class="pl-2 mr-2 rounded-md outline-none text-black" type="text" placeholder="Add a new title" v-model="titleInput">
                    <input class="pl-2 mr-2 rounded-md outline-none text-black" type="text" placeholder="Add a description" v-model="descriptionInput">
                    <NButton class="text-black" @click="addTodo(titleInput,descriptionInput)">Add</NButton>
                </div>
            </NCard>
            <NCard class="p-2 cursor-pointer" :class="[{'bg-slate-400':item.finished}]" v-for="item in todos" :key="item.id">
                <p class="w-[10px] ml-auto cursor-pointer" @click="deleteTodo(item.id)">X</p>
                <div  @click="switchTodoFinished(item.id)">
                    <h1 :class="[{'line-through':item.finished}]">{{item.title}}</h1>
                    <div>
                        <p>{{item.description}}</p>
                        <h2>Finished : {{item.finished}}</h2>
                    </div>
                </div>
            </NCard>
        </div>
    </div>
</template>
<script lang="ts" setup>
const { todos, titleInput, descriptionInput, addTodo, switchTodoFinished, deleteTodo } = useTodo()

</script>