document.addEventListener("DOMContentLoaded", function () {
    var timestampField = document.getElementById("timestamp");
    var now = new Date();
    timestampField.value = now.toISOString();
});