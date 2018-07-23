<template>
    <Layout>
        <HelloWorld/>
        <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
        <div>
            <el-input placeholder="请输入内容" :value="getUpper"></el-input>
            <el-button type="primary" @click="doSplit('123')">点我追加数字123</el-button>
            <span></span>
        </div>

    </Layout>
</template>

<script>
    import Layout from '@/container/layout';
    import {HelloWorld} from '@/components';
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        name: "Home",
        components: {
            Layout,
            HelloWorld
        },
        data() {
            return {
                input: ''
            }
        },
        computed: {
            ...mapGetters("demo", ["getUpper"])
        },
        methods: {
            ...mapActions("demo", ["splitStr"]),
            doSplit(num) {
                this.splitStr({
                    str: this.getUpper,
                    num: num
                })
            }
        },
        mounted() {
            console.log(this.getUpper)
        }
    }
</script>

<style lang="scss" scoped>

</style>
