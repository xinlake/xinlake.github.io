// untrusted browser list, add ua in lowercase
let untrusted = ["qq", "qzone"];
let ua = navigator.userAgent.toLowerCase();

untrusted.forEach(function (item) {
    if (ua.includes(item)) {
        window.location.href = "/block";
        return;
    }
});
