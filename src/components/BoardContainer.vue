<template>
    <section class="board container">
        <div class="board__filter-list">
            <a href="#" class="board__filter">SORT BY DEFAULT</a>
            <a href="#" class="board__filter">SORT BY DATE up</a>
            <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>

        <div class="board__tasks">
            <CardEdit  @add-todo="addTodo"/>
            
            <div class="card__container">
                <CardBlack 
                        v-for="(todo, index) in paginate"
                        :key="index"
                        :todo="todo"
                        v-on:remove-todo="addTodo"            
                /> 
            </div>
        </div>

        <button 
            class="load-more" type="button" 
            v-if="activePage <= paginate.length -1"
            @click="loadMore"        
        >
        load more
        </button>
    </section>
</template>

<script >
    import CardEdit from "./CardEdit"
    import CardBlack from "./CardBlack"
    
    export default {
        name: 'BoardContainer',
        components:{
            CardEdit,
            CardBlack
        },
        data() {
            return {
            defaultTodos: [
                {                
                message: 'Create new task, type your task and press button create!',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Set end of your task, color and data',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Check your task (completed or not)',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Delete your task if neded',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Create new task, type your task and press button create!',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Set end of your task, color and data',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Check your task (completed or not)',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Delete your task if neded',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Set end of your task, color and data',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Check your task (completed or not)',
                id: Date.now(),
                completed: false
                },
                {                
                message: 'Delete your task if neded',
                id: Date.now(),
                completed: false
                },
                ],
            todos: [],
            currentTodo: [],
            currentPage: 1,
            activePage: 1,
            todosPerPage: 6,

            loading: true,
            filter: 'all',
            }
        },
        methods:{
            removeTodo(id) {
            this.todos = this.todos.filter(t => t.id !== id)
            },

            addTodo(todo) {
            this.todos.push(todo)
            },

            loadMore(){
                this.activePage++;
            }
        },
        computed: {
            displayedTodos () {
            return this.paginate;
            },
            paginate () {
                const indexOfLastTodo = this.activePage * this.todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - this.todosPerPage;
                const currentTodo = this.todos.slice(indexOfFirstTodo, indexOfLastTodo);
                //In case loadMore without pagination: indexOfLastTodo=this.limitTodo+8 => arr.push...
                return  currentTodo;                               
            }
         },
        mounted: 
            function () {
                if(this.todos.length <= 0){
                    this.todos.push(...this.defaultTodos)  
                }
            }
    }
</script>

<style lang="scss" scoped>
    .card__container{
        display: flex;
        flex-wrap: wrap;    
        }

    .container {
        width: 960px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .board__filter-list {
        margin-bottom: 24px;
        display: flex;
        
    }

    .board__filter {
        display: inline-block;
        margin-right: 24px;
        outline: none;
        text-decoration: none;
        color: #000;
    }

    .board__filter:hover,
    .board__filter:focus {
        opacity: 0.7;
    }

    .board__filter--active {
        font-weight: bold;
    }

    .board__tasks {
        display: flex;
        flex-direction: row;
        // flex-flow: row wrap;
        // align-items: flex-start;
        justify-content:flex-start;
        // min-height: 500px;
        // margin-left: -40px;
    }

    .board__no-tasks {
        text-align: center;
        text-transform: uppercase;
    }

    .load-more {
        width: 100%;
        padding: 15px 0;
        display: flex;
        justify-content: center;
        background-color: transparent;
        border: 1px solid #000000;
        text-transform: uppercase;
        box-shadow: 0 9px 38px 0 rgba(2, 2, 2, 0.15);
        cursor: pointer;
        margin-top: auto;
        outline: none;
    }

    .load-more:hover {
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0.8;
    }
</style>