<template>
    <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>

        <button type="button" class="card__btn card__btn--archive" @click="archiveTasks">
            archive
        </button>

        <button type="button" class="card__btn card__btn--favorites" @click="addCardToFavourites">
          favorites
        </button>
    </div>
</template>

<script>
    export default {
        name: 'CardControl',
        props: {
            todo: {
            type: Object,
            required: true
            }
        },
        data(){
            return {
                favourites: null,
                oldTasks: null,
                payload: null
            }
        },
        methods: {
            addCardToFavourites(){
                const favourite = this.todo
                this.favourites = favourite;
                this.$emit("favouritTask", favourite)
            },

            archiveTasks(){
                const archiveTask = this.todo;
                this.oldTasks = archiveTask;
                this.$emit("getArchiveTask", archiveTask)

            }
        }
    }
</script>

<style lang="scss" scoped>
    .card--edit .card__control {
        opacity: 1;
    }

    .card__control {
        display: flex;
        opacity: 0;
        margin-bottom: 8px;
        transition: opacity 0.3s ease-out;
    }

    .card__inner:hover .card__control {
        opacity: 1;
    }

    .card__btn {
        border: 0;
        padding: 0;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        background-color: transparent;
        outline: none;
    }

    .card__btn:hover,
    .card__btn:focus {
        opacity: 0.6;
    }

    .card__btn--edit {
        margin-right: 9px;
    }

    .card__btn--archive {
        margin-right: auto;
    }

    .card__btn--disabled {
        color: #e7e3e3;
    }

    .card__btn--edit {
        margin-right: 9px;
    }

    .card__btn--archive {
        margin-right: auto;
    }
</style>