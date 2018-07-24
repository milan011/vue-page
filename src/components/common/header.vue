<template>
    <header :class="[header,cname]">
        这个是header组件
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                header: 'm-header'
            }
        },
        props: {
            cname: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-header {
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
</style>
