webpackHotUpdate("js/app",{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/common.css */ "./src/assets/css/common.css");
/* harmony import */ var _assets_css_common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");


//页面一开始进入index页面
_routes__WEBPACK_IMPORTED_MODULE_1__["default"].go('/index');



/***/ }),

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



const htmlSignin = _views_signin_art__WEBPACK_IMPORTED_MODULE_1___default()();
const htmlIndex = _views_index_art__WEBPACK_IMPORTED_MODULE_0___default()();

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
        $('#content').html(_views_user_signup_art__WEBPACK_IMPORTED_MODULE_2___default()());
        //点击保存提交表单
        $('#users-save').on('click', _signup);

    }
}



/***/ }),

/***/ "./src/views/index.art":
/*!*****************************!*\
  !*** ./src/views/index.art ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="wrapper">\r\n  <!-- Main Header -->\r\n  <header class="main-header">\r\n    <!-- Logo -->\r\n    <a href="index2.html" class="logo">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class="logo-mini"><b>大</b>柚子</span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class="logo-lg"><b>大柚子</b>的管理系统</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar -->\r\n    <nav class="navbar navbar-static-top" role="navigation">\r\n      <!-- Sidebar toggle button-->\r\n      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\r\n        <span class="sr-only">切换导航</span>\r\n      </a>\r\n      <!-- Navbar Right Menu -->\r\n      <div class="navbar-custom-menu">\r\n        <ul class="nav navbar-nav">\r\n          <!-- Messages: style can be found in dropdown.less-->\r\n          <li class="dropdown messages-menu">\r\n            <!-- Menu toggle button -->\r\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n              <i class="fa fa-envelope-o"></i>\r\n              <span class="label label-success">4</span>\r\n            </a>\r\n            <ul class="dropdown-menu">\r\n              <li class="header">You have 4 messages</li>\r\n              <li>\r\n                <!-- inner menu: contains the messages -->\r\n                <ul class="menu">\r\n                  <li>\r\n                    <!-- start message -->\r\n                    <a href="#">\r\n                      <div class="pull-left">\r\n                        <!-- User Image -->\r\n                        <img ';
    $$out += 'src="http://adminlte.la998.com/v2/dist/img/user2-160x160.jpg"';
    $$out += ' class="img-circle"\r\n                          alt="User Image">\r\n                      </div>\r\n                      <!-- Message title and timestamp -->\r\n                      <h4>\r\n                        Support Team\r\n                        <small><i class="fa fa-clock-o"></i> 5 mins</small>\r\n                      </h4>\r\n                      <!-- The message -->\r\n                      <p>Why not buy a new awesome theme?</p>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end message -->\r\n                </ul>\r\n                <!-- /.menu -->\r\n              </li>\r\n              <li class="footer"><a href="#">查看所有消息</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- /.messages-menu -->\r\n\r\n          <!-- Notifications Menu -->\r\n          <li class="dropdown notifications-menu">\r\n            <!-- Menu toggle button -->\r\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n              <i class="fa fa-bell-o"></i>\r\n              <span class="label label-warning">10</span>\r\n            </a>\r\n            <ul class="dropdown-menu">\r\n              <li class="header">You have 10 notifications</li>\r\n              <li>\r\n                <!-- Inner Menu: contains the notifications -->\r\n                <ul class="menu">\r\n                  <li>\r\n                    <!-- start notification -->\r\n                    <a href="#">\r\n                      <i class="fa fa-users text-aqua"></i> 5 new members joined today\r\n                    </a>\r\n                  </li>\r\n                  <!-- end notification -->\r\n                </ul>\r\n              </li>\r\n              <li class="footer"><a href="#">全部</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- Tasks Menu -->\r\n          <li class="dropdown tasks-menu">\r\n            <!-- Menu Toggle Button -->\r\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n              <i class="fa fa-flag-o"></i>\r\n              <span class="label label-danger">9</span>\r\n            </a>\r\n            <ul class="dropdown-menu">\r\n              <li class="header">You have 9 tasks</li>\r\n              <li>\r\n                <!-- Inner menu: contains the tasks -->\r\n                <ul class="menu">\r\n                  <li>\r\n                    <!-- Task item -->\r\n                    <a href="#">\r\n                      <!-- Task title and progress text -->\r\n                      <h3>\r\n                        设计按钮\r\n                        <small class="pull-right">20%</small>\r\n                      </h3>\r\n                      <!-- The progress bar -->\r\n                      <div class="progress xs">\r\n                        <!-- Change the css width attribute to simulate progress -->\r\n                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"\r\n                          aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\r\n                          <span class="sr-only">20% Complete</span>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end task item -->\r\n                </ul>\r\n              </li>\r\n              <li class="footer">\r\n                查看所有任务\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- User Account Menu -->\r\n          <li class="dropdown user user-menu">\r\n            <!-- Menu Toggle Button -->\r\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n              <!-- The user image in the navbar-->\r\n              <img ';
    $$out += 'src="http://adminlte.la998.com/v2/dist/img/user2-160x160.jpg"';
    $$out += ' class="user-image" alt="User Image">\r\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n              <span class="hidden-xs">大柚子</span>\r\n            </a>\r\n            <ul class="dropdown-menu">\r\n              <!-- The user image in the menu -->\r\n              <li class="user-header">\r\n                <img ';
    $$out += 'src="http://adminlte.la998.com/v2/dist/img/user2-160x160.jpg"';
    $$out += ' class="img-circle" alt="User Image">\r\n                <p>\r\n                  大柚子 - Web Developer\r\n                  <small>Member since Nov. 2012</small>\r\n                </p>\r\n              </li>\r\n              <!-- Menu Body -->\r\n              <li class="user-body">\r\n                <div class="row">\r\n                  <div class="col-xs-4 text-center">\r\n                    <a href="#">花朵</a>\r\n                  </div>\r\n                  <div class="col-xs-4 text-center">\r\n                    <a href="#">销量</a>\r\n                  </div>\r\n                  <div class="col-xs-4 text-center">\r\n                    <a href="#">好友</a>\r\n                  </div>\r\n                </div>\r\n                <!-- /.row -->\r\n              </li>\r\n              <!-- Menu Footer-->\r\n              <li class="user-footer">\r\n                <div class="pull-left">\r\n                  <a href="#" class="btn btn-default btn-flat">设置</a>\r\n                </div>\r\n                <div class="pull-right">\r\n                  <a href="#" class="btn btn-default btn-flat">退出</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Control Sidebar Toggle Button -->\r\n          <li>\r\n            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <aside class="main-sidebar">\r\n\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class="sidebar">\r\n\r\n      <!-- Sidebar user panel (optional) -->\r\n      <div class="user-panel">\r\n        <div class="pull-left image">\r\n          <img ';
    $$out += 'src="http://adminlte.la998.com/v2/dist/img/user2-160x160.jpg"';
    $$out += ' class="img-circle" alt="User Image">\r\n        </div>\r\n        <div class="pull-left info">\r\n          <p>大柚子</p>\r\n          <!-- Status -->\r\n          <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- search form (Optional) -->\r\n      <form action="#" method="get" class="sidebar-form">\r\n        <div class="input-group">\r\n          <input type="text" name="q" class="form-control" placeholder="搜索...">\r\n          <span class="input-group-btn">\r\n            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </form>\r\n      <!-- /.search form -->\r\n\r\n      <!-- Sidebar Menu -->\r\n      <ul class="sidebar-menu">\r\n        <li class="header">菜单</li>\r\n        <!-- Optionally, you can add icons to the links -->\r\n        <li class="active"><a href="#"><i class="fa fa-link"></i> <span>用户管理</span></a></li>\r\n        <li><a href="#"><i class="fa fa-link"></i> <span>职位管理</span></a></li>\r\n        <li class="treeview">\r\n          <a href="#"><i class="fa fa-link"></i> <span>多级菜单</span>\r\n            <span class="pull-right-container">\r\n              <i class="fa fa-angle-left pull-right"></i>\r\n            </span>\r\n          </a>\r\n          <ul class="treeview-menu">\r\n            <li><a href="#">Link in level 2</a></li>\r\n            <li><a href="#">Link in level 2</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <!-- /.sidebar-menu -->\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>\r\n\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <div class="content-wrapper">\r\n    <!-- Content Header (Page header) -->\r\n    <section class="content-header">\r\n      <h1>\r\n        用户管理\r\n        <small>用户列表</small>\r\n      </h1>\r\n      <ol class="breadcrumb">\r\n        <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>\r\n        <li class="active">用户管理</li>\r\n      </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class="content" id="content">\r\n      <!-- Your Page Content Here -->\r\n      \r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n  <!-- /.content-wrapper -->\r\n\r\n  <!-- Main Footer -->\r\n  <footer class="main-footer">\r\n    <!-- To the right -->\r\n    <div class="pull-right hidden-xs">\r\n      Anything you want\r\n    </div>\r\n    <!-- Default to the left -->\r\n    <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.\r\n  </footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <aside class="control-sidebar control-sidebar-dark">\r\n    <!-- Create the tabs -->\r\n    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">\r\n      <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>\r\n      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <div class="tab-content">\r\n      <!-- Home tab content -->\r\n      <div class="tab-pane active" id="control-sidebar-home-tab">\r\n        <h3 class="control-sidebar-heading">近期活动</h3>\r\n        <ul class="control-sidebar-menu">\r\n          <li>\r\n            <a href="javascript::;">\r\n              <i class="menu-icon fa fa-birthday-cake bg-red"></i>\r\n\r\n              <div class="menu-info">\r\n                <h4 class="control-sidebar-subheading">Langdon 的生日</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n        <h3 class="control-sidebar-heading"> 任务进度</h3>\r\n        <ul class="control-sidebar-menu">\r\n          <li>\r\n            <a href="javascript::;">\r\n              <h4 class="control-sidebar-subheading">\r\n                自定义模板设计\r\n                <span class="pull-right-container">\r\n                  <span class="label label-danger pull-right">70%</span>\r\n                </span>\r\n              </h4>\r\n\r\n              <div class="progress progress-xxs">\r\n                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n      <!--  统计信息选项卡内容 -->\r\n      <div class="tab-pane" id="control-sidebar-stats-tab"> 统计信息选项卡内容</div>\r\n      <!-- /.tab-pane -->\r\n      <!-- Settings tab content -->\r\n      <div class="tab-pane" id="control-sidebar-settings-tab">\r\n        <form method="post">\r\n          <h3 class="control-sidebar-heading">常规设置项</h3>\r\n\r\n          <div class="form-group">\r\n            <label class="control-sidebar-subheading">\r\n              报告面板用法\r\n              <input type="checkbox" class="pull-right" checked>\r\n            </label>\r\n\r\n            <p>\r\n              常规设置选项的相关信息\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n        </form>\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n    </div>\r\n  </aside>\r\n  <!-- /.control-sidebar -->\r\n  <!-- Add the sidebar\'s background. This div must be placed\r\n         immediately after the control sidebar -->\r\n  <div class="control-sidebar-bg"></div>\r\n</div>';
    return $$out;
};

/***/ }),

