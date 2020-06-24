const baseUrl = "/api"
//登录
const login = baseUrl + "/login";

//查询管理员
const findManage = baseUrl + "/findManage";
//添加管理员
const addManage = baseUrl + "/addManage";
const updateManage = baseUrl + "/updateManage"
const deleteManage = baseUrl + "/delManage"

//用户
const findUser = baseUrl + "/findUser";
const addUser = baseUrl + "/addUser";
const updateUser = baseUrl + "/updateUser"
const deleteUser = baseUrl + "/delUser"


export default {
    login,
    findManage,
    addManage,
    updateManage,
    deleteManage,
    findUser,
    addUser,
    updateUser,
    deleteUser
}