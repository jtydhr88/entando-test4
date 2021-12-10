<#assign wp=JspTaglibs["/aps-core"]>

<script src="<@wp.resourceURL />apps/static/js/2.261dfbb3.chunk.js"></script>
<script src="<@wp.resourceURL />apps/static/js/main.9362baab.chunk.js"></script>
<script src="<@wp.resourceURL />apps/static/js/runtime-main.62130947.js"></script>

<link href="<@wp.resourceURL />apps/static/css/2.598ea7c3.chunk.css" rel="stylesheet">

<#-- entando_resource_injection_point -->

<@wp.info key="currentLang" var="currentLangVar" />

<dw-most-used-apps-card
   locale="${currentLangVar}"
   service-url="/news-content"
></dw-most-used-apps-card>


