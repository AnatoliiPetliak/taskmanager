<template>
    <article class="card card--black" >
        <div class="card__form">
            <div class="card__inner">
                <CardControl />
                
                <div class="card__color-bar">
                    <svg class="card__color-bar-wave" width="100%" height="10">
                        <use xlink:href="#wave"></use>
                    </svg>
                </div>

                <div class="card__textarea-wrap">
                    <p class="card__text">{{ todo.message }}</p>
                </div>

                <div class="card__settings">
                    <div class="card__details">
                        <div class="card__dates">
                            <div class="card__date-deadline">
                                <p class="card__input-deadline-wrap">
                                    <span class="card__date">{{ todo.id }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    import CardControl from './CardControl'

    export default {
        name: 'CardBlack',
        components:{
            CardControl   
        },
        props: {
            todo: {
            type: Object,
            required: true
            },
            index: Number
        }
    }
</script>

<style scoped>
    .card {
        position: relative;
        width: 210px;
        min-height: 210px;
        margin-bottom: 26px;
        margin-left: 20px;
    }

    .card__inner {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        padding: 7px 15px;
        box-sizing: border-box;
        box-shadow: 0 9px 38px 0 rgba(0, 17, 45, 0.12);
        background-color: #ffffff;
        outline: 0;
    }

    .card__inner:hover {
        outline: 10px solid white;
        transition: outline-width 0.2s ease-in-out;
        box-shadow: 0 -14px 38px 0 rgba(35, 113, 245, 0.07), 0 14px 38px 0 rgba(35, 113, 245, 0.07);
        z-index: 1;
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

    .card__color-bar {
        width: 100%;
        height: 10px;
        font-size: 0;
        background-color: black;
        margin-bottom: 10px;
        stroke: #000000;
    }

    .card--black .card__color-bar {
        background-color: #000000;
    }

    .card--black .card__color-bar-wave {
        stroke: #000000;
        margin-right: 10px;
    }

    .card__text {
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 0;
        resize: none;
        height: 98px;
        width: 100%;
        outline: none;
        padding: 3px;
        font-weight: 500;
        font-size: 16px;
        overflow: auto;
        box-sizing: border-box;
        border-color: transparent;
    }

    .card__text:focus {
        border-color: #000000;
    }

    .card__text::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }

    .card__settings {
        display: flex;
        margin-top: auto;
    }

    .card__details {
        display: flex;
        flex-direction: column;
    }

    .card__dates {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }

    .card__date-deadline-toggle {
        display: none;
    }

    .card__date-deadline {
        padding: 0;
        border: 0;
        margin: 0;
    }

    .card__date-deadline:disabled {
        display: none;
    }

    .card__date:hover,

    .card__date {
        margin-top: auto;
        font-size: 11px;
        font-weight: 500;
        width: 100px;
        outline: none;
        border: 0;
        text-transform: uppercase;
    }

    .card__input-deadline-wrap {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 140px;
        margin-top: 0;
        margin-bottom: 0;
    }
</style>