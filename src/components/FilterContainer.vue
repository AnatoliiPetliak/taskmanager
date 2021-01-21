<template>
    <section class="main__filter filter container">
        <input type="radio" id="filter__all" class="filter__input visually-hidden" name="filter" checked />
        <label for="filter__all" class="filter__label">
            All <span class="filter__all-count">{{todos}}</span>
        </label>
        <input type="radio" id="filter__overdue" class="filter__input visually-hidden" name="filter" disabled />
        <label for="filter__overdue" class="filter__label">
            Overdue <span class="filter__overdue-count">0</span>
        </label>
        <input type="radio" id="filter__today" class="filter__input visually-hidden" name="filter" disabled />
        <label for="filter__today" class="filter__label">
            Today <span class="filter__today-count">0</span>
        </label>
        <input type="radio" id="filter__favorites" class="filter__input visually-hidden" name="filter" />
        <label for="filter__favorites" class="filter__label">
            Favorites <span class="filter__favorites-count">1</span>
        </label>
        <input type="radio" id="filter__repeating" class="filter__input visually-hidden" name="filter" />
        <label for="filter__repeating" class="filter__label">
            Repeating <span class="filter__repeating-count">1</span>
        </label>
        <input type="radio" id="filter__archive" class="filter__input visually-hidden" name="filter" />
        <label for="filter__archive" class="filter__label">
            Archive <span class="filter__archive-count">{{archiveTodos}}</span>
        </label>
    </section>
</template>

<script>
    export default {
        name: 'FiterContainer',
        props:{
            archiveTodos: null,
            todos: null
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 960px;
        padding: 0 20px;
        margin: 0 auto;
    }

    .filter {
        display: flex;
        justify-content: space-between;
    }

    .main__filter {
        margin-bottom: 29px;
    }

    .filter__input:not(:disabled):checked+.filter__label {
        text-shadow: 1px 0 0 #000000;
    }

    .filter__input:not(:disabled):checked+.filter__label:hover {
        text-shadow: 1px 0 0 #000000;
        opacity: 1;
    }

    .filter__input:disabled+.filter__label {
        color: #e7e3e3;
    }

    .visually-hidden {
        position: absolute !important;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0 !important;
        border: 0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
    }

    .filter__label {
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 500;
    }

    .filter__label:hover {
        opacity: 0.7;
        transition: opacity 0.2s ease-out;
    }
</style>
