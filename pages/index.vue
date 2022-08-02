<template>
    <div class="bg-black text-white p-5">
        tailwindu樣板
        {{data}}
    </div>
</template>
<script lang="ts" setup>
const { data } = useFetch('/api/todo')
</script>