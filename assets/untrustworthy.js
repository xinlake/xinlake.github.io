// untrusted browser list, add ua in lowercase
let untrusted = ["ua-1", "ua-2", "ua-3"];
let ua = navigator.userAgent.toLowerCase();

untrusted.forEach(function (item) {
    if (ua.includes(item)) {
        window.location.href = "/block";
        return;
    }
});
