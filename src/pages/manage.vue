<template>
  <div class="manage">
    <div v-if="isShowAdd === false?true:false">
      <p class="title">管理员列表</p>
      <el-button type="success" class="add-btn" @click="isShowAdd=true">新建</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="100"></el-table-column>
        <el-table-column prop="name" label="账号" width="300"></el-table-column>
        <el-table-column prop="prop" label="属性" width="300"></el-table-column>
        <el-table-column prop="time" label="时间" width="300"></el-table-column>
        <el-table-column width="300" label="操作">
          <div slot-scope="scope">
            <el-button @click="look(scope.row.id)" type="text" size="small">查看</el-button>
            <!-- <el-button type="text" size="small" @click="isShowAdd=true">编辑</el-button> -->
            <!-- <el-button type="warning" size="small" :id=(scope.row.id) @click="del">删除</el-button> -->
            <!-- <v-del :id="scope.row.id" @del="del"></v-del> -->
          </div>
        </el-table-column>
      </el-table>
    </div>

    <!-- 添加管理员 -->
    <div class="add-manage" v-if="isShowAdd">
      <p class="add-title">添加/修改管理员</p>
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号">
          <el-input v-model="from.name" :disabled="!isAdd"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="from.pass" type="password" :disabled="!isAdd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" v-show="isAdd">
          <el-input v-model="comfirm" type="password"></el-input>
        </el-form-item>
        <el-form-item label="属性">
          <el-input v-model="from.prop"></el-input>
          <!-- <el-select v-model="from.prop">
            <el-option label="-1" value="-1"></el-option>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
          </el-select>-->
        </el-form-item>
        <el-form-item label="注册日期" prop="name">
          <div class="block">
            <el-date-picker v-model="from.time" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="name">
          <el-button type="success" @click="addManage" v-if="isAdd">新建</el-button>
          <el-button type="success" @click="update" v-else>修改</el-button>
          <el-button @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import API from "../utils/API";
import { message } from "element-ui";
import vDel from "../common/del";
export default {
  props: [],
  components: {
    vDel
  },
  data() {
    return {
      isShowAdd: false,
      isAdd: true,
      tableData: [
        {
          name: "",
          pass: "",
          prop: "",
          time: ""
        }
      ],
      from: {
        name: "",
        pass: "",
        prop: "",
        time: ""
      },
      comfirm: ""
    };
  },
  methods: {
    update(id) {
      this.isAdd = false;
      this.isShowAdd = true;
      var params = this.from;
      params.time = new Date(params.time).getTime();

      this.$http({
        url: API.updateManage,
        params:params
      }).then(res => {
        if (res.isok) {
          
          this.$message({
            message: res.info,
            type: "success"
          });
          this.isShowAdd = false;
          this.form = {
            name: "",
            pass: "",
            prop: "",
            time: ""
          };
          this.confirm = "";
          this.init();
        } else {
          this.$message({
            message: res.info,
            type: "warning"
          });
        }
      });
     
    },
    del(id) {
      this.$http({
        url: API.deleteManage,
        methods: "get",
        params: {
          id: id
        }
      }).then(res => {
        if (res.isok) {
          // console.log(res.data);

          this.$message({
            message: res.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: res.info,
            type: "warning"
          });
        }
      });
    },
    look(id) {
      this.isAdd = false;
      this.isShowAdd = true;
      this.$http({
        url: API.findManage,
        methods: "get",
        params: {
          id: id
        }
      }).then(res => {
        this.from = res.data[0];
        this.from.time = new Date(parseInt(this.from.time));
        delete this.from._id;
      });
    },
    addManage() {
      // console.log(params)
      if (this.from.pass !== this.comfirm) {
        this.$message({
          message: "两次密码不一致",
          type: "error"
        });
        return;
      }
      // console.log(this.from);

      var params = this.from;
      params.time = new Date(params.time).getTime();

      console.log(params);

      this.$http({
        url: API.addManage,
        params: params
      }).then(res => {
        if (res.isok) {
          this.$message({
            message: res.info,
            type: "success"
          });
          // console.log(res);
          this.init();
          this.isShowAdd = !this.isShowAdd;
        }
      });
    },
    back() {
      this.isShowAdd = !this.isShowAdd;
    },
    init() {
      this.$http({
        url: API.findManage
      }).then(res => {
        if (res.isok) {
          this.tableData = res.data;
        } else {
          this.$message({
            message: res.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {}
};
</script>
<style scoped>
.manage {
  padding: 10px;
  box-sizing: border-box;
}
.title {
  font-size: 30px;
  margin: 10px;
}
.add-btn {
  margin: 10px;
}
h1 {
  font-size: 30px;
}
el-bable {
  width: 100%;
  display: flex;
}
el-table > el-table-column {
  flex: 1;
}
.add-manage {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
}
.add-manage .add-title {
  width: 100%;
  font-size: 30px;
  padding-left: 40px;
  margin: 10px;
}
</style>