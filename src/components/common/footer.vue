<template>
    <footer :class="[footer,cname]">
        这是footer组件
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                footer: 'm-footer'
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
    .m-footer {
        padding: 20px 10px;
        text-align: center;
    }
</style>
