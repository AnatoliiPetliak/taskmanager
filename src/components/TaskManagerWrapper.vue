<template>
    <div class="main">
        <ControlTitle />
        <FiterContainer />
        <BoardContainer />
    </div>
</template>

<script>
    import ControlTitle from "./ControlTitle"
    import FiterContainer from "./FilterContainer"
    import BoardContainer from "./BoardContainer"

    export default {
        name: 'TaskManagerWrapper',
        components: {
            ControlTitle,
            FiterContainer,
            BoardContainer
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        padding-top: 50px;
        padding-bottom: 20px;
    }
</style>
