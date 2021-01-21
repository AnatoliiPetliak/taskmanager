<template>
    <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>

        <div class="card__colors-wrap" @click="setColor">
            <input type="radio" id="color-black-4" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" v-model="picked"/>
            <label for="color-black-4" class="card__color card__color--black">black</label>
            <input type="radio" id="color-yellow-4" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" v-model="picked" />
            <label for="color-yellow-4" class="card__color card__color--yellow" >yellow</label>
            <input type="radio" id="color-blue-4" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue" v-model="picked"/>
            <label for="color-blue-4" class="card__color card__color--blue">blue</label>
            <input type="radio" id="color-green-4" class="card__color-input card__color-input--green visually-hidden" name="color" value="green" v-model="picked"/>
            <label for="color-green-4" class="card__color card__color--green">green</label>
            <input type="radio" id="color-pink-4" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink" v-model="picked"/>
            <label for="color-pink-4" class="card__color card__color--pink">pink</label><br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardColors',
         data() {
            return {
                picked: ''
            }
        },
        methods:{
            setColor(){
               
                this.$emit("changeColour", this.picked);
                // this.picked = '';
            }
        }
    };
</script>

<style lang="scss" scoped>
    .card__colors-inner {
        display: none;
    }

    .card--edit .card__colors-inner {
        order: 3;
        display: flex;
        flex-direction: column;
    }

    .card__colors-title {
        margin: 0;
        margin-bottom: 10px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
    }

    .card__colors-wrap {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .card__color-input--black:checked+.card__color--black {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #0a0a0a;
    }

    .card__color--yellow {
        background-color: #ffe125;
    }

    .card__color-input--yellow:checked+.card__color--yellow {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #ffe125;
    }

    .card__color--blue {
        background-color: #0c5cdd;
    }

    .card__color-input--blue:checked+.card__color--blue {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #0c5cdd;
    }

    .card__color--green {
        background-color: #31b55c;
    }

    .card__color-input--green:checked+.card__color--green {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #31b55c;
    }

    .card__color--pink {
        background-color: #ff3cb9;
    }

    .card__color-input--pink:checked+.card__color--pink {
        box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #ff3cb9;
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

    .card__color {
        display: flex;
        width: 15px;
        height: 15px;
        font-size: 0;
        cursor: pointer;
    }
</style>
