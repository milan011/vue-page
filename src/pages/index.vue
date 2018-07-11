<template>
    <Layout>
        <HelloWorld />
    </Layout>
</template>

<script>
    import Layout from '@/container/layout';
    import {HelloWorld} from '@/components';

    export default {
        name: "Home",
        components: {
            Layout,
            HelloWorld
        }
    }
</script>

<style lang="scss" scoped>

</style>
