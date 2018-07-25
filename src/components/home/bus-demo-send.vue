<template>
    <div>
        <el-col :span="12">
            <el-input v-model="val" placeholder="请输入内容" clearable @clear="clear"></el-input>
        </el-col>
        <el-col :span="12">
            <el-button type="primary" @click="sendMsg">点我给左边的兄弟发消息</el-button>
        </el-col>
    </div>
</template>

<script>
    import Bus from '@/config/bus';

    export default {
        name: "HelloWorld",
        data() {
            return {
                val: ''
            }
        },
        methods: {
            switchLang() {
                this.$i18n.locale = this.$i18n.locale === 'cn' ? 'en' : 'cn';
                this.$message(`切换到 ${this.$i18n.locale === 'cn' ? '中文' : '英文'}（语言 & 组件 ）`);
            },
            sendMsg() {
                Bus.$emit('on', `来自兄弟组件的消息：${this.val}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
