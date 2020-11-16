console.log("Hej från main");

var myXHR = new XMLHttpRequest();

var MyPersons= {
    "firstname" : "xxx",
    "lastname" : "yyy"
};

myXHR.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {

        MyPersons = JSON.parse(this.responseText);
        PrintData();
    }
};
myXHR.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {

        MyPersons = JSON.parse(this.responseText);
        PrintData();
    }
};
function PrintData(){

    var htmldata = "";
    var i;
    for (i =0; i<MyPersons.length; i++) {

        htmldata += "<li>" + MyPersons[i].firstname + "</li>";

    }

    document.getElementById("result").innerHTML = htmldata;
}