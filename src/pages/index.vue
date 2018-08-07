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
                <el-input placeholder="请输入内容" :value="getUpper" clearable @clear="clear"></el-input>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="doSplit('123')">点我追加数字123</el-button>
            </el-col>
        </el-row>
        <!-- Bus.js兄弟组件通信示例 -->
        <el-row class="demo">
            <el-col :span="24" class="title">
                3、Bus.js兄弟组件通信示例
            </el-col>
            <el-col :span="12">
                <BusSend></BusSend>
            </el-col>
            <el-col :span="12">
                <BusReceive></BusReceive>
            </el-col>
        </el-row>
    </Layout>
</template>

<script>
    import Layout from '@/container/layout';
    import {HelloWorld, BusSend, BusReceive} from '@/components';
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex";
    import {apiAddress} from '@/request/api';// 导入我们的api接口

    export default {
        name: "Home",
        components: {
            Layout,
            HelloWorld,
            BusSend,
            BusReceive
        },
        data() {
            return {
                userName: ''
            }
        },
        computed: {
            ...mapGetters("demo", ["getUpper"])
        },
        methods: {
            ...mapActions("demo", ["splitStr"]),
            // Vuex示例
            doSplit(num) {
                this.splitStr({
                    str: this.getUpper,
                    num: num
                });
                this.$message('已经存到Vuex中管理了');
            },
            clear() {
                this.$message('下次还是会取到Vuex中的值，除非刷新页面');
            },
            // 获取数据
            requestApi() {
                // 调用api接口，并且提供了两个参数
                apiAddress({
                    type: 0,
                    sort: 1
                }).then(res => {
                    // 获取数据成功后的其他操作
                })
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
