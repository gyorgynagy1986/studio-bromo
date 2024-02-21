// recaptcha

grecaptcha.ready(function () {
  grecaptcha
    .execute("6LfA69YjAAAAABRkLoCxfl_r0JeVMTBD4WDjSnag", { action: "homepage" })
    .then(function (token) {
      document.getElementById("captchaResponse").value = token;
    });
});
