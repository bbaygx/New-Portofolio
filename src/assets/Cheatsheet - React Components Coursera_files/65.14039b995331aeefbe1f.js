(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"+tS/":function(module,exports,e){},"3//P":function(module,e,t){"use strict";t.r(e);var n=t("VkAN"),s=t.n(n),i=t("lSNA"),o=t.n(i),r=t("VbXa"),a=t.n(r),c=t("AeFk"),u=t("q1tI"),l=t("17x9"),d=t.n(l),p=t("F/us"),m=t.n(p),b=t("+LJP"),f=t("6/Gu"),g=t("2sch"),O=t("SJ7i"),h=t("BVC1"),j=t("kgYC"),y=t("eJMc"),v=t.n(y),C=t("wd/R"),x=t.n(C),k=t("kvW3"),T=t("8Hdl"),S=t("7GkZ"),A=t("h4VP"),D=t("Fmrb"),N=t.n(D),L,F,w;function ForumsLabel(e){var t=e.discussionsLink,n=e.title,i=e.description,o=e.lastAnsweredAt,r=e.forumQuestionCount,a=Object(j.a)(),u="number"==typeof r,l=!!o,d=1===r?N()("thread"):N()("threads"),p=i.definition.value,m=p.startsWith("<co-content>")&&p.endsWith("</co-content>"),b=!A.b.isEmpty(i)&&m,g="Forum: ".concat(n,"\n                       ").concat(b?A.b.getInnerText(i):"","\n                       ").concat(l?"Last Post: ".concat(x()(o).fromNow()):"","\n                       ").concat(u?"".concat(r," ").concat(d):"");return Object(c.d)(v.a,{className:"rc-ForumsLabel nostyle",to:t,"aria-label":g},Object(c.d)("div",null,Object(c.d)(f.a,{container:!0,xs:12},Object(c.d)(f.a,{item:!0,xs:7,css:Object(c.c)(L||(L=s()(["\n              margin-bottom: ",";\n            "])),a.spacing(16))},Object(c.d)(T.a,{variant:"h2semibold",component:"p",css:Object(c.c)(F||(F=s()(["\n                padding: 0;\n              "])))},n),!A.b.isEmpty(i)&&Object(c.d)(S.a,{cml:i,isCdsEnabled:!0}),l&&Object(c.d)(T.a,{variant:"body2",color:"supportText",component:"span"},Object(c.d)(k.b,{message:N()("Last post {timeAgo}"),timeAgo:x()(o).fromNow()}))),u&&Object(c.d)(f.a,{container:!0,item:!0,xs:5,spacing:8,css:Object(c.c)(w||(w=s()(["\n                justify-content: flex-end;\n                align-items: center;\n\n                @media (max-width: 320px) {\n                  margin: 24px 0 0 -4px;\n                }\n              "])))},Object(c.d)(f.a,{item:!0},Object(c.d)(T.a,{className:"threads-count"},"".concat(r," ").concat(d)))))))}var I=ForumsLabel;function ContentBlock(e){var t=e.children,n=e.className,s=Object(j.a)(),i={border:"1px solid ".concat(s.palette.gray[300])};return Object(c.d)("section",{className:n,css:i},t)}var P,q=function ForumsList(e){return u.createElement(f.a,{container:!0,xs:12,"data-e2e":e.className},u.createElement(f.a,{item:!0,xs:12,component:ContentBlock},u.createElement("div",null,e.children)))},R=t("Jrms"),V=t("a9ka"),B,E;function DiscussionsCourseForums_DiscussionsCourseForums(e){var t=e.courseForums,n=e.mentorForums,i=e.courseForumStatistics,o=e.courseSlug,r=t.find((function(e){return e.forumType.typeName===R.p.rootForumType})),a=Object(j.a)(),u=n.filter((function(e){return!e.parentForumId})),l=t.filter((function(e){return e.parentForumId===r.id&&e.forumType.typeName===R.p.customForumType})),d=u.concat(l).map((function(e){var t=i.find((function(t){return t.courseForumId===e.id}));return Object.assign(e,{discussionsLink:h.a.join(Object(R.n)(o),e.link),lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount})}));if(0===d.length)return null;return Object(c.d)(q,{className:"rc-DiscussionsCourseForums"},Object(c.d)("ul",{css:Object(c.c)(B||(B=s()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "])))},d.map((function(e){return Object(c.d)("li",{key:e.id,css:Object(c.c)(E||(E=s()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "])),a.palette.gray[300],a.spacing(24),a.palette.blue[50])},Object(c.d)(I,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))}))))}var W=Object(p.compose)(Object(R.k)({fields:["link","title","description","lastAnsweredAt","forumQuestionCount","parentForumId"]}))(DiscussionsCourseForums_DiscussionsCourseForums),H=t("JBNF"),Y;function DiscussionsLandingPageHeader_DiscussionsLandingPageHeader(){var e=Object(j.a)();return Object(c.d)("div",{className:"rc-DiscussionsLandingPageHeader "},Object(c.d)("div",{css:Object(c.c)(Y||(Y=s()(["\n          padding: ",";\n        "])),e.spacing(32,0,32,0))},Object(c.d)(T.a,{variant:"h1semibold"},N()("Forums"))))}var M=DiscussionsLandingPageHeader_DiscussionsLandingPageHeader,U=t("TSYQ"),Q=t.n(U),J=t("Ys1X"),G=t("HkWL"),K,X,z=function(e){function DiscussionsGroupForums(){return e.apply(this,arguments)||this}var t;return a()(DiscussionsGroupForums,e),DiscussionsGroupForums.prototype.render=function render(){var e=this.props,t=e.groupForums,n=e.groupForumStatistics,i=e.courseSlug;if(!t||!t.length)return null;var o=t.map((function(e){var t=n.find((function(t){return t.id===e.id}));return{id:e.id,discussionsLink:h.a.join(Object(J.c)(i),e.link),title:e.title,description:e.description,lastAnsweredAt:t&&t.lastAnsweredAt,forumQuestionCount:t&&t.forumQuestionCount}}));return Object(c.d)(q,{className:"rc-DiscussionsGroupForums"},Object(c.d)(T.a,{component:"div",css:Object(c.c)(K||(K=s()(["\n            padding: 24px;\n          "])))},Object(c.d)("ul",{css:Object(c.c)(X||(X=s()(["\n              padding: 0;\n              margin: 0;\n              list-style-type: none;\n            "])))},o.map((function(e){return Object(c.d)("li",{key:e.id},Object(c.d)(I,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))})))))},DiscussionsGroupForums}(u.Component),Z=m.a.compose(Object(R.k)({fields:["link","title","description","parentForumId"]}))(z),ee=t("J4zp"),te=t.n(ee),ne=t("3tO9"),se=t.n(ne),ie=t("MnCE"),oe=t("Gok7"),re=t("gNwb"),ae=t("TmOg"),ce={ALL:"all",FORYOU:"foryou",ACTIVITY:"activity"},ue=Object(re.d)({type:"BUTTON"})(v.a),le=function tabsStyles(e){return{".discussionsLandingPageTabs":{borderBottom:"1px solid ".concat(e.palette.gray[300]),justifyContent:"space-between"},"ul.tabs li.colored-tab.selected":{borderBottom:"4px solid ".concat(e.palette.blue[600]),padding:"".concat(e.spacing(0,0,8,0))},"ul.tabs li.colored-tab a.selected":se()({border:"none",color:e.palette.blue[600]},e.typography.h3bold),"ul.tabs li.colored-tab a:hover":{borderLeft:"none"},"ul.tabs li.colored-tab a":se()({padding:"".concat(e.spacing(0,4,0,0)),borderBottom:"4px solid transparent",borderLeft:"none"},e.typography.body1)}};function getActiveTab(e){var t=e.router,n=e.tabs,s=null;return n.forEach((function(e){t.isActive(Object(R.l)(e),!0)&&(s=e)})),s}function getTabs(e,t){var n,s=(n={},o()(n,t.FORYOU,{title:N()("Posts for you"),pathname:Object(R.l)(t.FORYOU),query:"",isActive:!1,tabKey:t.FORYOU}),o()(n,t.ALL,{title:N()("All forums"),pathname:Object(R.l)(t.ALL),query:"",isActive:!1,tabKey:t.ALL}),o()(n,t.ACTIVITY,{title:N()("Your activity"),pathname:Object(R.l)(t.ACTIVITY),query:"",isActive:!1,tabKey:t.ACTIVITY}),n),i=[ce.ALL,ce.FORYOU,ce.ACTIVITY],r=getActiveTab({router:e,tabs:i})||i[0];return{activeTab:r,orderedTabs:i.map((function(e){var t=Object.assign({},s[e]);return e===r&&(t.isActive=!0),t}))}}var de=function onTabEnter(e,t){e(t["data-link"])},pe=function Tab(e){var t=e.title,n=e.pathname,s=e.query,i=e.isActive,o=e.tabKey,r={query:s,pathname:n};return Object(c.d)(u.Fragment,null,i&&Object(c.d)(oe.a,{role:"status","aria-live":"assertive"},Object(c.d)("div",null," ",N()("Selected"))),Object(c.d)("li",{className:Q()("colored-tab",{selected:i}),key:t,role:"none",id:"tab-".concat(o)},Object(c.d)(ue,{to:r,className:i?"selected":void 0,trackingName:"track_active_forum_tabs",role:"tab","aria-selected":i},t)))},me=function TabPanel(e){var t=e.activeTab,n=e.children,s=e.tabName,i=Object(u.useState)(-1),o=te()(i,2),r=o[0],a=o[1];if(Object(u.useEffect)((function(){t===s&&a(0)}),[]),t===s)return Object(c.d)("div",{id:"panel-".concat(s),role:"tabpanel",tabIndex:r},n);return null};function TabList(e){var t=e.children,n=Object(j.a)();return Object(c.d)(f.a,{container:!0,item:!0,xs:12,css:le(n)},Object(c.d)(f.a,{container:!0,className:"discussionsLandingPageTabs"},Object(c.d)(f.a,{item:!0},Object(c.d)("ul",{role:"tablist",className:"tabs horizontal-box"},t))))}var be=Object(ae.a)(TabList);function DiscussionsLandingPageTabs(e){var t=e.tabs,n=e.updateLocation,s=e.children,i=Object(u.useState)(0),o=te()(i,2),r=o[0],a=o[1],l=Object(u.useState)(0),d=te()(l,2),p=d[0],m=d[1],b=Object(u.useState)(!1),f=te()(b,2),g=f[0],O=f[1],h=Object(u.useState)(!1),j=te()(h,2),y=j[0],v=j[1],C=t.activeTab,x=t.orderedTabs;return Object(u.useEffect)((function(){"foryou"===C&&a(r+1),"activity"===C&&m(p+1),r>=1&&O(!0),p>=1&&v(!0)}),[C]),Object(c.d)("section",null,Object(c.d)(be,{onEnter:function onEnter(e){return de(n,e["data-link"])}},x.map((function(e){return Object(c.d)(pe,{key:e.tabKey,title:e.title,pathname:e.pathname,isActive:e.isActive,query:e.query,tabKey:e.tabKey})}))),Object(c.d)("div",null,s({activeTab:C,forYouHasBeenVisited:g,activityHasBeenVisited:y})))}var fe=Object(ie.b)(Object(b.a)((function(e){return{isBaseForumsActive:e.isActive({pathname:Object(R.m)()},!0),query:e.location.query,tabs:getTabs(e,ce),updateLocation:e.push}})))(DiscussionsLandingPageTabs),ge=t("u5mk"),Oe=t("HjX4"),he,je;function DiscussionsWeekForums_DiscussionsWeekForums(e){var t=e.courseForums.filter((function(e){return e.forumType.typeName===R.p.weekForumType})).map((function(t){var n=e.courseForumStatistics.find((function(e){return e.courseForumId===t.id}));return Object.assign({},t,{discussionsLink:h.a.join(Object(R.n)(e.courseSlug),t.link),lastAnsweredAt:n&&n.lastAnsweredAt,forumQuestionCount:n&&n.forumQuestionCount})})),n=Object(j.a)();return Object(c.d)(q,{className:"rc-DiscussionsWeekForums"},Object(c.d)("ul",{css:Object(c.c)(he||(he=s()(["\n          list-style: none;\n          margin: 0;\n          padding: 0;\n        "])))},t.map((function(e){return Object(c.d)("li",{key:e.id,css:Object(c.c)(je||(je=s()(["\n              border-bottom: 1px solid ",";\n              padding: ",";\n              &:hover {\n                background-color: ",";\n              }\n            "])),n.palette.gray[300],n.spacing(24),n.palette.blue[50])},Object(c.d)(I,{discussionsLink:e.discussionsLink,title:e.title,description:e.description,lastAnsweredAt:e.lastAnsweredAt,forumQuestionCount:e.forumQuestionCount}))}))))}var ye=Object(p.compose)(Object(R.k)({fields:["link","title","description","lastAnsweredAt","forumQuestionCount"]}),ge.a)(DiscussionsWeekForums_DiscussionsWeekForums),ve=t("9M8W"),Ce,xe,ke,Te,Se,Ae,De=function AllForumsTabBody(){var e=Object(j.a)();return Object(c.d)(f.a,{container:!0,item:!0,xs:12,role:"tabpanel"},Ce||(Ce=Object(c.d)(f.a,{item:!0,xs:12},Object(c.d)(Z,null))),Object(c.d)(f.a,{item:!0,xs:12,css:Object(c.c)(xe||(xe=s()(["\n          margin: ",";\n        "])),e.spacing(0,0,24,0))},ke||(ke=Object(c.d)(W,null))),Te||(Te=Object(c.d)(f.a,{xs:12,item:!0},Object(c.d)(ye,null))))},Ne=function(e){function DiscussionsMainColumn(){return e.apply(this,arguments)||this}var t;return a()(DiscussionsMainColumn,e),DiscussionsMainColumn.prototype.render=function render(){var e,t=this.props,n=t.className,s=t.theme,i=Object(c.c)({".searchBoxContainer":o()({justifyContent:"flex-start",margin:s.spacing(0,16,0,0)},"".concat(s.breakpoints.up("xs")),{width:"330px"}),".newThreadButtonContainer":(e={},o()(e,"".concat(s.breakpoints.up("sm")),{padding:s.spacing(0)}),o()(e,"".concat(s.breakpoints.up("xs")),{width:"100px",minWidth:"100px"}),o()(e,"".concat(s.breakpoints.down("xs")),{padding:s.spacing(24,0,0,0)}),e)});return Object(c.d)(f.a,{container:!0,item:!0,xs:12,className:Q()("rc-DiscussionsMainColumn",n),css:i},Object(c.d)(f.a,{container:!0,item:!0,style:{display:"flex"}},Object(c.d)(f.a,{item:!0,xs:12,sm:5,className:"searchBoxContainer"},Object(c.d)(R.g,{previousElementId:"sortOrder",nextElementId:"new-thread-btn",placeholder:"Search forum",animateFromSearch:function animateFromSearch(){return null},animateToSearch:function animateToSearch(){return null},onSubmit:function onSubmit(){return null}})),Se||(Se=Object(c.d)(f.a,{item:!0,xs:12,sm:3,className:"newThreadButtonContainer"},Object(c.d)(R.d,null)))),Object(c.d)(f.a,{item:!0,xs:12,style:{padding:s.spacing(32,0,0,0)}},Object(c.d)(fe,null,(function(e){var t=e.activeTab,n=e.forYouHasBeenVisited,s=e.activityHasBeenVisited;return Object(c.d)(u.Fragment,null,Object(c.d)(me,{activeTab:t,tabName:ce.FORYOU},Object(c.d)(R.e,{hasBeenVisited:n})),Object(c.d)(me,{activeTab:t,tabName:ce.ACTIVITY},Object(c.d)(R.i,{hasBeenVisited:s})),Object(c.d)(me,{activeTab:t,tabName:ce.ALL},Ae||(Ae=Object(c.d)(De,null))))}))))},DiscussionsMainColumn}(u.Component);Ne.contextTypes={router:d.a.object.isRequired};var Le=Object(p.compose)(Object(b.a)((function(e){return{query:e.location.query.q&&decodeURIComponent(e.location.query.q)}})))(Object(O.a)(Ne)),Fe=t("JOyW"),we=function(e){function DiscussionsNotification(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).state={isVisible:!0},t}a()(DiscussionsNotification,e);var t=DiscussionsNotification.prototype;return t.handleDismiss=function handleDismiss(){this.setState({isVisible:!1})},t.render=function render(){var e=this,t;return this.state.isVisible&&Object(c.d)("div",{className:"rc-WelcomeNotifications"},Object(c.d)(Fe.a,{trackingName:"subscribed_to_digest_notification",type:"info",message:N()("You have been successfully subscribed to the digest."),isDismissible:!0,onDismiss:function onDismiss(){return e.handleDismiss()}}))},DiscussionsNotification}(u.Component),Ie=t("8cuT"),Pe=t("zXDh"),qe=t("fAYU"),Re=t("KXbA"),Ve=t("9A5E"),Be,Ee;function DiscussionsGuidelines(){var e=Object(Pe.isRightToLeft)(N.a.getLocale())?"".concat(Pe.supportPageLocale.ar,"/"):"",t="https://learner.coursera.help/hc/".concat(e,"articles/208280036"),n=Object(j.a)();return Object(c.d)("div",{className:"rc-DiscussionsGuidelines",css:Object(c.c)(Be||(Be=s()(["\n        margin: ",";\n      "])),n.spacing(16,0,0,0))},Object(c.d)(qe.a,{variant:"quiet",typographyVariant:"body1",icon:Ee||(Ee=Object(c.d)(Re.a,{size:"small"})),iconPosition:"after",component:Ve.a,trackingName:"DiscussionsGuidelines",href:t,target:"_blank","aria-label":N()("Forum guidelines link opens in a new tab.")},N()("Forum guidelines")))}var We=DiscussionsGuidelines,He,Ye,Me;function DiscussionsDescription(e){var t=Object(j.a)(),n=Object(c.d)(T.a,{className:"description"},N()("Welcome to the discussion forums!\n            Ask questions, debate ideas, and find classmates who share your goals.\n            Browse popular threads below or other forums in the sidebar."));if(e.courseForums&&e.courseForums.length){var i=e.courseForums.find((function(e){return e.forumType.typeName===R.p.rootForumType}));i&&!A.b.isEmpty(i.description)&&(n=Object(c.d)(S.a,{cml:i.description,isCdsEnabled:!0}))}return Object(c.d)(ContentBlock,{className:"rc-DiscussionsDescription",css:Object(c.c)(He||(He=s()(["\n        padding: ",";\n        margin: ",";\n      "])),t.spacing(24),t.spacing(0,0,24,0))},Object(c.d)(T.a,{variant:"h2semibold",css:Object(c.c)(Ye||(Ye=s()(["\n          margin: ",";\n        "])),t.spacing(0,0,16,0))},N()("Description")),n,Me||(Me=Object(c.d)(We,null)))}var Ue=Object(p.compose)(Object(Ie.a)(["CourseStore"],(function(e){var t=e.CourseStore;return{courseId:t.getCourseId(),courseSlug:t.getCourseSlug()}})),Object(R.k)({fields:["description","forumType"]}))(DiscussionsDescription),Qe=t("jJ30"),Je=t("qiY+"),_e=function(e){function DiscussionsModerators(){return e.apply(this,arguments)||this}a()(DiscussionsModerators,e);var t=DiscussionsModerators.prototype;return t.componentWillMount=function componentWillMount(){var e=this.props.courseId;this.props.staffSocialProfiles.length||this.context.executeAction(Qe.b,{courseId:e})},t.render=function render(){if(!this.props.staffSocialProfiles)return null;var e;if(!this.props.staffSocialProfiles.find((function(e){return e.courseRole===Je.a.MENTOR||e.courseRole===Je.a.TEACHING_STAFF||e.courseRole===Je.a.COURSE_ASSISTANT})))return null;var t=this.props.theme,n=Object(c.c)({padding:t.spacing(24),"ul.moderator-list li.staff-profile-container .rc-ProfileImage .c-profile-initials":se()({},t.typography.body1),".moderator-list":{display:"flex",flexFlow:"row",flexWrap:"wrap",padding:t.spacing(16,0,0,0),".staff-profile-container":{position:"relative",display:"inline-block",margin:t.spacing(0,16,12,0)}}});return Object(c.d)("div",{css:n,className:"rc-DiscussionsModerators card-no-action"},Object(c.d)(T.a,{variant:"h2semibold"},N()("Moderators")),Object(c.d)("ul",{className:"moderator-list"},this.props.staffSocialProfiles.map((function(e){return Object(c.d)("li",{className:"staff-profile-container",key:e.id},Object(c.d)(R.f,{courseRole:e.courseRole,externalUserId:e.externalUserId,fullName:e.fullName,helperStatus:e.helperStatus,profileImageUrl:e.photoUrl}))}))))},DiscussionsModerators}(u.Component);_e.contextTypes={executeAction:d.a.func.isRequired};var Ge=Object(p.compose)(Object(Ie.a)(["CourseStore","ClassmatesProfileStore"],(function(e){var t=e.CourseStore,n=e.ClassmatesProfileStore;return{courseId:t.getCourseId(),staffSocialProfiles:n.getStaffProfiles()}})))(Object(O.a)(_e)),Ke,Xe,ze,Ze,$e,et=function(e){function DiscussionsSideColumn(){return e.apply(this,arguments)||this}var t;return a()(DiscussionsSideColumn,e),DiscussionsSideColumn.prototype.render=function render(){var e=this.props.className;return Object(c.d)("div",{className:Q()("rc-DiscussionsSideColumn",e)},Ke||(Ke=Object(c.d)(R.h,null)),Xe||(Xe=Object(c.d)(g.a,{smDown:!0},Object(c.d)(R.c,null))),ze||(ze=Object(c.d)(Ue,null)),Ze||(Ze=Object(c.d)(Ge,null)))},DiscussionsSideColumn}(u.Component),tt=t("15pW"),nt=t("ZJgU"),st=t("q5zD"),it=t("cK2b"),ot,rt=function(e){function LandingPageSearchResultsSummary(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).cancelSearchResults=function(){t.context.router.push({pathname:t.context.router.location.pathname,params:t.context.router.params,query:{}})},t}var t;return a()(LandingPageSearchResultsSummary,e),LandingPageSearchResultsSummary.prototype.render=function render(){var e=this.props,t=e.numResults,n=e.query,s=e.loadingState;if(!n)return null;return Object(c.d)(f.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageSearchResultsSummary "},Object(c.d)(T.a,{className:"search-results","aria-live":"polite",id:"landing-page-search-results"},s===R.o.DONE?Object(c.d)(k.a,{message:N()("{numResults} {numResults, plural,\n              =1 {search result} =0 {0 search results} other {search results}} for {query}"),numResults:t,query:Object(c.d)("strong",null,n)}):Object(c.d)(k.b,{message:N()("Loading search results...")})),Object(c.d)(nt.a,{type:"button",onClick:this.cancelSearchResults,variant:"ghost","data-e2e":"cancel-search-button"},ot||(ot=Object(c.d)(st.a,{name:"close",className:"color-secondary-text"}))))},LandingPageSearchResultsSummary}(u.Component);rt.propTypes={id:d.a.string,query:d.a.string,numResults:d.a.number,loadingState:d.a.oneOf(Object.keys(R.o))},rt.contextTypes={router:d.a.object.isRequired};var at=Object(p.compose)(Object(b.a)((function(e){return{query:e.location.query.q&&decodeURIComponent(e.location.query.q)}})),Object(Ie.a)(["DiscussionsSearchStore"],(function(e,t){var n=e.DiscussionsSearchStore;return{numResults:n.getNumResults({forumId:t.id,query:t.query}),loadingState:n.loadingState}})))(rt),ct=t("BZ+2"),ut=t("tmK+"),lt=function(e){function LandingPageThreadsViewWrapper(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).styles=function(){return{width:"100%","div.rc-LandingPageThreadsViewWrapper":{maxWidth:"unset","div.forum-info.caption-text.color-secondary-text":se()(se()({},t.props.theme.typography.body1),{},{position:"relative",left:"-33px"}),"div.headline-1-text.question-title.color-primary-text.question-title-bold":se()({},t.props.theme.typography.h3bold),"& .rc-ThreadBadge.bgcolor-accent-brown-light":se()(se()({},t.props.theme.typography.h4bold),{},{backgroundColor:t.props.theme.palette.purple[50],color:t.props.theme.palette.purple[700]}),"& li.rc-ThreadsListEntry .cif-stack.pin-container":{height:"24px",width:"24px",margin:t.props.theme.spacing(0,8,0,0),position:"relative",top:"24px","& .cif-circle.cif-stack-2x.pin-background":{"&:before":{content:"none"},backgroundColor:t.props.theme.palette.yellow[500],borderRadius:"100%",height:"24px",width:"24px"},"& .cif-pin.cif-stack-lg.pin-icon":{margin:0,position:"relative",top:"-7px"}},"& .rc-Metadata.entry-metadata.caption-text.color-secondary-text":se()({},t.props.theme.typography.body2),"& .rc-ProfileName.nostyle.pii-hide":se()(se()({},t.props.theme.typography.h4bold),{},{color:t.props.theme.palette.blue[600]}),"& .ThreadListEntry button.c-new-thread-button.secondary":se()({},t.props.theme),".rc-DiscussionsBody, .rc-DiscussionsSearchResults":{width:"100%"},".rc-LandingPageSearchResultsSummary":{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:t.props.theme.palette.blue[50]}}}},t}var t;return a()(LandingPageThreadsViewWrapper,e),LandingPageThreadsViewWrapper.prototype.render=function render(){if(!this.props.currentForum)return null;var e=h.a.join(tt.d.learnRoot,this.props.courseSlug,this.props.currentForum.link);return Object(c.d)(f.a,{container:!0,item:!0,xs:12,className:"rc-LandingPageThreadsViewWrapper"},Object(c.d)(at,{id:this.props.currentForum.forumId}),Object(c.d)(R.b,{backLink:e}))},LandingPageThreadsViewWrapper}(u.Component);lt.propTypes={search:d.a.string,currentForum:d.a.instanceOf(ct.a),courseSlug:d.a.string};var dt=Object(p.compose)(Object(R.k)({fields:["link"]}),Object(b.a)(R.q))(lt),pt,mt,bt,ft,gt;t.d(e,"DiscussionsLandingPage",(function(){return Ot}));var Ot=function(e){function DiscussionsLandingPage(){for(var t,n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))||this).layoutCss={},t.layoutStyle=function(e){var n;return n={},o()(n,t.props.theme.breakpoints.up("sm"),{".mainColumn .rc-DiscussionsLandingPage":{margin:0}}),o()(n,t.props.theme.breakpoints.down("sm"),{".mainColumn":{padding:e.spacing(0),margin:e.spacing(0,0,48,0)}}),o()(n,".columnContainer",{paddingTop:t.props.theme.spacing(0)}),n},t}a()(DiscussionsLandingPage,e);var t=DiscussionsLandingPage.prototype;return t.getChildContext=function getChildContext(){return{courseId:this.props.courseId,userId:this.props.userId.toString()}},t.componentDidMount=function componentDidMount(){var e=this.props,t=e.addToHelper,n=e.userId,s=e.courseId,i=e.maybeAddHelpers,o;t&&i({variables:{helperId:"".concat(n,"~").concat(s)}})},t.render=function render(){var e=this.props.addToHelper;return Object(c.d)(f.a,{css:this.layoutStyle(this.props.theme),container:!0,item:!0,xs:12,className:"rc-DiscussionsLandingPage",spacing:24},e&&(pt||(pt=Object(c.d)(f.a,{item:!0,xs:12},Object(c.d)(we,null)))),mt||(mt=Object(c.d)(f.a,{item:!0,xs:12},Object(c.d)(M,null))),Object(c.d)(g.a,{mdUp:!0,css:Object(c.c)(bt||(bt=s()(["\n            margin: ",";\n            width: 100%;\n          "])),this.props.theme.spacing(0,12,0,12))},ft||(ft=Object(c.d)(R.c,null))),gt||(gt=Object(c.d)(f.a,{className:"columnContainer",container:!0,item:!0,xs:12,justifyContent:"space-between"},Object(c.d)(f.a,{item:!0,className:"mainColumn",xs:12,md:9,spacing:32},Object(c.d)(Le,null)),Object(c.d)(f.a,{item:!0,xs:12,md:3},Object(c.d)(et,null)))))},DiscussionsLandingPage}(u.Component);Ot.childContextTypes={courseId:d.a.string,userId:d.a.string};var ht=e.default=Object(p.compose)(Object(R.k)({fields:[],subcomponents:[W,ye,dt]}),Object(b.a)((function(e){var t;return{addToHelper:"true"===e.location.query.addToHelper}})),R.r)(Object(O.a)(Ot))},"4vdf":function(module,exports,e){},"9M8W":function(module,exports,e){e("+tS/")},AEB4:function(module,exports,e){e("ftHD")},HjX4:function(module,exports,e){e("Jg71")},HkWL:function(module,exports,e){e("4vdf")},JBNF:function(module,exports,e){e("lio+")},JOyW:function(module,e,t){"use strict";var n=t("pVnL"),s=t.n(n),i=t("VbXa"),o=t.n(i),r=t("q1tI"),a=t.n(r),c=t("IqPN"),u=t("sOkY"),l=t("AEB4"),d=t.n(l),p=function(e){function InContextNotification(){return e.apply(this,arguments)||this}var t;return o()(InContextNotification,e),InContextNotification.prototype.render=function render(){var e=this.props.trackingName;return(r.createElement(u.a,{trackClicks:!1,withVisibilityTracking:!0,trackingName:e,className:"rc-InContextNotification body-1-text"},r.createElement(c.a,s()({},this.props,{htmlAttributes:{"data-classname":"in-context-notification"}}))))},InContextNotification}(r.Component);e.a=p},Jg71:function(module,exports,e){},O2fD:function(module,exports,e){},a9ka:function(module,exports,e){e("rnpO")},cK2b:function(module,exports,e){e("sX3l")},ftHD:function(module,exports,e){},"lio+":function(module,exports,e){},rnpO:function(module,exports,e){},sX3l:function(module,exports,e){},"tmK+":function(module,exports,e){e("O2fD")}}]);
//# sourceMappingURL=65.14039b995331aeefbe1f.js.map