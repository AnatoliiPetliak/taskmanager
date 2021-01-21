<template>
    <div class="card__details">
        <div class="card__dates">
            <button class="card__date-deadline-toggle" type="button">
                date:
                <span class="card__date-status">yes</span>
            </button>

            <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                    <input class="card__date" type="text" placeholder name="date" value="23 September" />
                </label>
            </fieldset>

            <button class="card__repeat-toggle" type="button">
                repeat:
                <span class="card__repeat-status">yes</span>
            </button>

            <fieldset class="card__repeat-days">
                <div class="card__repeat-days-inner" @click="setWeekDays">
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-mo-4" name="repeat" value="mo" v-model="weekDays" />
                    <label class="card__repeat-day" for="repeat-mo-4">mo</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-tu-4" name="repeat" value="tu"  v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-tu-4">tu</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-we-4" name="repeat" value="we" v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-we-4">we</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-th-4" name="repeat" value="th" v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-th-4">th</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-fr-4" name="repeat" value="fr"  v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-fr-4">fr</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" name="repeat" value="sa" id="repeat-sa-4" v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-sa-4">sa</label>
                    <input class="visually-hidden card__repeat-day-input"  type="checkbox" id="repeat-su-4" name="repeat" value="su"  v-model="weekDays"/>
                    <label class="card__repeat-day" for="repeat-su-4">su</label>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardDetails',
        // props: ['weekDays'],
        data(){
            return {
                weekDays: []
            }
        },
        
        methods:{
            setWeekDays(){
                const days = this.weekDays;
                this.$emit("weekDays", days);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card--edit .card__details {
        display: flex;
        flex-direction: column;
        order: 2;
        margin-bottom: 10px;
    }

    .card__details {
        display: flex;
        flex-direction: column;
    }

    .card--edit .card__dates {
        flex-direction: column;
        align-items: flex-start;
        border-bottom: 2px solid #000000;
        margin-bottom: 10px;
    }

    .card__dates {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }

    .card__date-deadline-toggle {
        display: none;
    }

    .card--edit .card__date-deadline-toggle {
        display: flex;
        width: auto;
        border: 0;
        padding: 0;
        margin: 0;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 500;
        text-align: left;
        cursor: pointer;
        margin-bottom: 10px;
        border-bottom: 1px solid #000000;
        outline: none;
        background-color: transparent;
    }

    .card--edit .card__date-deadline-toggle:hover {
        opacity: 0.5;
    }

    .card__date-deadline {
        padding: 0;
        border: 0;
        margin: 0;
    }

    .card__date-deadline:disabled {
        display: none;
    }

    .card__input-deadline-wrap {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 140px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .card--edit .card__time,
    .card--edit .card__date {
        font-size: 11px;
        width: 100%;
        margin-bottom: 10px;
        border-bottom: 1px solid #000000;
    }

    .card--edit .card__repeat-toggle {
        display: flex;
        font-size: 11px;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 11px;
        text-transform: uppercase;
        padding: 0;
        border: 0;
        outline: none;
        cursor: pointer;
        border-bottom: 1px solid #000000;
        background-color: transparent;
    }

    .card__repeat-toggle:hover {
        opacity: 0.5;
    }

    .card__repeat-toggle,
    .card__repeat-days-inner {
        display: none;
    }

    .card__repeat-status {
        padding-left: 2px;
    }

    .card__repeat-days {
        border: 0;
        padding: 0;
        width: 100%;
        margin: 0;
    }

    .card__repeat-days:disabled {
        display: none;
    }

    .card--edit .card__repeat-days-inner {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 3px;
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

    .card__repeat-day-input:checked+.card__repeat-day {
        color: #000000;
        border-color: #000000;
    }

    .card--edit .card__repeat-day {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: 12px;
        border: 1px solid #e3dede;
        color: #e3dede;
        cursor: pointer;
    }

    .card--edit .card__repeat-day:hover {
        background-color: rgba(227, 222, 222, 0.2);
    }

    .card__date {
        margin-top: auto;
        font-size: 11px;
        font-weight: 500;
        width: 100px;
        outline: none;
        border: 0;
        text-transform: uppercase;
    }
</style>
