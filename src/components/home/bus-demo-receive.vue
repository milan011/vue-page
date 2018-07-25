<template>
    <div>
        <p>-> 我是右边的兄弟 {{message}}</p>
    </div>
</template>

<script>
    import Bus from '@/config/bus';

    export default {
        name: "HelloWorld",
        data() {
            return {
                message: ''
            }
        },
        mounted() {
            Bus.$on('on', (msg) => {
                this.message = msg
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
