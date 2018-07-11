<template>
    <div class="container">
        <header>this is header</header>
        <div class="content">
            <slot></slot>
        </div>
        <footer class="footer">this is footer</footer>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style lang="scss" scoped>
    .container {

    }
</style>
