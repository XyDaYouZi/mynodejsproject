import indexTPL from '../views/index.art';
import sigininTPL from '../views/signin.art';
import usersTPL from '../views/user-signup.art';
import usersListTPL from '../views/users-list.art';
import warningTPL from '../views/warning.art';
import successTPL from '../views/success.art';
import usersPageTPL from '../views/users-paginations.art';
const htmlSignin = sigininTPL();
const htmlIndex = indexTPL();


//---------功能函数板块----------
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
            if (res.Code == 200) {
                _list();
                $('#warning-tip').html(successTPL({ msg: "用户注册成功！" }))
            }
        },
        error: function (err) {
            $('#warning-tip').html(warningTPL({ msg: "用户注册失败！" }))
            console.log(err);
        }
    })
    //调用btn_close按钮上的click事件
    $btn_close.click();
}

const _pagination = (data) => {
    const pageSize = 10;
    const total = data.length;
    var pageCount = Math.ceil(total / pageSize);
    console.log(pageCount);
    var pageArray = new Array(pageCount);
    for (let i = 0; i < pageCount; i++) {
        pageArray[i] = i + 1;
    }
    const htmlPage = usersPageTPL({ pageArray });
    $('#users-page').html(htmlPage);
}

const _list = () => {
    $.ajax({
        url: '/api/users/list',
        type: 'get',
        success: (res) => {
            let data = res.data;
            _pagination(data);
            if (res.Code == 200) {
                $('#users-list').html(usersListTPL({ data }));
            }
        },
        error: (err) => {
            console.log(err);
        }
    })
}


// -------router板块------
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
        $('#content').html(usersTPL());
        // 渲染list
        _list();
        //点击保存提交表单
        $('#users-save').on('click', _signup);
    }
}

export {
    signin,
    index
}