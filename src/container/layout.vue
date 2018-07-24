<template>
    <div class="container">
        <Header/>
        <div class="content">
            <slot></slot>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import {Header, Footer} from '@/components'

    export default {
        name: "Layout",
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .container {

    }
</style>
