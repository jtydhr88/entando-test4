(this["webpackJsonpmost-used-apps"]=this["webpackJsonpmost-used-apps"]||[]).push([[0],{160:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"apps":{"widgetTitle":"Most Used Apps"},"common":{"name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."}}')},161:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"apps":{"widgetTitle":"App piu\' utilizzate"},"common":{"contentTitle":"Content Type field","categoryTitle":"Category field","widgetName":"Cronache recenti","name":"Nome","value":"Valore","loading":"Caricamento in corso...","notAuthenticated":"L\'utente non \xe8 autenticato."}}')},280:function(e,t,r){"use strict";r.r(t);r(175);var a=r(1),o=r(43),n=r(44),i=r(45),c=r(48),p=r(10),d=r(168),l=r(0),s=r(144),u=r.n(s),x=r(99),b=r.n(x),g=r(2),h=Object(l.createContext)(null),m="keycloak",f=function(){var e=window.entando||{},t=!!e.keycloak;return t?Object(a.a)(Object(a.a)({},e.keycloak),{},{initialized:t}):{initialized:t}};function O(e){var t=e.children,r=Object(l.useState)(Object(a.a)(Object(a.a)({},f()),{},{initialized:!0})),o=Object(p.a)(r,2),n=o[0],i=o[1];return Object(l.useEffect)((function(){var e=function(){i(Object(a.a)(Object(a.a)({},f()),{},{initialized:!0}))};return window.addEventListener(m,e),function(){window.removeEventListener(m,e)}}),[]),Object(g.jsx)(h.Provider,{value:Object(a.a)(Object(a.a)({},n),{},{get user(){return n?{preferredName:b()(n,"idTokenParsed.preferred_username"),email:b()(n,"idTokenParsed.email")}:null}}),children:t})}var y=function(){return Object(l.useContext)(h)},j=r(304),v=r(167),k=r(295),M=r(300),C=r(8),w=r.n(C);var F=r(290);function S(e,t){return"linear-gradient(to bottom, ".concat(e,", ").concat(t,")")}var z={0:"#FFFFFF",100:"#F9FAFB",200:"#F4F6F8",300:"#DFE3E8",400:"#C4CDD5",500:"#919EAB",600:"#637381",700:"#454F5B",800:"#212B36",900:"#161C24",5008:Object(F.a)("#919EAB",.08),50012:Object(F.a)("#919EAB",.12),50016:Object(F.a)("#919EAB",.16),50024:Object(F.a)("#919EAB",.24),50032:Object(F.a)("#919EAB",.32),50048:Object(F.a)("#919EAB",.48),50056:Object(F.a)("#919EAB",.56),50080:Object(F.a)("#919EAB",.8)},T={lighter:"#C8FACD",light:"#5BE584",main:"#00AB55",dark:"#007B55",darker:"#005249",contrastText:"#fff"},A={lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A",contrastText:"#fff"},B={lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D",contrastText:z[800]},R={lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01",contrastText:z[800]},E={lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E",contrastText:"#fff"},I={primary:S(T.light,T.main),info:S(A.light,A.main),success:S(B.light,B.main),warning:S(R.light,R.main),error:S(E.light,E.main)},D={common:{black:"#000",white:"#fff"},primary:Object(a.a)({},T),secondary:Object(a.a)({},{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A",contrastText:"#fff"}),info:Object(a.a)({},A),success:Object(a.a)({},B),warning:Object(a.a)({},R),error:Object(a.a)({},E),grey:z,gradients:I,chart:{violet:["#826AF9","#9E86FF","#D0AEFF","#F7D2FF"],blue:["#2D99FF","#83CFFF","#A5F3FF","#CCFAFF"],green:["#2CD9C5","#60F1C8","#A4F7CC","#C0F2DC"],yellow:["#FFE700","#FFEF5A","#FFF7AE","#FFF3D6"],red:["#FF6C40","#FF8F6D","#FFBD98","#FFF2D4"]},divider:z[50024],action:{hover:z[5008],selected:z[50016],disabled:z[50080],disabledBackground:z[50024],focus:z[50024],hoverOpacity:.08,disabledOpacity:.48}},P={light:Object(a.a)(Object(a.a)({},D),{},{text:{primary:z[800],secondary:z[600],disabled:z[500]},background:{paper:"#fff",default:"#fff",neutral:z[200]},action:Object(a.a)({active:z[600]},D.action)}),dark:Object(a.a)(Object(a.a)({},D),{},{text:{primary:"#fff",secondary:z[500],disabled:z[600]},background:{paper:z[800],default:z[900],neutral:z[50016]},action:Object(a.a)({active:z[500]},D.action)})},L=[Object(a.a)({name:"default"},P.light.primary),{name:"purple",lighter:"#EBD6FD",light:"#B985F4",main:"#7635dc",dark:"#431A9E",darker:"#200A69",contrastText:"#fff"},{name:"cyan",lighter:"#D1FFFC",light:"#76F2FF",main:"#1CCAFF",dark:"#0E77B7",darker:"#053D7A",contrastText:P.light.grey[800]},{name:"blue",lighter:"#CCDFFF",light:"#6697FF",main:"#0045FF",dark:"#0027B7",darker:"#00137A",contrastText:"#fff"},{name:"orange",lighter:"#FEF4D4",light:"#FED680",main:"#fda92d",dark:"#B66816",darker:"#793908",contrastText:P.light.grey[800]},{name:"red",lighter:"#FFE3D5",light:"#FFC1AC",main:"#FF3030",dark:"#B71833",darker:"#7A0930",contrastText:"#fff"}];function W(e){var t,r=L[0],a=L[1],o=L[2],n=L[3],i=L[4],c=L[5];switch(e){case"purple":t=a;break;case"cyan":t=o;break;case"blue":t=n;break;case"orange":t=i;break;case"red":t=c;break;default:t=r}return t}W.propTypes={themeColor:w.a.oneOf(["default","purple","cyan","blue","orange","red"])};var H={themeMode:"light",themeDirection:"ltr",themeColor:"default",themeStretch:!1,onChangeMode:function(){},onChangeDirection:function(){},onChangeColor:function(){},onToggleStretch:function(){},setColor:L[0],colorOption:[]},G=Object(l.createContext)(H);var N=function(){return Object(l.useContext)(G)},_={borderRadius:8,borderRadiusSm:12,borderRadiusMd:16};function V(e){return"".concat(e/16,"rem")}function U(e){var t=e.sm,r=e.md,a=e.lg;return{"@media (min-width:600px)":{fontSize:V(t)},"@media (min-width:900px)":{fontSize:V(r)},"@media (min-width:1200px)":{fontSize:V(a)}}}var J={fontFamily:"Public Sans, sans-serif",fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700,h1:Object(a.a)({fontWeight:700,lineHeight:1.25,fontSize:V(40)},U({sm:52,md:58,lg:64})),h2:Object(a.a)({fontWeight:700,lineHeight:64/48,fontSize:V(32)},U({sm:40,md:44,lg:48})),h3:Object(a.a)({fontWeight:700,lineHeight:1.5,fontSize:V(24)},U({sm:26,md:30,lg:32})),h4:Object(a.a)({fontWeight:700,lineHeight:1.5,fontSize:V(20)},U({sm:20,md:24,lg:24})),h5:Object(a.a)({fontWeight:700,lineHeight:1.5,fontSize:V(18)},U({sm:19,md:20,lg:20})),h6:Object(a.a)({fontWeight:700,lineHeight:28/18,fontSize:V(17)},U({sm:18,md:18,lg:18})),subtitle1:{fontWeight:600,lineHeight:1.5,fontSize:V(16)},subtitle2:{fontWeight:600,lineHeight:22/14,fontSize:V(14)},body1:{lineHeight:1.5,fontSize:V(16)},body2:{lineHeight:22/14,fontSize:V(14)},caption:{lineHeight:1.5,fontSize:V(12)},overline:{fontWeight:700,lineHeight:1.5,fontSize:V(12),letterSpacing:1.1,textTransform:"uppercase"},button:{fontWeight:700,lineHeight:24/14,fontSize:V(14),textTransform:"capitalize"}},K={values:{xs:0,sm:600,md:900,lg:1200,xl:1536}},X=r(145);var q=r(21),Q=r(146),Y=r.n(Q);var Z=r(147),$=r.n(Z),ee=r(148),te=r.n(ee),re=r(149),ae=r.n(re),oe=r(150),ne=r.n(oe);var ie=r(151),ce=r.n(ie),pe=r(302),de={width:20,height:20},le={width:28,height:28},se=Object(g.jsx)(pe.a,{children:Object(g.jsx)(q.a,{icon:ce.a})});var ue=r(154),xe=r.n(ue);var be=r(155),ge=r.n(be),he=r(156),me=r.n(he),fe=r(157),Oe=r.n(fe),ye=r(303),je={width:20,height:20};function ve(e){return Object(g.jsx)(pe.a,Object(a.a)(Object(a.a)({},e),{},{children:Object(g.jsx)("path",{d:"M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm0 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"})}))}function ke(e){return Object(g.jsx)(pe.a,Object(a.a)(Object(a.a)({},e),{},{children:Object(g.jsx)("path",{d:"M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.372 4.972a1.006 1.006 0 00-.928.388l-3.78 5-1.63-2.08a1.001 1.001 0 00-1.58 1.23l2.44 3.11a1 1 0 001.58-.01l4.57-6v-.03a1.006 1.006 0 00-.672-1.608z"})}))}function Me(e){return Object(g.jsx)(pe.a,Object(a.a)(Object(a.a)({},e),{},{children:Object(g.jsx)("path",{d:"M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.75 8h-6.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75z"})}))}function Ce(e){return Object(X.merge)(function(e){return{MuiFab:{defaultProps:{color:"primary"},styleOverrides:{root:{boxShadow:e.customShadows.z8,"&:hover":{boxShadow:"none",backgroundColor:e.palette.grey[400]}},primary:{boxShadow:e.customShadows.primary,"&:hover":{backgroundColor:e.palette.primary.dark}},secondary:{boxShadow:e.customShadows.secondary,"&:hover":{backgroundColor:e.palette.secondary.dark}},extended:{"& svg":{marginRight:e.spacing(1)}}}}}}(e),function(e){return{MuiTab:{styleOverrides:{root:{padding:0,fontWeight:e.typography.fontWeightMedium,borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius,"&.Mui-selected":{color:e.palette.text.primary},"&:not(:last-of-type)":{marginRight:e.spacing(5)},"@media (min-width: 600px)":{minWidth:48}},labelIcon:{minHeight:48,flexDirection:"row","& > *:first-of-type":{marginBottom:0,marginRight:e.spacing(1)}},wrapper:{flexDirection:"row",whiteSpace:"nowrap"},textColorInherit:{opacity:1,color:e.palette.text.secondary}}},MuiTabPanel:{styleOverrides:{root:{padding:0}}},MuiTabScrollButton:{styleOverrides:{root:{width:48,borderRadius:"50%"}}}}}(e),function(e){return{MuiChip:{defaultProps:{deleteIcon:Object(g.jsx)(q.a,{icon:Y.a})},styleOverrides:{colorDefault:{"& .MuiChip-avatarMedium, .MuiChip-avatarSmall":{color:e.palette.text.secondary}},outlined:{borderColor:e.palette.grey[50032],"&.MuiChip-colorPrimary":{borderColor:e.palette.primary.main},"&.MuiChip-colorSecondary":{borderColor:e.palette.secondary.main}},avatarColorInfo:{color:e.palette.info.contrastText,backgroundColor:e.palette.info.dark},avatarColorSuccess:{color:e.palette.success.contrastText,backgroundColor:e.palette.success.dark},avatarColorWarning:{color:e.palette.warning.contrastText,backgroundColor:e.palette.warning.dark},avatarColorError:{color:e.palette.error.contrastText,backgroundColor:e.palette.error.dark}}}}}(e),function(e){return{MuiCard:{styleOverrides:{root:{boxShadow:e.customShadows.z16,borderRadius:e.shape.borderRadiusMd,position:"relative",zIndex:0}}},MuiCardHeader:{defaultProps:{titleTypographyProps:{variant:"h6"},subheaderTypographyProps:{variant:"body2",marginTop:e.spacing(.5)}},styleOverrides:{root:{padding:e.spacing(3,3,0)}}},MuiCardContent:{styleOverrides:{root:{padding:e.spacing(3)}}}}}(e),function(e){return{MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}}}}}}}(e),{MuiGrid:{styleOverrides:{}}},{MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{}}}},function(e){return{MuiInputBase:{styleOverrides:{root:{"&.Mui-disabled":{"& svg":{color:e.palette.text.disabled}}},input:{"&::placeholder":{opacity:1,color:e.palette.text.disabled}}}},MuiInput:{styleOverrides:{underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiFilledInput:{styleOverrides:{root:{backgroundColor:e.palette.grey[50012],"&:hover":{backgroundColor:e.palette.grey[50016]},"&.Mui-focused":{backgroundColor:e.palette.action.focus},"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},underline:{"&:before":{borderBottomColor:e.palette.grey[50056]}}}},MuiOutlinedInput:{styleOverrides:{root:{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.grey[50032]},"&.Mui-disabled":{"& .MuiOutlinedInput-notchedOutline":{borderColor:e.palette.action.disabledBackground}}}}}}}(e),function(e){return{MuiRadio:{styleOverrides:{root:{padding:e.spacing(1),svg:{fontSize:24,"&[font-size=small]":{fontSize:20}}}}}}}(e),{MuiBadge:{styleOverrides:{dot:{width:10,height:10,borderRadius:"50%"}}}},function(e){return{MuiListItemIcon:{styleOverrides:{root:{color:"inherit",minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemAvatar:{styleOverrides:{root:{minWidth:"auto",marginRight:e.spacing(2)}}},MuiListItemText:{styleOverrides:{root:{marginTop:0,marginBottom:0},multiline:{marginTop:0,marginBottom:0}}}}}(e),function(e){return{MuiTableRow:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:e.palette.action.selected,"&:hover":{backgroundColor:e.palette.action.hover}}}}},MuiTableCell:{styleOverrides:{root:{borderBottom:"none"},head:{color:e.palette.text.secondary,backgroundColor:e.palette.background.neutral,"&:first-of-type":{paddingLeft:e.spacing(3),borderTopLeftRadius:e.shape.borderRadius,borderBottomLeftRadius:e.shape.borderRadius,boxShadow:"inset 8px 0 0 ".concat(e.palette.background.paper)},"&:last-of-type":{paddingRight:e.spacing(3),borderTopRightRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,boxShadow:"inset -8px 0 0 ".concat(e.palette.background.paper)}},stickyHeader:{backgroundColor:e.palette.background.paper,backgroundImage:"linear-gradient(to bottom, ".concat(e.palette.background.neutral," 0%, ").concat(e.palette.background.neutral," 100%)")},body:{"&:first-of-type":{paddingLeft:e.spacing(3)},"&:last-of-type":{paddingRight:e.spacing(3)}}}},MuiTablePagination:{styleOverrides:{root:{borderTop:"solid 1px ".concat(e.palette.divider)},toolbar:{height:64},select:{"&:focus":{borderRadius:e.shape.borderRadius}},selectIcon:{width:20,height:20,marginTop:2}}}}}(e),{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"}}}},function(e){var t="light"===e.palette.mode,r=function(r){return{color:e.palette[r][t?"darker":"lighter"],backgroundColor:e.palette[r][t?"lighter":"darker"],"& .MuiAlert-icon":{color:e.palette[r][t?"main":"light"]}}},a=function(t){return{color:e.palette[t].contrastText}},o=function(r){return{color:e.palette[r][t?"darker":"lighter"],border:"solid 1px ".concat(e.palette[r][t?"light":"dark"]),backgroundColor:e.palette[r][t?"lighter":"darker"],"& .MuiAlert-icon":{color:e.palette[r][t?"main":"light"]}}};return{MuiAlert:{defaultProps:{iconMapping:{error:Object(g.jsx)(q.a,{icon:$.a}),info:Object(g.jsx)(q.a,{icon:te.a}),success:Object(g.jsx)(q.a,{icon:ne.a}),warning:Object(g.jsx)(q.a,{icon:ae.a})}},styleOverrides:{message:{"& .MuiAlertTitle-root":{marginBottom:e.spacing(.5)}},action:{"& button:not(:first-of-type)":{marginLeft:e.spacing(1)}},standardInfo:r("info"),standardSuccess:r("success"),standardWarning:r("warning"),standardError:r("error"),filledInfo:a("info"),filledSuccess:a("success"),filledWarning:a("warning"),filledError:a("error"),outlinedInfo:o("info"),outlinedSuccess:o("success"),outlinedWarning:o("warning"),outlinedError:o("error")}}}}(e),function(e){var t="light"===e.palette.mode;return{MuiSwitch:{styleOverrides:{thumb:{boxShadow:e.customShadows.z1},track:{opacity:1,backgroundColor:e.palette.grey[500]},switchBase:{left:0,right:"auto","&:not(:.Mui-checked)":{color:e.palette.grey[t?100:300]},"&.Mui-checked.Mui-disabled, &.Mui-disabled":{color:e.palette.grey[t?400:600]},"&.Mui-disabled+.MuiSwitch-track":{opacity:1,backgroundColor:"".concat(e.palette.action.disabledBackground," !important")}}}}}}(e),{MuiSelect:{defaultProps:{IconComponent:xe.a},styleOverrides:{root:{}}}},function(e){return{MuiButton:{styleOverrides:{root:{"&:hover":{boxShadow:"none"}},sizeLarge:{height:48},containedInherit:{color:e.palette.grey[800],boxShadow:e.customShadows.z8,"&:hover":{backgroundColor:e.palette.grey[400]}},containedPrimary:{boxShadow:e.customShadows.primary},containedSecondary:{boxShadow:e.customShadows.secondary},containedInfo:{boxShadow:e.customShadows.info},containedSuccess:{boxShadow:e.customShadows.success},containedWarning:{boxShadow:e.customShadows.warning},containedError:{boxShadow:e.customShadows.error},outlinedInherit:{border:"1px solid ".concat(e.palette.grey[50032]),"&:hover":{backgroundColor:e.palette.action.hover}},textInherit:{"&:hover":{backgroundColor:e.palette.action.hover}}}}}}(e),function(e){return{MuiRating:{defaultProps:{emptyIcon:se,icon:se},styleOverrides:{root:{"&.Mui-disabled":{opacity:.48}},iconEmpty:{color:e.palette.grey[50048]},sizeSmall:{"& svg":Object(a.a)({},de)},sizeLarge:{"& svg":Object(a.a)({},le)}}}}}(e),function(e){return{MuiDialog:{styleOverrides:{paper:{boxShadow:e.customShadows.z24,"&.MuiPaper-rounded":{borderRadius:e.shape.borderRadiusMd},"&.MuiDialog-paperFullScreen":{borderRadius:0},"&.MuiDialog-paper .MuiDialogActions-root":{padding:e.spacing(3)},"@media (max-width: 600px)":{margin:e.spacing(2)},"@media (max-width: 663.95px)":{"&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody":{maxWidth:"100%"}}},paperFullWidth:{width:"100%"}}},MuiDialogTitle:{styleOverrides:{root:{padding:e.spacing(3,3,0)}}},MuiDialogContent:{styleOverrides:{root:{borderTop:0,borderBottom:0,padding:e.spacing(3)}}},MuiDialogActions:{styleOverrides:{root:{"& > :not(:first-of-type)":{marginLeft:e.spacing(1.5)}}}}}}(e),function(e){return{MuiAvatar:{styleOverrides:{colorDefault:{color:e.palette.text.secondary,backgroundColor:e.palette.grey[400]}}},MuiAvatarGroup:{styleOverrides:{avatar:{fontSize:16,fontWeight:e.typography.fontWeightMedium,"&:first-of-type":{fontSize:14,color:e.palette.primary.main,backgroundColor:e.palette.primary.lighter}}}}}}(e),function(e){var t="light"===e.palette.mode;return{MuiSlider:{defaultProps:{size:"small"},styleOverrides:{root:{"&.Mui-disabled":{color:e.palette.action.disabled}},markLabel:{fontSize:13,color:e.palette.text.disabled},valueLabel:{borderRadius:8,backgroundColor:e.palette.grey[t?800:700]}}}}}(e),function(e){var t="light"===e.palette.mode;return{MuiDrawer:{styleOverrides:{modal:{'&[role="presentation"]':{"& .MuiDrawer-paperAnchorLeft":{boxShadow:"8px 24px 24px 12px ".concat(Object(F.a)(e.palette.grey[900],t?.16:.48))},"& .MuiDrawer-paperAnchorRight":{boxShadow:"-8px 24px 24px 12px ".concat(Object(F.a)(e.palette.grey[900],t?.16:.48))}}}}}}}(e),{},function(e){return{MuiStepConnector:{styleOverrides:{line:{borderColor:e.palette.divider}}}}}(e),function(e){var t="light"===e.palette.mode;return{MuiTooltip:{styleOverrides:{tooltip:{backgroundColor:e.palette.grey[t?800:700]},arrow:{color:e.palette.grey[t?800:700]}}}}}(e),function(e){return{MuiPopover:{styleOverrides:{paper:{boxShadow:e.customShadows.z12}}}}}(e),{MuiSvgIcon:{styleOverrides:{fontSizeSmall:{width:20,height:20,fontSize:"inherit"},fontSizeLarge:{width:32,height:32,fontSize:"inherit"}}}},function(e){return{MuiCheckbox:{defaultProps:{icon:Object(g.jsx)(ve,{}),checkedIcon:Object(g.jsx)(ke,{}),indeterminateIcon:Object(g.jsx)(Me,{})},styleOverrides:{root:{padding:e.spacing(1),"&.Mui-checked.Mui-disabled, &.Mui-disabled":{color:e.palette.action.disabled},"& .MuiSvgIcon-fontSizeMedium":{width:24,height:24},"& .MuiSvgIcon-fontSizeSmall":{width:20,height:20},svg:{fontSize:24,"&[font-size=small]":{fontSize:20}}}}}}}(e),function(e){return{MuiDataGrid:{styleOverrides:{root:{borderRadius:0,border:"1px solid transparent","& .MuiTablePagination-root":{borderTop:0},"& .MuiDataGrid-toolbarContainer":{padding:e.spacing(2),backgroundColor:e.palette.background.neutral,"& .MuiButton-root":{marginRight:e.spacing(1.5),color:e.palette.text.primary,"&:hover":{backgroundColor:e.palette.action.hover}}},"& .MuiDataGrid-cell, .MuiDataGrid-columnsContainer":{borderBottom:"1px solid ".concat(e.palette.divider)},"& .MuiDataGrid-columnSeparator":{color:e.palette.divider},'& .MuiDataGrid-columnHeader[data-field="__check__"]':{padding:0}}}},MuiGridMenu:{styleOverrides:{root:{"& .MuiDataGrid-gridMenuList":{boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius},"& .MuiMenuItem-root":Object(a.a)({},e.typography.body2)}}},MuiGridFilterForm:{styleOverrides:{root:{padding:e.spacing(1.5,0),"& .MuiFormControl-root":{margin:e.spacing(0,.5)},"& .MuiInput-root":{marginTop:e.spacing(3),"&::before, &::after":{display:"none"},"& .MuiNativeSelect-select, .MuiInput-input":Object(a.a)(Object(a.a)({},e.typography.body2),{},{padding:e.spacing(.75,1),borderRadius:e.shape.borderRadius,backgroundColor:e.palette.background.neutral}),"& .MuiSvgIcon-root":{right:4}}}}},MuiGridPanelFooter:{styleOverrides:{root:{padding:e.spacing(2),justifyContent:"flex-end","& .MuiButton-root":{"&:first-of-type":{marginRight:e.spacing(1.5),color:e.palette.text.primary,"&:hover":{backgroundColor:e.palette.action.hover}},"&:last-of-type":{color:e.palette.common.white,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark}}}}}}}}(e),function(e){return{MuiSkeleton:{defaultProps:{animation:"wave"},styleOverrides:{root:{backgroundColor:e.palette.background.neutral}}}}}(e),function(e){return{MuiTimelineDot:{styleOverrides:{root:{boxShadow:"none"}}},MuiTimelineConnector:{styleOverrides:{root:{backgroundColor:e.palette.divider}}}}}(e),function(e){return{MuiTreeView:{defaultProps:{defaultCollapseIcon:Object(g.jsx)(q.a,Object(a.a)({icon:me.a},je)),defaultExpandIcon:Object(g.jsx)(q.a,Object(a.a)({icon:ge.a},je)),defaultEndIcon:Object(g.jsx)(ye.a,Object(a.a)(Object(a.a)({component:q.a,icon:Oe.a},je),{},{sx:{color:"text.secondary"}}))}},MuiTreeItem:{styleOverrides:{label:Object(a.a)({},e.typography.body2),iconContainer:{width:"auto"}}}}}(e),function(e){var t=Object(F.a)(e.palette.grey[900],.48),r=Object(F.a)(e.palette.grey[900],1);return{MuiBackdrop:{styleOverrides:{root:{background:["rgb(22,28,36)","-moz-linear-gradient(75deg, ".concat(t," 0%, ").concat(r," 100%)"),"-webkit-linear-gradient(75deg, ".concat(t," 0%, ").concat(r," 100%)"),"linear-gradient(75deg, ".concat(t," 0%, ").concat(r," 100%)")],"&.MuiBackdrop-invisible":{background:"transparent"}}}}}}(e),{MuiSnackbarContent:{styleOverrides:{root:{}}}},function(e){var t="light"===e.palette.mode;return{MuiLinearProgress:{styleOverrides:{root:{borderRadius:4,overflow:"hidden"},bar:{borderRadius:4},colorPrimary:{backgroundColor:e.palette.primary[t?"lighter":"darker"]},buffer:{backgroundColor:"transparent"}}}}}(e),{MuiContainer:{styleOverrides:{root:{}}}},function(e){return{MuiAccordion:{styleOverrides:{root:{"&.Mui-expanded":{boxShadow:e.customShadows.z8,borderRadius:e.shape.borderRadius},"&.Mui-disabled":{backgroundColor:"transparent"}}}},MuiAccordionSummary:{styleOverrides:{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1),"&.Mui-disabled":{opacity:1,color:e.palette.action.disabled,"& .MuiTypography-root":{color:"inherit"}}},expandIconWrapper:{color:"inherit"}}}}}(e),{MuiIconButton:{styleOverrides:{root:{}}}},function(e){return{MuiTypography:{styleOverrides:{paragraph:{marginBottom:e.spacing(2)},gutterBottom:{marginBottom:e.spacing(1)}}}}}(e),function(e){return{MuiPaginationItem:{styleOverrides:{root:{"&.Mui-selected":{fontWeight:e.typography.fontWeightBold}},textPrimary:{"&.Mui-selected":{color:e.palette.primary.main,backgroundColor:Object(F.a)(e.palette.primary.main,.08),"&:hover, &.Mui-focusVisible":{backgroundColor:"".concat(Object(F.a)(e.palette.primary.main,.24)," !important")}}},outlined:{border:"1px solid ".concat(e.palette.grey[50032])},outlinedPrimary:{"&.Mui-selected":{backgroundColor:Object(F.a)(e.palette.primary.main,.08),border:"1px solid ".concat(Object(F.a)(e.palette.primary.main,.24))}}}}}}(e),function(e){var t=function(t){return{props:{variant:"contained",color:t},style:{boxShadow:e.customShadows[t]}}};return{MuiButtonGroup:{variants:[{props:{variant:"contained",color:"inherit"},style:{boxShadow:e.customShadows.z8}},t("primary"),t("secondary"),t("info"),t("success"),t("warning"),t("error"),{props:{disabled:!0},style:{boxShadow:"none","& .MuiButtonGroup-grouped.Mui-disabled":{color:e.palette.action.disabled,borderColor:"".concat(e.palette.action.disabledBackground," !important"),"&.MuiButton-contained":{backgroundColor:e.palette.action.disabledBackground}}}}],styleOverrides:{root:{"&:hover":{boxShadow:"none"}}}}}}(e),function(e){return{MuiBreadcrumbs:{styleOverrides:{separator:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}}}(e),function(e){return{MuiAutocomplete:{styleOverrides:{paper:{boxShadow:e.customShadows.z20}}}}}(e),function(e){return{MuiFormControlLabel:{styleOverrides:{label:Object(a.a)({},e.typography.body2)}},MuiFormHelperText:{styleOverrides:{root:{marginTop:e.spacing(1)}}},MuiFormLabel:{styleOverrides:{root:{color:e.palette.text.disabled}}}}}(e),function(e){var t="light"===e.palette.mode;return{MuiToggleButton:{styleOverrides:{root:{color:e.palette.grey[500],border:"solid 1px ".concat(e.palette.grey[50032]),"&.Mui-selected":{color:e.palette.grey[t?600:0],backgroundColor:e.palette.action.selected},"&.Mui-disabled":{color:e.palette.grey[50048]}}}}}}(e),{MuiLoadingButton:{styleOverrides:{root:{"&.MuiButton-text":{"& .MuiLoadingButton-startIconPendingStart":{marginLeft:0},"& .MuiLoadingButton-endIconPendingEnd":{marginRight:0}}}}}})}var we=P.light.grey[500],Fe="#000000",Se=function(e){var t=Object(F.a)(e,.2),r=Object(F.a)(e,.14),a=Object(F.a)(e,.12);return["none","0px 2px 1px -1px ".concat(t,",0px 1px 1px 0px ").concat(r,",0px 1px 3px 0px ").concat(a),"0px 3px 1px -2px ".concat(t,",0px 2px 2px 0px ").concat(r,",0px 1px 5px 0px ").concat(a),"0px 3px 3px -2px ".concat(t,",0px 3px 4px 0px ").concat(r,",0px 1px 8px 0px ").concat(a),"0px 2px 4px -1px ".concat(t,",0px 4px 5px 0px ").concat(r,",0px 1px 10px 0px ").concat(a),"0px 3px 5px -1px ".concat(t,",0px 5px 8px 0px ").concat(r,",0px 1px 14px 0px ").concat(a),"0px 3px 5px -1px ".concat(t,",0px 6px 10px 0px ").concat(r,",0px 1px 18px 0px ").concat(a),"0px 4px 5px -2px ".concat(t,",0px 7px 10px 1px ").concat(r,",0px 2px 16px 1px ").concat(a),"0px 5px 5px -3px ".concat(t,",0px 8px 10px 1px ").concat(r,",0px 3px 14px 2px ").concat(a),"0px 5px 6px -3px ".concat(t,",0px 9px 12px 1px ").concat(r,",0px 3px 16px 2px ").concat(a),"0px 6px 6px -3px ".concat(t,",0px 10px 14px 1px ").concat(r,",0px 4px 18px 3px ").concat(a),"0px 6px 7px -4px ".concat(t,",0px 11px 15px 1px ").concat(r,",0px 4px 20px 3px ").concat(a),"0px 7px 8px -4px ".concat(t,",0px 12px 17px 2px ").concat(r,",0px 5px 22px 4px ").concat(a),"0px 7px 8px -4px ".concat(t,",0px 13px 19px 2px ").concat(r,",0px 5px 24px 4px ").concat(a),"0px 7px 9px -4px ".concat(t,",0px 14px 21px 2px ").concat(r,",0px 5px 26px 4px ").concat(a),"0px 8px 9px -5px ".concat(t,",0px 15px 22px 2px ").concat(r,",0px 6px 28px 5px ").concat(a),"0px 8px 10px -5px ".concat(t,",0px 16px 24px 2px ").concat(r,",0px 6px 30px 5px ").concat(a),"0px 8px 11px -5px ".concat(t,",0px 17px 26px 2px ").concat(r,",0px 6px 32px 5px ").concat(a),"0px 9px 11px -5px ".concat(t,",0px 18px 28px 2px ").concat(r,",0px 7px 34px 6px ").concat(a),"0px 9px 12px -6px ".concat(t,",0px 19px 29px 2px ").concat(r,",0px 7px 36px 6px ").concat(a),"0px 10px 13px -6px ".concat(t,",0px 20px 31px 3px ").concat(r,",0px 8px 38px 7px ").concat(a),"0px 10px 13px -6px ".concat(t,",0px 21px 33px 3px ").concat(r,",0px 8px 40px 7px ").concat(a),"0px 10px 14px -6px ".concat(t,",0px 22px 35px 3px ").concat(r,",0px 8px 42px 7px ").concat(a),"0px 11px 14px -7px ".concat(t,",0px 23px 36px 3px ").concat(r,",0px 9px 44px 8px ").concat(a),"0px 11px 15px -7px ".concat(t,",0px 24px 38px 3px ").concat(r,",0px 9px 46px 8px ").concat(a)]},ze=function(e){var t=Object(F.a)(e,.24);return{z1:"0 1px 2px 0 ".concat(t),z8:"0 8px 16px 0 ".concat(t),z12:"0 0 2px 0 ".concat(t,", 0 12px 24px 0 ").concat(t),z16:"0 0 2px 0 ".concat(t,", 0 16px 32px -4px ").concat(t),z20:"0 0 2px 0 ".concat(t,", 0 20px 40px -4px ").concat(t),z24:"0 0 4px 0 ".concat(t,", 0 24px 48px 0 ").concat(t),primary:"0 8px 16px 0 ".concat(Object(F.a)(P.light.primary.main,.24)),secondary:"0 8px 16px 0 ".concat(Object(F.a)(P.light.secondary.main,.24)),info:"0 8px 16px 0 ".concat(Object(F.a)(P.light.info.main,.24)),success:"0 8px 16px 0 ".concat(Object(F.a)(P.light.success.main,.24)),warning:"0 8px 16px 0 ".concat(Object(F.a)(P.light.warning.main,.24)),error:"0 8px 16px 0 ".concat(Object(F.a)(P.light.error.main,.24))}},Te={light:ze(we),dark:ze(Fe)},Ae={light:Se(we),dark:Se(Fe)};function Be(e){var t=e.children,r=N(),o=r.themeMode,n=r.themeDirection,i="light"===o,c=Object(l.useMemo)((function(){return{palette:i?Object(a.a)(Object(a.a)({},P.light),{},{mode:"light"}):Object(a.a)(Object(a.a)({},P.dark),{},{mode:"dark"}),shape:_,typography:J,breakpoints:K,direction:n,shadows:i?Ae.light:Ae.dark,customShadows:i?Te.light:Te.dark}}),[i,n]),p=Object(v.a)(c);return p.components=Ce(p),Object(g.jsx)(k.a,{injectFirst:!0,children:Object(g.jsxs)(M.a,{theme:p,children:[Object(g.jsx)(j.a,{}),t]})})}var Re=r(229);function Ee(e){var t=e.children,r=Object(Re.a)(),o=N().setColor,n=Object(l.useMemo)((function(){return Object(a.a)(Object(a.a)({},r),{},{palette:Object(a.a)(Object(a.a)({},r.palette),{},{primary:o}),customShadows:Object(a.a)(Object(a.a)({},r.customShadows),{},{primary:"0 8px 16px 0 ".concat(Object(F.a)(o.main,.24))})})}),[o,r]),i=Object(v.a)(n);return i.components=Ce(i),Object(g.jsx)(M.a,{theme:i,children:t})}var Ie=Object(l.createContext)("");function De(e){var t=e.children;return Object(g.jsx)(Ie.Provider,{value:"/entando-de-app/cmsresources/user-management/",children:t})}var Pe=r(7),Le=r(104),We=r(61),He={en:r(160),it:r(161)},Ge="translation",Ne=Object.keys(He).reduce((function(e,t){return Object(a.a)(Object(a.a)({},e),{},Object(Pe.a)({},t,Object(Pe.a)({},Ge,He[t])))}),{}),_e=(Le.a.t,function(e){!function(e,t){console.log("In i8n: ".concat(e," and defaultlocale ").concat(t)),Le.a.use(We.e).init({defaultNs:Ge,interpolation:{escapeValue:!1},resources:Ne,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")}),Ve=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e,a){var n;return Object(o.a)(this,r),(n=t.call(this)).attributez=e,n.clazz=a,n}return Object(n.a)(r,[{key:"children",get:function(){return null}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"attributeChangedCallback",value:function(e,t,r){if(!this.clazz.observedAttributes.includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&r!==t&&this.render()}},{key:"getAllAttributes",value:function(){var e=this,t={};return Object.entries(this.attributez).forEach((function(r){var a=Object(p.a)(r,2),o=a[0],n=a[1];t[o]=e.getAttribute(n)})),t}},{key:"render",value:function(){var e=this.getAttribute("locale");console.log("In custom element: ".concat(e," for ").concat(this.clazz.name)),_e(e),u.a.render(Object(g.jsx)(O,{children:Object(g.jsx)(Be,{children:Object(g.jsx)(De,{children:Object(g.jsx)(Ee,{children:this.children})})})}),this.mountPoint)}}]),r}(Object(d.a)(HTMLElement)),Ue=r(12),Je=r(297),Ke=r(306),Xe=r(298),qe=r(307),Qe=r(76),Ye=r(166),Ze=Object(Ue.a)("div")({flexGrow:1,height:"100%",overflow:"hidden"}),$e=Object(Ue.a)(Ye.a)((function(e){var t=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:Object(F.a)(t.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}}));function et(e){var t=e.children,r=e.sx,o=Object(Qe.a)(e,["children","sx"]);return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Object(g.jsx)(ye.a,Object(a.a)(Object(a.a)({sx:Object(a.a)({overflowX:"auto"},r)},o),{},{children:t})):Object(g.jsx)(Ze,{children:Object(g.jsx)($e,Object(a.a)(Object(a.a)({timeout:500,clickOnTrack:!1,sx:r},o),{},{children:t}))})}var tt=r(305),rt=Object(Ue.a)(ye.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"}),at=Object(Ue.a)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat(Object(F.a)(t.palette.common.black,.24))}}));function ot(e){var t=e.colors,r=e.limit,o=void 0===r?3:r,n=Object(Qe.a)(e,["colors","limit"]),i=t.slice(0,o),c=t.length-o;return Object(g.jsxs)(rt,Object(a.a)(Object(a.a)({component:"span"},n),{},{children:[i.map((function(e,t){return Object(g.jsx)(at,{sx:{bgcolor:e}},e+t)})),t.length>o&&Object(g.jsx)(tt.a,{variant:"subtitle2",children:"+".concat(c)})]}))}var nt=r(301),it=r(31),ct=r.n(it),pt=r(47);function dt(e,t){switch(t.type){case"FETCH_INIT":return Object(a.a)(Object(a.a)({},e),{},{isLoading:!0,error:null});case"FETCH_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{isLoading:!1,error:null,data:t.payload});case"FETCH_ERROR":return Object(a.a)(Object(a.a)({},e),{},{isLoading:!1,error:t.payload});default:console.log("Wrong action type for FETCH API hook")}}var lt=function(){var e=Object(pt.a)(ct.a.mark((function e(t,r){var a;return ct.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,r);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),st=function(){var e=Object(pt.a)(ct.a.mark((function e(t){var r,o;return ct.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/").concat("api/apps/most-used-apps"),o=Object(a.a)(Object(a.a)({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}),{},{method:"GET"}),e.abrupt("return",lt(r,o));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ut=Object(Ue.a)("img")((function(e){return{width:48,height:48,objectFit:"cover",borderRadius:e.theme.shape.borderRadiusSm}}));function xt(e){var t=e.app,r=e.pathPrefix,a=t.name,o=t.image;return Object(g.jsxs)(Je.a,{direction:"row",spacing:2,alignItems:"center",children:[Object(g.jsx)(ut,{alt:a,src:r+o}),Object(g.jsx)(ye.a,{sx:{flexGrow:1,minWidth:200},children:Object(g.jsx)(Ke.a,{component:Ke.a,to:"#",sx:{color:"text.primary",typography:"subtitle2"},children:a})}),Object(g.jsx)(ot,{limit:3,colors:t.colors,sx:{minWidth:72,pr:3}})]})}function bt(e){var t=e.serviceUrl,r=Object(nt.a)().t,o=Object(l.useContext)(Ie),n=y(),i=function(e,t){var r=y(),o=e||r,n=Object(l.useReducer)(dt,{isLoading:!1,error:null,data:t}),i=Object(p.a)(n,2),c=i[0],d=i[1],s=Object(l.useCallback)(function(){var e=Object(pt.a)(ct.a.mark((function e(t){var r;return ct.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.initialized&&o.authenticated){e.next=3;break}return console.log("Keycloak not initialized yet"),e.abrupt("return");case 3:return d({type:"FETCH_INIT"}),e.prev=4,e.next=7,t();case 7:r=e.sent,d({type:"FETCH_SUCCESS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),d({type:"FETCH_ERROR",payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),[o,o.authenticated,o.initialized]);return[Object(a.a)({},c),s]}(n,[]),c=Object(p.a)(i,2),d=c[0],s=c[1];return Object(l.useEffect)((function(){s((function(){return st(t)}))}),[n.authenticated]),Object(g.jsxs)(Xe.a,{className:"card",children:[Object(g.jsx)(qe.a,{title:r("apps.widgetTitle")}),Object(g.jsx)(et,{sx:{maxHeight:518},children:Object(g.jsx)(Je.a,{spacing:3,sx:{p:3,pr:0},children:d.data.map((function(e){return Object(g.jsx)(xt,{app:e,pathPrefix:o},e.id)}))})})]})}var gt={serviceUrl:"service-url",locale:"locale"},ht=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(o.a)(this,r),t.call(this,gt,r)}return Object(n.a)(r,[{key:"children",get:function(){var e=this.getAllAttributes();return Object(g.jsx)(bt,Object(a.a)({},e))}}],[{key:"observedAttributes",get:function(){return Object.values(gt)}}]),r}(Ve);ht.TAG="dw-most-used-apps-card",customElements.get(ht.TAG)||customElements.define(ht.TAG,ht)}},[[280,1,2]]]);
//# sourceMappingURL=main.12ef79c0.chunk.js.map