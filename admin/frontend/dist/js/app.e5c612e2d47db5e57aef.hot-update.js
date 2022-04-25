webpackHotUpdate("js/app",{

/***/ "./src/views/users-paginations.art":
/*!*****************************************!*\
  !*** ./src/views/users-paginations.art ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $each = $imports.$each, pageArray = $data.pageArray, $value = $data.$value, $index = $data.$index, $escape = $imports.$escape;
    $$out += '<ul class="pagination pagination-sm no-margin pull-right" id="users-page-list">\r\n    <li><a href="#">&laquo;</a></li>\r\n    ';
    $each(pageArray, function ($value, $index) {
        $$out += '\r\n    <li><a href="#">';
        $$out += $escape($value);
        $$out += '</a></li>\r\n    ';
    });
    $$out += '\r\n    <li><a href="#">&raquo;</a></li>\r\n</ul>\r\n';
    return $$out;
};

/***/ })

})
//# sourceMappingURL=app.e5c612e2d47db5e57aef.hot-update.js.map