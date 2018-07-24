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
                this.$message(`切换到 ${this.$i18n.locale === 'cn' ? '中文' : '英文'}（语言 & 组件 ）`);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
