// ==UserScript==
// @name         Plex Web Mouse Right Button Back Page
// @namespace    https://github.com/Tosslog-admin/Plex-Mouse-Right-Button-Back-Page
// @version      0.0.1
// @description  Plex Web 鼠标右键返回上一页面。
// @author       北京土著 30344386@qq.com
// @include     /^https?://.*:32400/web.*
// @include     http://*:32400/web/index.html*
// @include     https://*:32400/web/index.html*
// @include     https://app.plex.tv/*
// @require     http://code.jquery.com/jquery-3.2.1.min.js
// @connect     *
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    $('body').on('contextmenu',function () {
        window.history.back(-1)
        return false
    })
})();
