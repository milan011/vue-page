<template>
    <div class="container">
        <Header/>
        <div class="content">
            <slot></slot>
        </div>
        <Footer class="footer"/>
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
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        .content {
            flex: 1;
            padding: 0 20px;
        }
        .footer {
            margin-top: auto;
        }
    }
</style>
