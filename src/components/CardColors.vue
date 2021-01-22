<template>
    <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>

        <div class="card__colors-wrap">
            <button
                v-for="colour in colours"
                :key="colour"
                :class="{
                    'color-control': true,
                    ['is-' + colour]: true, 
                    'is-checked': pickedColour === colour,
                }"
                @click="onColorClick(colour)"
            >
                {{colour}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardColors',
        data() {
            const colours = ['black', 'yellow', 'blue', 'green', 'pink'];

            return {
                pickedColour: colours[0],
                colours,
            };
        },
        methods: {
            onColorClick(colour) {
                if (this.colour !== colour) {
                    this.$emit("changeColour", colour);

                    this.pickedColour = colour;
                }
            },
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

    .color-control {
        border: 0;
        font-size: 0;
        height: 15px;
        outline: 0;
        width: 15px;

        &.is-black {
            background-color: #0a0a0a;

            &.is-checked {
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #0a0a0a;
            }
        }

        &.is-yellow {
            background-color: #ffe125;

            &.is-checked {
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #ffe125;
            }
        }

        &.is-blue {
            background-color: #0c5cdd;

            &.is-checked {
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #0c5cdd;
            }
        }

        &.is-green {
            background-color: #31b55c;

            &.is-checked {
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #31b55c;
            }
        }

        &.is-pink {
            background-color: #ff3cb9;

            &.is-checked {
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 6px #ff3cb9;
            }
        }
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
