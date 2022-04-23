import indexTPL from '../views/index.art';
import sigininTPL from '../views/signin.art';
import usersTPL from '../views/user-signup.art';
const htmlSignin = sigininTPL();
const htmlIndex = indexTPL();

const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        router.go('/index');
    }
}
const _signup = () => {
    const $btn_close = $('#users-close');
    //提交表单
    const data = $('#users-form').serialize().toString();
    $.ajax({
        url: '/api/users/signup',
        type: 'post',
        data,
        success: function (res) {
            console.log("后端返回结果", res.Code);
        },
        error: function (err) {
            console.log(err);
        }
    })
    //调用btn_close按钮上的click事件
    $btn_close.click();
}
//登录页
const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin);
        $('#signin').on('submit', _handleSubmit(router));
    }
}
//注册页
const signup = () => {

}
//index页
const index = (router) => {
    return (req, res, next) => {
        res.render(htmlIndex);
        //window resize,让页面撑满整个页面
        $(window, '.wrapper').resize();
        //填充用户列表
        // let users = usersTPL();
        // console.log(users);
        $('#content').html(usersTPL());
        //点击保存提交表单
        $('#users-save').on('click', _signup);
    }
}

export {
    signin,
    index
}