/***/ "./src/views/user-signup.art":
/*!***********************************!*\
  !*** ./src/views/user-signup.art ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="box">\r\n    <!-- /.box-header -->\r\n    <!-- button -->\r\n    <div class="box-header">\r\n        <button type="button" class="btn  btn-success btn-lg" data-toggle="modal" data-target="#myModal">添加</button>\r\n    </div>\r\n    <!-- Modal -->\r\n    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\r\n        <div class="modal-dialog" role="document" style="margin-top:150px">\r\n            <div class="modal-content">\r\n                <div class="modal-header">\r\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span\r\n                            aria-hidden="true">&times;</span></button>\r\n                    <h4 class="modal-title" id="myModalLabel">添加用户</h4>\r\n                </div>\r\n                <div class="modal-body">\r\n                    <form role="form" id="users-form">\r\n                        <div class="box-body">\r\n                            <div class="form-group">\r\n                                <label for="username">用户名</label>\r\n                                <input type="text" name="username" class="form-control" id="username"\r\n                                    placeholder="请输入用户名">\r\n                            </div>\r\n                            <div class="form-group">\r\n                                <label for="password">密码</label>\r\n                                <input type="password" name="password" class="form-control" id="password"\r\n                                    placeholder="请输入密码">\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <button type="button" class="btn btn-default" data-dismiss="modal" id="users-close">关闭</button>\r\n                    <button type="button" class="btn btn-primary" id="users-save">保存</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- table -->\r\n    <div class="box-body">\r\n        <table class="table table-bordered">\r\n            <tr>\r\n                <th style="width: 100px">序号</th>\r\n                <th>用户名</th>\r\n                <th>所属小组</th>\r\n                <th style="width: 100px">操作</th>\r\n            </tr>\r\n            <tr>\r\n                <td>1.</td>\r\n                <td>admin</td>\r\n                <td>\r\n                    超级管理员\r\n                </td>\r\n                <td><button class="btn btn-danger">删除</button></td>\r\n            </tr>\r\n            <tr>\r\n                <td>2.</td>\r\n                <td>大柚子</td>\r\n                <td>\r\n                    管理员\r\n                </td>\r\n                <td><button class="btn btn-danger">删除</button></td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <!-- /.box-body -->\r\n    <div class="box-footer clearfix">\r\n        <ul class="pagination pagination-sm no-margin pull-right">\r\n            <li><a href="#">&laquo;</a></li>\r\n            <li><a href="#">1</a></li>\r\n            <li><a href="#">2</a></li>\r\n            <li><a href="#">3</a></li>\r\n            <li><a href="#">&raquo;</a></li>\r\n        </ul>\r\n    </div>\r\n</div>';
    return $$out;
};

/***/ })

})
//# sourceMappingURL=app.39aa12ff34af50ee5ac3.hot-update.js.map