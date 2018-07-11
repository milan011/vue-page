<template>
    <Layout>
        <p @click="switchLang">{{$t('message.hello')}} <- 点这里切换语言</p>
    </Layout>
</template>

<script>
    import Layout from '@/container/layout';

    export default {
        name: "",
        components: {
            Layout
        },
        methods: {
            switchLang() {
                this.$i18n.locale = this.$i18n.locale === 'cn' ? 'en' : 'cn';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
