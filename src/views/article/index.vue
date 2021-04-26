<template>
    <!-- <a-form :model="formState" layout="inline">
        <a-form-item label="Activity name">
            <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item label="Activity zone">
            <a-select
                v-model:value="formState.name"
                placeholder="please select your zone"
            >
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="onSubmit">Create</a-button>
            <a-button style="margin-left: 10px">Cancel</a-button>
        </a-form-item>
    </a-form> -->
    <a-table
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="tableData.data"
        rowKey="id"
    >
        <template #img="{record}" class="img">
            <img :src="record.img_url" alt="">
        </template>
        <template #operation="{ record }">
            <span @click="edit(record.id)">
                <a>编辑</a>
            </span>
            <a-divider type="vertical" />
            <a-popconfirm
        v-if="tableData.data.length"
        title="Sure to delete?"
        @confirm="onDelete(record.id)"
      >
        <a>删除</a>
      </a-popconfirm>
        </template>
    </a-table>
</template>
<script lang="ts">
import {
    defineComponent,
    reactive,
    UnwrapRef,
    getCurrentInstance,
    ComponentInternalInstance,
    onMounted
} from 'vue'
import {UserInterface} from '/@/interface/user'
import { ColumnProps } from 'ant-design-vue/es/table/interface'

type Key = ColumnProps['key']
interface DataType {
    title: string
    name: string
}
interface FormState {
    title: string
    name: string | undefined
}
interface TableState {
    data:UserInterface.IndexData[] | undefined
}
const columns = [
    {
        title: 'content',
        dataIndex: 'title',
        width: 300,
    },
    {
        title: 'name',
        dataIndex: 'name'
    },
    {
        title: 'img',
        dataIndex: 'img_url',
        slots:{customRender:'img'}
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width: 160,
        slots: { customRender: 'operation' }
    }
]

export default defineComponent({
    setup() {
        const rowSelection = {
            onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
                console.log(
                    `selectedRowKeys: ${selectedRowKeys}`,
                    'selectedRows: ',
                    selectedRows
                )
            }
        }
        const formState: UnwrapRef<FormState> = reactive({
            title: '',
            name: undefined
        })
        const { proxy } = getCurrentInstance() as ComponentInternalInstance;
        const tableData:UnwrapRef<TableState> = reactive({
            data : []
        })
        const lists = async () => {
            const res = await proxy?.$module.user.index()
            tableData.data = res?.data.data
        }
        onMounted(() => {
            lists()
        })
        const onSubmit = () => {
            console.log('search')
        }
        const edit = (e:number)=>{
            console.log(e)
        }
        const onDelete = (e:number)=>{
            console.log('delete')
        }
        return {
            columns,
            rowSelection,
            formState,
            tableData,
            onSubmit,
            edit,
            onDelete
        }
    }
})
</script>
<style lang="less" scoped>
.ant-form {
    margin-bottom: 20px;
}
img{
    width: 80px;
    height: 40px;
}
</style>

