//<syntaxhighlight lang="javascript">
$(function(){
$('body').append('<script type=\"text/javascript\"> window.___gcfg = {lang: \"' + mw.config.get('wgUserLanguage') + "\"};(function(){var po = document.createElement(\"script\"); po.type = \"text/javascript\"; po.async = true; po.src = \"https://apis.google.com/js/platform.js\"; var s = document.getElementsByTagName(\"script\")[0]; s.parentNode.insertBefore(po, s);})(); </script>");
});

$('#PowerShareMenu').ready(function(){
$('#PowerShareMenu').append(' <span id="googlePlusButton" style="vertical-align:top; background-color:#000000; padding:0.5em; border-width:0.25em; border-style:solid; border-color: #FFFF00 #0000FF #FF0000 #00FF00; display:inline-block;"> <div class="g-plusone" data-size="tall"> </div> </span>');
});
//</syntaxhighlight>