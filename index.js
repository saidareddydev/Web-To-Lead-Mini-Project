function beforesubmit(){
    let outputdata = document.querySelector(".outputdata");
    let inputdata = document.querySelector(".inputdata");
    console.log("inputdata.value",inputdata.value);

    let dateformat = new Date(inputdata.value).toLocaleDateString("en-IN");
    outputdata.value = dateformat;

}