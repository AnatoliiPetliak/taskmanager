<template>
    <div class="main">
        <ControlTitle />
        <FiterContainer :archiveTodos="archiveTodos" :todos="todos"/>
        <BoardContainer @archive="getArchiveTodos" @todos="getTodos"/>
    </div>
</template>

<script>
    import ControlTitle from './ControlTitle'
    import FiterContainer from './FilterContainer'
    import BoardContainer from './BoardContainer'

    export default {
        name: 'TaskManagerWrapper',
        components: {
            ControlTitle,
            FiterContainer,
            BoardContainer
        },
        data(){
            return {
               archiveTodos: null,
               todos: null
            }
        },
        methods:{
            getArchiveTodos(data){
                this.archiveTodos = data;
            },

            getTodos(data){
                this.todos = data;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        padding-top: 50px;
        padding-bottom: 20px;
    }
</style>
