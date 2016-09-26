$(document).ready(function() {
$('#fullpage').fullpage({
    menu: '#myMenu',
    css3: false,
    scrollingSpeed: 700,
    autoScrolling: false,//if set True, scroll invisible bug will not come out.
    scrollOverflow: false,
    easing: 'easeInQuart',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: false,
    continuousVertical: false,
    fixedElements:'.header',             
    touchSensitivity: 5,
    normalScrollElementTouchThreshold: 15,    
 });
});