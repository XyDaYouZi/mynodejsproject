import indexTPL from '../views/index.art';
import sigininTPL from '../views/signin.art';
import usersTPL from '../views/user-signup.art';
import usersListTPL from '../views/users-list.art';
import warningTPL from '../views/warning.art';
//import successTPL from '../views/success.art';
import usersPageTPL from '../views/users-paginations.art';
const htmlSignin = sigininTPL();
const htmlIndex = indexTPL();

//--------公共参数------
const pageSize = 10;
let dataList = [];
let currentPage = 1;
let totalPage = 0;

//---------功能函数板块----------
const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        router.go('/index');
    }
}
//注册栏
const _signup = () => {
    //提交表单
    const data = $('#users-form').serialize().toString();
    $.ajax({
        url: '/api/users',
        type: 'post',
        data,
        success: function (res) {
            if (res.Code == 20000) {
                //添加数据后渲染 方式一
                /* _loadData().then((res) => {
                     dataList = res;
                     // _list(1);
                     // _pagination(res);
                 });*/
                // 方式二
                _loadData();
                _list(1);
                _pagination(dataList);
                _setPageActive(1);
            } else {
                $('#warning-tip').html(warningTPL({
                    msg: res.msg
                }))
            }
        },
        error: function (err) {
            $('#warning-tip').html(warningTPL({
                msg: "用户注册失败！"
            }))
            console.log(err);
        }
    })
    //调用btn_close按钮上的click事件
    $('#users-close').click();
}
//渲染页面跳转栏
const _pagination = (data) => {
    const total = data.length;
    var pageCount = Math.ceil(total / pageSize);
    totalPage = pageCount;
    var pageArray = new Array();
    for (let i = 0; i < pageCount; i++) {
        pageArray[i] = i + 1;
    }
    const htmlPage = usersPageTPL({
        pageArray
    });
    $('#users-page').html(htmlPage);
}

// 为翻页按钮绑定事件
const _pageBtns = () => {
    $('#users-page').on('click', '#users-page-list li:not(:first-child,:last-child)', function () {
        let pageNo = $(this).index();
        currentPage = pageNo;
        _setPageActive(pageNo);
        _list(pageNo);
    })
    $('#users-page').on('click', '#users-page-list li:first-child', function () {
        currentPage = currentPage == 1 ? 1 : currentPage - 1;
        _setPageActive(currentPage);
        _list(currentPage);
    })
    $('#users-page').on('click', '#users-page-list li:last-child', function () {
        currentPage = currentPage == totalPage ? totalPage : currentPage + 1;
        _setPageActive(currentPage);
        _list(currentPage);
    })
}

//翻页按钮高亮显示
const _setPageActive = (index) => {
    $('#users-page #users-page-list li')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
}
//渲染用户列表
const _list = (pageNo) => {
    $('#users-list').html(usersListTPL({
        data: dataList.slice((pageNo - 1) * pageSize, pageNo * pageSize)
    }));
}
//为删除按钮绑定删除事件
const _remove = () => {
    $('#users-list').on('click', '.remove-user', function () {
        //console.log($(this).attr('data-id'));
        let _id = $(this).data('id');
        $.ajax({
            url: "/api/users",
            type: "delete",
            data: {
                id: _id
            },
            success: () => {
                _loadData();
                _pagination(dataList);
                if (totalPage) {
                    if (currentPage > totalPage) {
                        _list(currentPage - 1);
                        _setPageActive(currentPage - 1);
                    } else {
                        _list(currentPage);
                        _setPageActive(currentPage);
                    }
                }
            },
            error: (err) => {
                console.log(err);
            }
        })
    })
}
// 注意：jquery 的ajax返回的本身就是一个promise对象
//请求异步处理方式一：
// const _loadData = () => {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: '/api/users/list',
//             type: 'get',
//             success: (res) => {
//                 let data = res.data;
//                 resolve(data);
//             },
//             error: (err) => {
//                 console.log(err);
//                 reject(err);
//             }
//         })
//     })
// }
//请求异步处理方式二
//请求list数据
const _loadData = () => {
    $.ajax({
        url: '/api/users',
        type: 'get',
        async: false, //异步变同步
        success: (res) => {
            let data = res.data;
            dataList = data;
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
        // 渲染list方式一
        /*_loadData().then((res) => {
            dataList = res;
            _list(1);
            _pagination(res);
        });*/
        //方式二
        _loadData();
        _list(1);
        _pagination(dataList);
        _pageBtns();
        _setPageActive(1);
        _remove();
        //点击保存提交表单
        $('#users-save').on('click', _signup);
    }
}

export {
    signin,
    index
}