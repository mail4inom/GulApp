webpackHotUpdate(0,{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/components/Central/Giychat/giychat.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1}!./node_modules/postcss-loader/lib?{"ident":"postcss","plugins":[null,null]}!./src/components/Central/Giychat/giychat.css ***!
  \******************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n#custom-search-input {\n  background: #e8e6e7 none repeat scroll 0 0;\n  margin: 0;\n  padding: 10px;\n}\n   #custom-search-input .search-query {\n   background: #fff none repeat scroll 0 0 !important;\n   border-radius: 4px;\n   height: 33px;\n   margin-bottom: 0;\n   padding-left: 7px;\n   padding-right: 7px;\n   }\n   #custom-search-input button {\n   background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n   border: 0 none;\n   border-radius: 3px;\n   color: #666666;\n   left: auto;\n   margin-bottom: 0;\n   margin-top: 7px;\n   padding: 2px 5px;\n   position: absolute;\n   right: 0;\n   z-index: 9999;\n   }\n   .search-query:focus + button {\n   z-index: 3;   \n   }\n   .all_conversation button {\n   background: #f5f3f3 none repeat scroll 0 0;\n   border: 1px solid #dddddd;\n   height: 38px;\n   text-align: left;\n   width: 100%;\n   }\n   .all_conversation i {\n   background: #e9e7e8 none repeat scroll 0 0;\n   border-radius: 100px;\n   color: #636363;\n   font-size: 17px;\n   height: 30px;\n   line-height: 30px;\n   text-align: center;\n   width: 30px;\n   }\n   .all_conversation .caret {\n   bottom: 0;\n   margin: auto;\n   position: absolute;\n   right: 15px;\n   top: 0;\n   }\n   .all_conversation .dropdown-menu {\n   background: #f5f3f3 none repeat scroll 0 0;\n   border-radius: 0;\n   margin-top: 0;\n   padding: 0;\n   width: 100%;\n   }\n \n   \n\n\n\n   .all_conversation ul li a {\n  color: #333;\n  line-height: 30px;\n  padding: 3px 20px;\n}\n\n\n\n   .member_list .chat-body {\n   margin-left: 47px;\n   margin-top: 0;\n   }\n   \n\n\n\n\n\n   .chat-img img {\n   height: 34px;\n   width: 34px;\n   }\n   \n   .member_list li:last-child {\n   border-bottom:none;\n   }\n   \n  \n\n\n\n\n.chat_area {\n  float: left;\n  height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 100%;\n  background-image: url(\"http://hasshe.com/img/s/ex2Ohl2iwRt4iiGg-1HVQgHaKi.jpg\"); \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  \n}\n\n\n\n\n.message_write {\n  background: #f5f3f3 none repeat scroll 0 0;\n  float: left;\n  padding: 15px;\n  width: 100%;\n}\n.member_list li:hover {\n  background: #428bca none repeat scroll 0 0;\n  color: #fff;\n  cursor:pointer;\n}\n\n\n\n.giychat_body{\n  margin-top:20px;\n  background:#eee; \n}\n\n\n\n\n\n\n/* Messages */\n\n\n.medium-image {\n  width: 45px;\n  height: 45px;\n  margin-right: 5px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.contacts-outter-wrapper {\nposition: relative;\nwidth: 305px;\ndirection: rtl;\nmin-height: 405px;\noverflow: hidden;\n}\n\n.contacts-outter-wrapper:after, .contacts-outter-wrapper:nth-child(1):after {\ncontent: \"\";\nposition: absolute;\nwidth: 100%;\nheight: 5px;\nbottom: 0;\nbackground-color: #2da9e9;\nborder-bottom-left-radius: 4px;\n}\n\n.contacts-outter-wrapper:nth-child(2):after {\nbackground-color: #0ec8a2;\n}\n\n.contacts-outter-wrapper:nth-child(3):after {\nbackground-color: #ff9e2a;\n}\n\n.contacts-outter-wrapper:nth-child(4):after {\nbackground-color: #314557;\n}\n\n.contacts-outter {\nposition: relative;\nheight: calc(100vh - 278px);\nwidth: 325px;\ndirection: rtl;\noverflow-y: scroll;\npadding-left: 20px;\n}\n\n@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) {\n\n}\n\n.contacts {\ndirection: ltr;\nwidth: 305px;\nmargin-top: 0px;\n}\n\n.contacts li {\nwidth: 100%;\nborder-top: 1px solid transparent;\nborder-bottom: 1px solid rgba(205,211,237,0.2);\nborder-left: 4px solid rgba(255,255,255,0);\npadding: 8px 12px;\nposition: relative;\nbackground-color: rgba(255,255,255,0);\n}\n\n.contacts li:first-child {\nborder-top: 1px solid rgba(205,211,237,0.2);\n}\n\n.contacts li:first-child.active {\nborder-top: 1px solid rgba(205,211,237,0.75);\n}\n\n.contacts li:hover {\nbackground-color: rgba(255,255,255,0.25);\n}\n\n.contacts li.active, .contacts.info li.active {\nborder-left: 4px solid #2da9e9;\nborder-top-color: rgba(205,211,237,0.75);\nborder-bottom-color: rgba(205,211,237,0.75);\nbackground-color: #fbfcff;\n}\n\n.contacts.success li.active {\nborder-left: 4px solid #0ec8a2;\n}\n\n.contacts.warning li.active {\nborder-left: 4px solid #ff9e2a;\n}\n\n.contacts.danger li.active {\nborder-left: 4px solid #f95858;\n}\n\n.contacts.dark li.active {\nborder-left: 4px solid #314557;\n}\n\n.contacts li > .info-combo {\nwidth: 172px;\ncursor: pointer;\n}\n\n.contacts li > .info-combo > h3 {\nwidth: 167px;\nheight: 20px;\noverflow: hidden;\nwhite-space: nowrap;\n-o-text-overflow: ellipsis;\n   text-overflow: ellipsis;\n}\n\n.contacts li .contacts-add {\nwidth: 50px;\nfloat: right;\nz-index: 23299;\n}\n\n.contacts li .message-time {\ntext-align: right;\ndisplay: block;\nmargin-left: -15px;\nwidth: 70px;\nheight: 25px;\nline-height: 28px;\nfont-size: 14px;\nfont-weight: 600;\npadding-right: 5px;\n}\n\n.contacts li .contacts-add .fa-trash-o {\nposition: absolute;\nfont-size: 14px;\nright: 12px;\nbottom: 15px;\ncolor: #a6a6a6;\ncursor: pointer;\n}\n\n.contacts li .contacts-add .fa-paperclip {\nposition: absolute;\nfont-size: 14px;\nright: 34px;\nbottom: 15px;\ncolor: #a6a6a6;\ncursor: pointer;\n}\n\n.contacts li .contacts-add .fa-trash-o:hover {\ncolor: #f95858;\n}\n\n.contacts li .contacts-add .fa-paperclip:hover {\ncolor: #ff9e2a;\n}\n\n.contacts li > .info-combo > h5 {\nwidth: 180px;\nfont-size: 12px;\nheight: 28px;\nfont-weight: 500;\noverflow: hidden;\nwhite-space: normal;\n-o-text-overflow: ellipsis;\n   text-overflow: ellipsis;\n}\n\n.contacts li .message-count {\nposition: absolute;\ntop: 8px;\nleft: 5px;\nwidth: 20px;\nheight: 20px;\nline-height: 20px;\ntext-align: center;\nbackground-color: #ff9e2a;\nborder-radius: 50%;\ncolor: #fff;\nfont-weight: 600;\nfont-size: 10px;\n}\n.message-body {\nbackground-color: #fbfcff;\nheight: 100%;\nwidth: calc(100% - 305px);\nfloat: right;\n}\n\n.message-body .message-top {\ndisplay: inline-block;\nwidth: 100%;\nposition: relative;\nmin-height: 53px;\nheight: auto;\nbackground-color: #fff;\nborder-bottom: 1px solid rgba(205,211,237,0.5);\n}\n\n.message-body .message-top .new-message-wrapper {\nwidth: 100%;\n}\n\n.message-body .message-top .new-message-wrapper > .form-group {\nwidth: 100%;\npadding: 10px 10px 0 10px;\nheight: 50px;\n}\n\n.message-body .message-top .new-message-wrapper .form-group .form-control {\nwidth: calc(100% - 50px);\nfloat: left;\n}\n\n.message-body .message-top .new-message-wrapper .form-group a {\nwidth: 40px;\npadding: 6px 6px 6px 6px;\ntext-align: center;\ndisplay: block;\nfloat: right;\nmargin: 0;\n}\n\n.message-body .message-top > .btn {\nheight: 53px;\nline-height: 53px;\npadding: 0 20px;\nfloat: right;\nborder-top-left-radius: 0;\nborder-bottom-left-radius: 0;\nborder-bottom-right-radius: 0;\nmargin: 0;\nfont-size: 15px;\nopacity: 0.9;\n}\n\n.message-body .message-top > .btn:hover,\n.message-body .message-top > .btn:focus,\n.message-body .message-top > .btn.active {\nopacity: 1;\n}\n\n.message-body .message-top > .btn > i {\nmargin-right: 5px;\nfont-size: 18px;\n}\n\n\n\n\n\n\n.chat-footer.new-message-textarea .send-message-text {\npadding-right: 100px;\nheight: 90px;\n}\n\n.message-chat {\nwidth: 100%;\noverflow: hidden;\n}\n\n.message {\nposition: relative;\nwidth: 100%;\n}\n\n.message br {\nclear: both;\n}\n\n.message .message-body {\nposition: relative;\nwidth: auto;\nmax-width: calc(100% - 150px);\nfloat: left;\nbackground-color: #fff;\nborder-radius: 4px;\nborder: 1px solid #dbe3e8;\nmargin: 0 5px 20px 15px;\ncolor: #788288;\n}\n\n.message:after {\ncontent: \"\";\nposition: absolute;\ntop: 11px;\nleft: 63px;\nfloat: left;\nz-index: 100;\nborder-top: 10px solid transparent;\nborder-left: none;\nborder-bottom: 10px solid transparent;\nborder-right: 13px solid #fff;\n}\n\n.message:before {\ncontent: \"\";\nposition: absolute;\ntop: 10px;\nleft: 62px;\nfloat: left;\nz-index: 99;\nborder-top: 11px solid transparent;\nborder-left: none;\nborder-bottom: 11px solid transparent;\nborder-right: 13px solid #dbe3e8;\n}\n\n.message .medium-image {\nfloat: left;\nmargin-left: 10px;\n}\n\n.message .message-info {\nwidth: 100%;\nheight: 22px;\n}\n\n.message .message-info > h5 > i {\nfont-size: 11px;\nfont-weight: 700;\nmargin: 0 2px 0 0;\ncolor: #a2b8c5;\n}\n\n.message .message-info > h5 {\ncolor: #a2b8c5;\nmargin: 8px 0 0 0;\nfont-size: 10px;\nfloat: right;\npadding-right: 10px;\n}\n\n.message .message-info > h4 {\nfont-size: 12px;\nfont-weight: 600;\nmargin: 7px 13px 0 10px;\ncolor: #65addd;\nfloat: left;\n}\n\n.message hr {\nmargin: 4px 2%;\nwidth: 96%;\nopacity: 0.75;\n}\n\n.message .message-text {\ntext-align: left;\npadding: 3px 0px -0px 13px;\nfont-size: 12px;\n}\n\n.message.my-message .message-body {\nfloat: right;\nmargin: 0 15px 20px 5px;\n}\n\n.message.my-message:after {\ncontent: \"\";\nposition: absolute;\ntop: 11px;\nleft: auto;\nright: 63px;\nfloat: left;\nz-index: 100;\nborder-top: 10px solid transparent;\nborder-left: 13px solid #fff;\nborder-bottom: 10px solid transparent;\nborder-right: none;\n}\n\n.message.my-message:before {\ncontent: \"\";\nposition: absolute;\ntop: 10px;\nleft: auto;\nright: 62px;\nfloat: left;\nz-index: 99;\nborder-top: 11px solid transparent;\nborder-left: 13px solid #dbe3e8;\nborder-bottom: 11px solid transparent;\nborder-right: none;\n}\n\n.message.my-message .medium-image {\nfloat: right;\nmargin-left: 5px;\nmargin-right: 10px;\n}\n\n.message.my-message .message-info > h5 {\nfloat: left;\npadding-left: 10px;\npadding-right: 0;\n}\n\n.message.my-message .message-info > h4 {\nfloat: right;\n}\n\n.message.info .message-body {\nbackground-color: #2da9e9;\nborder: 1px solid #2da9e9;\ncolor: #fff;\n}\n\n.message.info:after, .message.info:before {\nborder-right: 13px solid #2da9e9;\n}\n\n.message.success .message-body {\nbackground-color: #0ec8a2;\nborder: 1px solid #0ec8a2;\ncolor: #fff;\n}\n\n.message.success:after, .message.success:before {\nborder-right: 13px solid #0ec8a2;\n}\n\n.message.warning .message-body {\nbackground-color: #ff9e2a;\nborder: 1px solid #ff9e2a;\ncolor: #fff;\n}\n\n.message.warning:after, .message.warning:before {\nborder-right: 13px solid #ff9e2a;\n}\n\n.message.dark:after, .message.dark:before {\nborder-right: 13px solid #314557;\n}\n\n.message.info .message-info > h4, .message.success .message-info > h4,\n.message.warning .message-info > h4, .message.danger .message-info > h4,\n.message.dark .message-info > h4 {\ncolor: #fff;\n}\n\n.message.info .message-info > h5, .message.info .message-info > h5 > i,\n.message.success .message-info > h5, .message.success .message-info > h5 > i,\n.message.warning .message-info > h5, .message.warning .message-info > h5 > i,\n.message.danger .message-info > h5, .message.danger .message-info > h5 > i,\n.message.dark .message-info > h5, .message.dark .message-info > h5 > i {\ncolor: #fff;\nopacity: 0.9;\n}\n\n@media screen and (max-width: 767px) {\n.messages-panel {\n  min-width: 0;\n  display: inline-block;\n}\n\n.contacts-list, .contacts-list .inbox-categories > div:nth-child(4) {\n  border-top-right-radius: 5px;\n  border-right: none;\n}\n\n.contacts-list, .contacts-outter-wrapper, .contacts-outter, .contacts {\n  width: 100%;\n  direction: ltr;\n  padding-left: 0;\n}\n\n.contacts-list .inbox-categories > div {\n  width: 25%;\n}\n\n.message-body {\n  width: 100%;\n  margin: 20px 0;\n  border: 1px solid #dce2e9;\n  background-color: #fff;\n}\n\n.message .message-body {\n  max-width: calc(100% - 85px);\n}\n\n.message-body .chat-body {\n  background-color: #fff;\n  width: 100%;\n}\n\n.chat-footer {\n  margin-bottom: 20px;\n  padding: 0 20px;\n}\n\n.chat-footer .send-message-button {\n  right: 40px;\n}\n\n.chat-footer .upload-file {\n  right: 90px;\n}\n\n.message-body .message-top > .btn {\n  border-radius: 0;\n  width: 100%;\n}\n\n.contacts-add {\n  display: none;\n}\n}\n.footer-away{\n  height: 200px;\n}\n\n\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.a6a48cee1f9c7f08d96d.hot-update.js.map