<template>
    <div>
        <p @click="switchLang">{{$t('message.hello')}} <- 点这里切换语言</p>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        methods: {
            switchLang() {
                this.$i18n.locale = this.$i18n.locale === 'cn' ? 'en' : 'cn';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
