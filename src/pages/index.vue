<template>
    <Layout>
        <HelloWorld />
        <el-pagination
            @current-change="handleCurrentChange"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
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
