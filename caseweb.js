function beforesubmit(){
    let outputdata = document.querySelector(".outputdata");
    let inputdata = document.querySelector(".inputdata");
    console.log("inputdata.value",inputdata.value);
    
    let dateformat = new Date(inputdata.value).toLocaleDateString("en-IN");
    outputdata.value = dateformat;
}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);