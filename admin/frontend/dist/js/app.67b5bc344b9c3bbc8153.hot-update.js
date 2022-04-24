webpackHotUpdate("js/app",{

/***/ "./src/controllers/control.js":
/*!************************************!*\
  !*** ./src/controllers/control.js ***!
  \************************************/
/*! exports provided: signin, index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var _views_index_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/index.art */ "./src/views/index.art");
/* harmony import */ var _views_index_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_index_art__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_signin_art__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/signin.art */ "./src/views/signin.art");
/* harmony import */ var _views_signin_art__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_signin_art__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_user_signup_art__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/user-signup.art */ "./src/views/user-signup.art");
/* harmony import */ var _views_user_signup_art__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_user_signup_art__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_users_list_art__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/users-list.art */ "./src/views/users-list.art");
/* harmony import */ var _views_users_list_art__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_users_list_art__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_warning_art__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/warning.art */ "./src/views/warning.art");
/* harmony import */ var _views_warning_art__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_warning_art__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_success_art__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/success.art */ "./src/views/success.art");
/* harmony import */ var _views_success_art__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_success_art__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_users_paginations_art__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/users-paginations.art */ "./src/views/users-paginations.art");
/* harmony import */ var _views_users_paginations_art__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_views_users_paginations_art__WEBPACK_IMPORTED_MODULE_6__);







const htmlSignin = _views_signin_art__WEBPACK_IMPORTED_MODULE_1___default()();
const htmlIndex = _views_index_art__WEBPACK_IMPORTED_MODULE_0___default()();

//--------公共参数------
const pageSize = 10;

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
            }
        },
        error: function (err) {
            $('#warning-tip').html(_views_warning_art__WEBPACK_IMPORTED_MODULE_4___default()({
                msg: "用户注册失败！"
            }))
            console.log(err);
        }
    })
    //调用btn_close按钮上的click事件
    $btn_close.click();
}

const _pagination = (data) => {
    const total = data.length;
    var pageCount = Math.ceil(total / pageSize);
    console.log(pageCount);
    var pageArray = new Array(pageCount);
    for (let i = 0; i < pageCount; i++) {
        pageArray[i] = i + 1;
    }
    const htmlPage = _views_users_paginations_art__WEBPACK_IMPORTED_MODULE_6___default()({
        pageArray
    });
    $('#users-page').html(htmlPage);

    // 绑定事件
    $('#users-page-list li:not(:first-child,:last-child)').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        let pageNo = $(this).index();
    })
    //第一个默认active
    if (total >= 1) {
        $('#users-page-list li:nth-child(2)').addClass('active');
    }
}

const _list = (pageNo) => {
    $.ajax({
        url: '/api/users/list',
        type: 'get',
        success: (res) => {
            let data = res.data;
            _pagination(data);
            if (res.Code == 200) {
                $('#users-list').html(_views_users_list_art__WEBPACK_IMPORTED_MODULE_3___default()({
                    data: data.slice((pageNo - 1) * pageSize, pageNo * pageSize)
                }));
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
        $('#content').html(_views_user_signup_art__WEBPACK_IMPORTED_MODULE_2___default()());
        // 渲染list
        _list(1);
        //点击保存提交表单
        $('#users-save').on('click', _signup);
    }
}



/***/ })

})
//# sourceMappingURL=app.67b5bc344b9c3bbc8153.hot-update.js.map