// fill in javascript code here

// console.log(dept);
form=document.querySelector("form")
form.addEventListener("submit",makeTable);

function makeTable(event){
    event.preventDefault();
let name=document.querySelector("#name").value;
let id=document.querySelector("#employeeID").value;
let dept=document.querySelector("#department").value;
let exp=document.querySelector("#exp").value;
let email=document.querySelector("#email").value;
let mbl=document.querySelector("#mbl").value;

    naam=document.createElement("td");
    naam.innerText=name;
    // console.log(naam)
    empid=document.createElement("td");
    empid.innerText=id;
    dprtmnt=document.createElement("td");
    dprtmnt.innerText=dept;
    exprnce=document.createElement("td");
    exprnce.innerText=exp;
    emailid=document.createElement("td");
    emailid.innerText=email;
    phn=document.createElement("td");
    phn.innerText=mbl;
    role=document.createElement("td");
    if((+exp)>5){
        role.innerText="Senior";
    }
    else if((+exp)<=5 && (+exp)>=2){
        role.innerText="Junior";
    }
    else if((+exp)<=1){
        role.innerText="Fresher";
    }
    
    dlt=document.createElement("button");
    dlt.innerText="DELET";
    dlt.addEventListener("click",dltTable);
    function dltTable(event){
        event.target.parentNode.remove();
    }
  
    delet=document.createElement("td")
    delet.append(dlt)
    
    tr=document.createElement("div");
    tr.append(naam,empid,dprtmnt,exprnce,emailid,phn,role,delet);
   
    document.querySelector("tbody").append(tr);
    // console.log(tr)
}
