<template>
    <Layout class="m-layout">
        <!-- 国际化示例 -->
        <el-row class="demo">
            <el-col :span="24" class="title">
                1、国际化示例
            </el-col>
            <!-- 示例组件 -->
            <HelloWorld/>
            <!-- Element-ui组件 -->
            <el-pagination
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </el-row>
        <!-- Vuex示例 -->
        <el-row class="demo">
            <el-col :span="24" class="title">
                2、Vuex示例
            </el-col>
            <el-col :span="12">
                <el-input placeholder="请输入内容" :value="getUpper" clearable></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="doSplit('123')">点我追加数字123</el-button>
            </el-col>
        </el-row>
    </Layout>
</template>

<script>
    import Layout from '@/container/layout';
    import {HelloWorld} from '@/components';
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex";
    import {login} from '@/service/getData'

    export default {
        name: "Home",
        components: {
            Layout,
            HelloWorld
        },
        data() {
            return {
                input: '',
                userName: ''
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
            },
            // 请求接口示例
            async doLogin() {
                let userInfo = await login();
                this.userName = userInfo.name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m-layout {
        .demo {
            margin: 20px auto;
            line-height: 1.7;
            .title {
                margin: 10px auto;
                font-weight: bold;
            }
        }
    }
</style>
