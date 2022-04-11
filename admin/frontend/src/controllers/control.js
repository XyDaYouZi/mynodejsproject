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
        success(res) {
            console.log(res);
        },
        error(err) {
            console.log(err);
        }
    })
    $btn_close.click();
}
const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin);
        $('#signin').on('submit', _handleSubmit(router));
    }
}

const signup = () => {

}
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