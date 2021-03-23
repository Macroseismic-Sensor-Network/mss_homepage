// Fathom - simple website analytics - https://github.com/usefathom/fathom -->
(function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
                (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
        m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
})(document, window, 'https://taubi.mertl-research.at/tracker.js', 'fathom');


// Activate tracking.
function activate_fathom() {
    console.log('Contacting web-analytics.');
    fathom('set', 'siteId', 'GXWIX');
    fathom('trackPageview');
}


// Handle cookies.
function cookies_accepted() {
    var key = 'cookiebanner-accepted';
    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
}

// Activate tracking only, if cookies have been accepted.
if (cookies_accepted())
{
    console.log('Thank you for accepting our cookies.');
    activate_fathom();
}
else
{
    console.log('Cookies not accepted.');
};


// Initialize the cookiebanner.
$(document).ready(function() {
    // Activate the cookies banner.
    var options = { onClosed: function (instance) { console.log('Thank you for accepting our cookies.');
                                                    activate_fathom(); },
                    //expires: 86400 * 7,
                    position: 'bottom',
                    minHeight: '200px',
                    padding: '15px 30px',
                    message: "We use cookies for analyzing the page visits. We don't track any personal or location data and use full anonymization. Do you accept the usage of these cookies?",
                    moreinfo: 'http://www.mertl-research.at/data-privacy-statement/',
                    closePrecedes: false,
                    closeText: "Accept cookies",
                    closeStyle: "cursor: pointer; background: grey; width: 70%; margin: 0 auto; margin-top: 10px; border-radius: 3px; font-weight: bold; line-height: 40px;",
                    zindex: 1000,
    };

    var cb = new Cookiebanner(options);
    cb.run();
});
