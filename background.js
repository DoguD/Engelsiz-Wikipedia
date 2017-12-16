/*
 Created by Doğu Deniz Uğur (Ankara, Turkey). 17 December 2017.
 */

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         var host = details.url
         var i = host.indexOf("w")
         var urlToRedirect = host.substr(0,i)+"0"+host.substr(i,host.length)
         return {redirectUrl: urlToRedirect};
    },
    {
        urls: [
            "*://*.wikipedia.org/*",
            "*://wikipedia.org/*",
            "*://www.wikipedia.org/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
