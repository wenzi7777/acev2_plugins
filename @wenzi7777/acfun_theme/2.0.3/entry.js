(()=>{"use strict";const n="#header, body, .search-result, #search-text, .guide-item-con, .nav-guide-2, .nav-guide-3, .nav-guide-3-place, .ac-member, main, .layout {\n    background-color: #333 !important;\n}\n\na {\n    color: #eee !important;\n}\n\na:hover {\n    color: #fd4c5c !important;\n}\n\n#header .nav-guide-main, .nav-guide-2 a, .nav-guide-3 a {\n    color: #eee !important;\n}\n\n.top-nav {\n    border: none !important;\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n.top-nav .first-container .first-item .first-link {\n    color: #eee !important;\n}\n\n.top-nav .first-container .first-item:hover .second-container {\n    background-color: #333 !important;\n    border: none !important;\n}\n\n.top-nav .first-container .first-item .second-container .second-item .second-link {\n    color: #eee !important;\n}\n\n.left-area .header-title, .monkey-recommend-header .header-title, .user-balance, #header a, .live-up-name, .live-module-followers-container .header .header-left {\n    color: #eee !important;\n}\n\n.guide-item-con a, #guide-msg-list, #guide-msg-list li, .followed-users, .ac-trigger-content * {\n    background-color: #333 !important;\n}\n\n.guide-item-con a:hover {\n    background-color: rgba(253, 76, 93, 0.1) !important;\n}\n\n.live-module-followers-container .followers .followers-info {\n    background-color: #333333 !important;\n}\n\n.live-module-followers-container .followers .followers-info .followers-text-info a div {\n    color: #eee !important;\n}\n\n.live-module-followers-container .followers .followers-info .followers-text-info a div:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.article-tab a, .video-title {\n    color: #eee !important;\n}\n\n.article-tab a:hover, .video-title:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.article-tab .more {\n    background-color: #444;\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.rank-item {\n    background-color: #545454;\n    margin: 0 10px;\n}\n\n.header-change {\n    background-color: #545454;\n    color: #eee !important;\n}\n\n.header-change:hover, .normal-video-title:hover, .bangumi-list .header-title:hover, .bangumi-list .column-list a:hover, #footer a:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.link-container a {\n    color: #eee !important;\n}\n\n.normal-video-info {\n    background-color: #333 !important;\n}\n\n.normal-video-title {\n    color: #eee !important;\n}\n\n.bangumi-list .header-title {\n    color: #eee !important;\n}\n\n.bangumi-list .column-list {\n    background-color: #333 !important;\n    color: #eee;\n}\n\n.bangumi-list .column-list a {\n    color: #eee !important;\n}\n\n#footer {\n    background-color: #545454 !important;\n}\n\n#footer a {\n    color: #eee !important;\n}\n\n.ac-member-navigation {\n    background-color: #333333 !important;\n}\n\n.ac-member-navigation a {\n    color: #eeeeee;\n}\n\n.ac-member-navigation a:hover, .member-sub-nav .sub-nav-item-group .ac-member-navigation-item-active {\n    background-color: #444 !important;\n    color: #fff;\n}\n\n.ac-member-welcome .user-card .center .name .formal, .ac-member-welcome .user-card .left .actions > a {\n    background-color: #444;\n}\n\n.ac-member-welcome .user-card .right .info > a {\n    color: #eee;\n}\n\n.ac-member-welcome .user-card .center .wallet {\n    color: #eee !important;\n}\n\n.ac-member-welcome .user-card .center .wallet-item {\n    color: #eee;\n}\n\n.ac-member-bangumi {\n    background-color: #333;\n    color: #eee;\n}\n\n.ac-member-feed .feed-separate, .member-feed-repost-content {\n    background-color: #444 !important;\n}\n\n.member-feed-resource-content .content-right .title, .member-feed-resource-content .content-right .desc, .member-feed-resource-content .content-right .info {\n    color: #eee !important;\n}\n\n.member-feed-repost-content .member-feed-resource-content .content-right {\n    background-color: #333 !important;\n}\n\n.member-feed-text {\n    color: #eee;\n}\n\n.ac-comment-list .area-comment-top hr {\n    border: 1px solid #444 !important;\n}\n\n.area-editor {\n    border-bottom: 1px solid #444 !important;\n}\n\n.member-feed-interactive .show-more-comment {\n    border: none !important;\n    background-color: #444;\n    border-radius: 3px;\n}\n\n.member-feed-interactive .show-more-comment a {\n    color: #eee !important;\n}\n\n.member-feed-interactive .show-more-comment:hover {\n    background-color: #555;\n}\n\n.ac-comment-list .area-comment-des {\n    color: #eee !important;\n}\n\n.group-filter-dropdown {\n    color: #eee;\n}\n\n.ac-member-user-relation .info .name-link {\n    color: #eee;\n}\n\n.ac-member-user-relation .info .name-link:hover {\n    color: rgba(253, 76, 93, 1);\n}\n\n.ac-user-card * {\n    color: #eee;\n}\n\n.ac-member-user-relation:not(:last-child) {\n    border-bottom: 1px solid #444 !important;\n}\n\n.ac-member-user-relation .action .ac-button-default {\n    background-color: #444 !important;\n    color: #eee !important;\n}\n\n.action-dropdown li {\n    color: #eee !important;\n}\n\n.action-dropdown li:hover {\n    background-color: #444 !important;\n}\n\n.ac-pager-next, .ac-pager-prev {\n    background-color: #444 !important;\n    color: #eee;\n}\n\n.ac-pager-active {\n    background-color: rgba(253, 76, 93, 1);\n    color: #eee;\n}\n\n.ac-pager-disabled {\n    background-color: #333333 !important;\n}\n\n.ac-pager-quick-jumper {\n    color: rgba(253, 76, 93, 1);\n}\n\n.ac-pager-quick-jumper input {\n    color: #eee !important;\n}\n\n.ac-pager-item {\n    background-color: #444 !important;\n    border: none !important;\n    color: #eee;\n}\n\n.ac-member-feeds-header .ac-tabs-nav {\n    background-color: #333 !important;\n}\n\n.ac-member-feeds-header .ac-tabs-nav li {\n    color: #eee;\n}\n\n.ac-tabs-nav-active, .member-feed-user .feed-up-info .up-name a:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.member-feed-resource-content .content-right {\n    background-color: #333 !important;\n}\n\n.ac-tabs-nav {\n    border: none !important;\n}\n\n.member-feed-user .feed-up-info .up-name a {\n    color: #eee !important;\n}\n\n.ac-tabs-nav-item {\n    color: #eee;\n}\n\n.ac-member-video-history, .ac-member-article-history-block {\n    background-color: #444 !important;\n    border-radius: 3px;\n    padding: 10px;\n}\n\n.ac-member-video-history *, .ac-member-article-history-block * {\n    color: #eee !important;\n}\n\n.ac-member-video-history *:hover, .ac-member-article-history-block *:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-member-video-history .cover, .ac-member-article-history-block .cover, .ac-member-article-history-block .cover > img {\n    width: auto !important;\n}\n\n.ac-member-article-history-block .cover, .ac-member-article-history-block .cover > img {\n    overflow: hidden;\n}\n\n.history-all-panel-bottom, .history-video-panel-bottom, .history-article-panel-bottom {\n    border: none !important;\n}\n\n.ac-member-article-history-line + .ac-member-article-history-line {\n    border: none !important;\n}\n\n.ac-member-article-history-line {\n    background-color: #444 !important;\n    margin: 10px 0;\n}\n\n.ac-member-article-history-line .right .title, .ac-member-favourite-article-item-content .title {\n    color: #eee;\n}\n\n.ac-member-article-history-line .right .title:hover, .ac-member-favourite-article-item-content .title:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-member-favourite-article-item {\n    background-color: #444 !important;\n}\n\n.ac-member-favourite-bangumi-item-title {\n    color: #eee !important;\n}\n\n.ac-member-favourite-bangumi-item-title:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-member-favourite-bangumi-item-title a {\n    color: #eee !important;\n}\n\n.ac-member-favourite-bangumi-item-title a:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-member-mall-main .banana-panel > h2, .ac-member-mall-main .banana-panel .banana-detail-item, .ac-member-mall-main .mall-panel > h2 {\n    color: #eee !important;\n}\n\n.ac-member-mall-main .mall-panel .mall-filter {\n    background-color: #444 !important;\n    border-radius: 3px;\n}\n\n.ac-member-mall-main .mall-panel .mall-filter-item {\n    border: none !important;\n    text-align: center;\n}\n\n.ac-member-mall-main .mall-panel .mall-filter-item-active {\n    background-color: #444 !important;\n}\n\n.ac-member-mall-main .mall-panel .mall-list {\n    border: none !important;\n}\n\n.ac-member-mall-main .mall-panel .mall-list > li {\n    border: none !important;\n    background-color: #444 !important;\n}\n\n.ac-member-mall-main .mall-panel .mall-list > li * {\n    color: #eee !important;\n}\n\n.ac-member-mall-main .mall-panel .mall-list > li *:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-member-mall-item-detail .breadcrumb .ac-breadcrumb-item-inactive:hover, .ac-member-mall-item-detail .breadcrumb .ac-breadcrumb-item-separtor-inactive:hover, .ac-member-mall-item-detail .breadcrumb .ac-breadcrumb-item-separtor:not(:hover), .ac-member-mall-item-detail .breadcrumb .ac-breadcrumb-item:not(:hover) {\n    color: #eee !important;\n}\n\n.ac-member-mall-item-detail .top .detail .title {\n    color: #eee !important;\n}\n\n.setting-info-panel .setting-info-signup-time-wrapper, .setting-info-panel .setting-info-uid-wrapper, .setting-security-home .security-panel-item .item-content {\n    color: #eee !important;\n}\n\ndiv#main #nav, div#main > .content {\n    background-color: #444 !important;\n    border: none !important;\n    border-radius: 3px;\n}\n\ndiv#main #nav > .title {\n    color: #eee !important;\n}\n\nli.msg-item {\n    background-color: #444 !important;\n}\n\nli.msg-item.active {\n    background-color: #333 !important;\n}\n\nli.msg-item a {\n    color: #eee !important;\n}\n\nul.comment-item .content .titlebar .time, ul.comment-item .content .titlebar .name, ul.like-item .content .titlebar .name {\n    color: #eee !important;\n}\n\nul.comment-item .content .titlebar .time, ul.comment-item .content .titlebar .name:hover, ul.like-item .content .titlebar .name:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\nul.comment-item .content .msg-reply .clamp-text .inner, ul.comment-item .content .intro a {\n    color: #fff !important;\n}\n\n.main-block-msg-item:not(:last-child) {\n    border-bottom: 1px solid #333 !important;\n}\n\n.main-block-msg-item {\n    color: #eee !important;\n}\n\n.container-im .container-im-content {\n    background-color: #444 !important;\n    border: none !important;\n}\n\n.container-im .container-im-content .container-chat-left .container-chat-nav .chat-nav-item > div .nickName {\n    color: #eee !important;\n}\n\n.container-im .container-im-content .container-chat-left .container-chat-nav .chat-nav-item.active {\n    background-color: #333 !important;\n}\n\n.container-im .container-im-content .container-chat-left .placeHolder, .container-im .container-im-content .container-chat-left {\n    border: none !important;\n}\n\n.container-im .container-im-content .container-chat-right .chat-name-current {\n    background-color: #444 !important;\n    color: #fff !important;\n    border: none !important;\n}\n\n.container-im .container-im-content .container-chat-right .container-chat-content {\n    background-color: #333 !important;\n}\n\n.container-im .container-im-content .container-chat-right .container-chat-content .chat-content-item .message .content {\n    background-color: #444 !important;\n    color: #eee !important;\n}\n\n.container-im .container-im-content .container-chat-right .container-chat-controls {\n    background-color: #444 !important;\n    border: none !important;\n}\n\n.popup-emotion {\n    background-color: #333 !important;\n}\n\n.popup-emotion .tab-head .name {\n    color: #fff !important;\n}\n\n.popup-emotion .tab-content .tab-item > div:hover {\n    background-color: #444 !important;\n}\n\n.popup-emotion:after {\n    border-color: transparent #333 #333 transparent;\n}\n\n.popup-emotion .tab-nav-container .wrap-tab-nav .tab-nav .nav-item.active {\n    background-color: #444 !important;\n}\n\n.popup-emotion .tab-nav-container .wrap-tab-nav .tab-nav .nav-item {\n    background-color: #333 !important;\n}\n\n.popup-emotion .tab-nav-container.hasNext .btn-next, .popup-emotion .tab-nav-container.hasPre .btn-pre {\n    background-color: #333 !important;\n}\n\n.popup-emotion .tab-nav-container .btn-pre:before, .popup-emotion .tab-nav-container .btn-next:before {\n    border-color: #eee !important;\n}\n\nbody #main, #nav, #nav .nav-parent, #nav .nav-sub {\n    background-color: #333 !important;\n}\n\n.channel-guide .guide-icon {\n    color: #eee !important;\n}\n\n.channel-list {\n    background-color: #333333 !important;\n}\n\n.container-controls .control-bar-bottom {\n    background-color: #444 !important;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n\n.player-box {\n    border: none !important;\n}\n\n.container-player {\n    background-color: #333 !important;\n}\n\n.container-controls .control-bar-bottom {\n    background-color: #444 !important;\n    box-sizing: border-box;\n    padding: 0 10px;\n}\n\n#pagelet_bottomrecommend {\n    background-color: #333 !important;\n    border: none !important;\n}\n\n.comment-area .columen-left {\n    background-color: #444;\n    border-radius: 3px;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.video-description {\n    border: none !important;\n}\n\n#main .introduction .tag .add a, #main .introduction .tag .tag-single a {\n    color: #eee;\n}\n\n#pagelet_bottomrecommend section.ad, .comment-area {\n    background-color: #333 !important;\n}\n\n.ac-comment-title .area-comm-str, .ac-comment-list .area-comment-title .name {\n    color: #eee !important;\n}\n\n.ac-comment-title .area-comm-title-right a {\n    border: none !important;\n    background-color: #333 !important;\n}\n\n.ac-comment-title .area-comm-title-right a:hover {\n    background-color: #222 !important;\n}\n\n.ac-comment-list .area-sec-close {\n    background-color: #333 !important;\n}\n\n#danmaku .advanced-danmaku-wrapper .danmaku-advanced-fold.unfold, #danmaku .advanced-danmaku-wrapper .danmaku-fold.unfold, #danmaku .danmaku-wrapper .danmaku-advanced-fold.unfold, #danmaku .danmaku-wrapper .danmaku-fold.unfold {\n    background-color: #333 !important;\n}\n\n#danmaku .advanced-danmaku-wrapper .danmaku-advanced-fold, #danmaku .advanced-danmaku-wrapper .danmaku-fold, #danmaku .danmaku-wrapper .danmaku-advanced-fold, #danmaku .danmaku-wrapper .danmaku-fold {\n    border: none !important;\n}\n\n#danmaku .advanced-danmaku-wrapper .danmaku-advanced-fold, #danmaku .advanced-danmaku-wrapper .danmaku-fold, #danmaku .danmaku-wrapper .danmaku-advanced-fold, #danmaku .danmaku-wrapper .danmaku-fold:hover {\n    background-color: #444 !important;\n    border-radius: 3px !important;\n}\n\n#danmaku .advanced-danmaku-wrapper .danmaku-advanced-fold, #danmaku .advanced-danmaku-wrapper .danmaku-fold, #danmaku .danmaku-wrapper .danmaku-advanced-fold, #danmaku .danmaku-wrapper .danmaku-fold {\n    background-color: #333 !important;\n    border-radius: 3px !important;\n}\n\n#danmaku .advanced-danmaku-wrapper, #danmaku .danmaku-wrapper {\n    border: none !important\n}\n\n.danmaku-list-container, .danmaku-list-container .list-title, .danmaku-list-container .danmaku-page {\n    background-color: #333 !important;\n}\n\n.danmaku-list-container * {\n    color: #eee !important;\n}\n\n.danmaku-list-container .danmaku-item:hover {\n    background-color: #444 !important;\n}\n\n.danmaku-list-container .danmaku-page .last-page:hover, .danmaku-list-container .danmaku-page .next-page:hover, .danmaku-list-container .danmaku-page .current-page .cur-page.only-one:hover {\n    background-color: #444 !important;\n}\n\n.recmd {\n    background-color: #444 !important;\n    border-radius: 3px !important;\n    padding: 10px;\n    box-sizing: border-box;\n}\n\n.recmd .recommend-title {\n    color: #fff !important;\n}\n\n.area {\n    overflow: hidden;\n}\n\n.recmd .block-box {\n    background-color: #333 !important;\n    border-radius: 3px !important;\n}\n\n.recmd .block-video .block-title h3 a {\n    color: #eee !important;\n}\n\n.recmd .block-video .block-title h3 a:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.toolbar {\n    background-color: #222 !important;\n}\n\n.toolbar .tool-to-lab, .toolbar .tool-to-comm {\n    border: none !important;\n}\n\n.to-lab:hover {\n    background-color: #000 !important;\n}\n\n.ac-comment-usercard .area-comm-usercard {\n    background-color: #222 !important;\n}\n\n.ac-comment-usercard .area-comm-usercard * {\n    color: #eee !important;\n}\n\n.ac-comment-usercard .area-comm-usercard *:hover {\n    color: rgba(253, 76, 93, 1) !important;\n}\n\n.ac-comment-usercard .area-comm-usercard hr {\n    border: none !important;\n}\n\n.ac-comment-usercard .area-follow-text {\n    color: #333 !important;\n}\n\n.bangumi-list .area-left .column-list, .bangumi-list .area-left .column-list .time-block {\n    border: none !important;\n}\n\n.video-description .title {\n    color: #fff !important;\n}\n\n#main .introduction .content-description .description-container {\n    color: #eee !important;\n}\n\n#danmaku .danmaku-fold {\n    border-radius: 3px !important;\n    background-color: #333 !important;\n    border: none !important;\n}\n\n#danmaku .danmaku-fold:hover {\n    background-color: #444 !important;\n}\n\n.bangumi-list {\n    background-color: #333 !important;\n}\n\n#pagelet_partlist .scroll-div.over-parts li, #pagelet_partlist .scroll-div li {\n    background-color: #444 !important;\n}\n\n#pagelet_partlist .scroll-div li.active {\n    color: #fd4c5c !important;\n    background-color: #222 !important;\n}\n\n.right-list {\n    border: none !important;\n}\n\n.highlights {\n    border: none !important;\n    background-color: #444 !important;\n    padding: 10px;\n    box-sizing: border-box;\n    border-radius: 3px !important;\n}\n\n.highlights .highlights-title, .highlights .block-video .block-title h3 a {\n    color: #eee !important;\n}\n\n#main .introduction .tag .add, #main .introduction .tag .tag-single {\n    background-color: #444 !important;\n    border: none !important;\n}\n\n#main .introduction {\n    border: none !important;\n}\n\n.pager__wrapper .pager__input {\n    color: #eee !important;\n}\n\n.pager__wrapper .pager__btn__next, .pager__wrapper .pager__btn__prev, .pager__wrapper .pager__btn, .pager__wrapper .pager__ellipsis {\n    background-color: #222 !important;\n    color: #eee !important;\n    border: none !important;\n}\n\n.pager__wrapper .pager__btn__next:hover, .pager__wrapper .pager__btn__prev:hover {\n    background-color: #333 !important;\n}\n\n.pager__wrapper .pager__btn__selected {\n    background-color: #333333 !important;\n    color: #fd4c5c !important;\n}\n\n.pager__wrapper .pager__input input {\n    color: #fd4c5c;\n    background-color: #222;\n    border: none !important;\n}\n\n.ac-comment-list .area-sec-more {\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n#channel-main {\n    background-color: #333 !important;\n}\n\n.live-list-item .up-info .up-info-right .list-content-title a {\n    color: #eee !important;\n}\n\n.live-list-item .up-info .up-info-right .list-content-title a:hover {\n    color: #fd4c5c !important;\n}\n\n.live-info {\n    background-color: #333 !important;\n    border: none !important;\n}\n\n.live-info .live-author-info .live-author-bread .live-author-title, .live-info .live-author-info .live-author-bread .author-info-detail .up-name {\n    color: #eee !important;\n}\n\n.live-info .live-author-info .live-author-bread .author-info-detail .up-name:hover {\n    color: #fd4c5c !important;\n}\n\n.gift-bar {\n    background-color: #444 !important;\n    border: none !important;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n\n.gift-bar .container-gifts .base-gifts {\n    background: none !important;\n}\n\n.gift-bar .container-gifts .btn-unfold-gifts {\n    background: #333 !important;\n    border: none !important;\n}\n\n.gift-bar .container-gifts .item-gift {\n    border: none !important;\n    background-color: #333 !important;\n}\n\n.gift-bar .container-gifts.unfold .extend-gifts {\n    background-color: #444 !important;\n}\n\n.gift-bar .container-gifts .extend-gifts:after {\n    display: none !important;\n}\n\n.gift-bar .container-gifts .item-gift .panel, .gift-bar .container-gifts .item-gift .panel > .top, #app .main-content .main .player-outer-wrapper .container-live .right.container-live-feed, #app .main-content .main .right.container-live-feed, #app .main-content .main .right.container-live-feed .live-feed {\n    background-color: #333 !important;\n}\n\n.gift-bar .container-gifts .item-gift .panel > .bottom {\n    background-color: #444 !important;\n}\n\n.gift-bar .container-gifts .item-gift .panel > .top > .right .top .name {\n    color: #eee !important;\n}\n\n.container-modal-cashier-common .modal-cashier, .container-modal-cashier-common .modal-ticket, .container-modal-cashier-common .modal-sku {\n    background-color: #333 !important;\n}\n\n.container-live-feed-watching .live-feed-watching {\n    background-color: #333 !important;\n    border: none !important;\n}\n\n.container-live-feed-watching .title .tab, .container-live-feed-watching .top .item-top .nickname, .container-live-feed-watching .watching .item-watching .nickname {\n    color: #eee !important;\n}\n\n.container-live-feed-watching .title .tab.active {\n    color: #fd4c5c !important;\n}\n\n.live-feed .container-live-feed-messages {\n    border: none !important;\n}\n\n.container-live-feed-messages .title {\n    color: #eee !important;\n}\n\n.container-live-feed-messages:before {\n    background: linear-gradient(#333, rgba(245, 245, 245, 0)) !important;\n}\n\n.live-feed .live-feed-input {\n    border: none !important;\n    background-color: #444 !important;\n}\n\n.live-feed .face-text .face-text-panel .face-text-panel-content {\n    background-color: #444 !important;\n}\n\n.live-feed .face-text .face-text-panel .face-text-panel-content .faces-container .face {\n    color: #eee !important;\n}\n\n.live-feed .face-text .face-text-panel .face-text-panel-content .faces-container .face:hover {\n    background-color: #333 !important;\n}\n\n.live-feed .face-text .face-text-panel .face-text-panel-content > span {\n    color: #fff !important;\n}\n\n.live-feed .face-text .face-text-panel .face-text-panel-content:after {\n    border-color: #444 !important;\n}\n\n#app .main-content .main .player-outer-wrapper:before {\n    background: linear-gradient(0deg, #333333 0, hsla(0, 0%, 100%, 0) 200px, hsla(0, 0%, 100%, 0) 200.1px, hsla(0, 0%, 100%, 0)), url(//static.yximgs.com/udata/pkg/acfun-fe/bg.png)\n}\n\n#app .main-content .main .list-container, #app .main-content .main .list-container .container-list .list-left {\n    background-color: #333 !important;\n}\n\n.contribute-list-item .up-info .list-content-title .content-title {\n    color: #eee !important;\n}\n\n#app .main-content .main, #app .main-content .main .list-container .container-list .list-right {\n    background-color: #333 !important;\n}\n\n.header-nav, .header-nav ul, .header-sub-nav {\n    background-color: #333 !important;\n    border: none !important;\n}\n\n.channel-header .wrap {\n    border: none !important;\n}\n\n.header-nav ul li a, .header-sub-nav ul li a, .channel-nav ul a, .channel-monkey-recommend .header h1, .channel-rank .header h1, .channel-rank .header .title {\n    color: #eee !important;\n}\n\n.channel-main, .channel-nav, .channel-slider {\n    background-color: #333 !important;\n}\n\n.channel-rank .rank-item {\n    background-color: #444;\n    box-sizing: border-box;\n    padding: 10px;\n    border-radius: 3px;\n}\n\n.channel-rank .hot-word a {\n    border: none !important;\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n.channel-rank .rank-list .header .tab-nav a {\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n.channel-rank .rank-list .header .tab-nav a.active {\n    color: #fd4c5c !important;\n}\n\n.rank-list-main {\n    overflow: hidden;\n}\n\n.rank-list-main a, .channel-channel-module a, .video-item a {\n    color: #eee !important;\n}\n\n.rank-list-main a:hover, .video-item a:hover, .channel-channel-module a:hover {\n    color: #fd4c5c !important;\n}\n\n.module-video .video-item .module-title p {\n    background-color: #333 !important;\n}\n\n.user-info a {\n    color: #eee !important;\n}\n\n.user-info a:hover {\n    color: #fd4c5c !important;\n}\n\n.channel-rank .rank-list .footer .more {\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n.channel-rank .fame-hall .fame-hall-main li .user-info .btn-follow.followed {\n    background-color: #333 !important;\n    color: #eee !important;\n}\n\n.channel-rank .fame-hall .fame-hall-main li .user-info .btn-follow {\n    background-color: #444 !important;\n    color: #fd4c5c !important;\n    border: none !important;\n}\n\n.channel-rank .fame-hall .fame-hall-main li .user-avatar {\n    background-color: #444 !important;\n}\n\n.header .btn-change {\n    border: none !important;\n    background-color: #444 !important;\n    color: #eee !important;\n}\n\n.channel-banana-rank .header h1 {\n    color: #eee !important;\n}\n\n.channel-banana-rank .header .tab-nav a {\n    background-color: #444 !important;\n    color: #eee !important;\n}\n\n.channel-banana-rank .header .tab-nav a.active {\n    color: #fd4c5c !important;\n}\n\n.article-monkey-recommend .title, .article-hot-article .header .title {\n    color: #eee !important;\n}\n\n.article-item {\n    background-color: #444 !important;\n    padding: 10px !important;\n    box-sizing: border-box !important;\n    border-radius: 3px !important;\n    overflow: hidden;\n}\n\n.rank-item {\n    background-color: #444 !important;\n    border-radius: 3px !important;\n    overflow: hidden;\n}\n\n.article-hot-article .header, .article-list-user .header, .article-list .article-list-header .tab-nav, .article-item {\n    border: none !important;\n}\n\n.search-box .form input {\n    color: #eee !important;\n}\n\n.search-box .form .search-history-body a {\n    background-color: #444 !important;\n    color: #eee !important;\n    border: none !important;\n}";((e,o,a,r)=>{"follow"===r({manifest:a})[0].value?e()&&o.injectHTML({HTMLCode:`<style>${n}</style>`}):"dark"===r({manifest:a})[0].value&&o.injectHTML({HTMLCode:`<style>${n}</style>`})})(isDarkMode,ACEV2DOM,manifest,getSelfPreference)})();