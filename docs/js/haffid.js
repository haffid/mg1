$(function(){ 
var navMain = $(".navbar-collapse"); // avoid dependency on #id
// "a:not([data-toggle])" - to avoid issues caused
// when you have dropdown inside navbar
navMain.on("click", "a:not([data-toggle])", null, function () {
 navMain.collapse('hide');
});
});
$(function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'ca,gl,en,fr,it,pt,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
       });