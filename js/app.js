'use strict';
let hoursArray = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];
let locationArray=[];
let parent=document.getElementById('one');
console.log(parent);
let Table=document.createElement('table');
parent.appendChild(Table);

//random function
function Getrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Shop(name,min,max,avg)
{
   this.locationName=name;
   this.min=min;
   this.max=max;
   this.avg=avg;
   this.total=0;
   this.randomCustomer=[];
   this.avgChookies=[];

   locationArray.push(this);
   //console.log(locationArray);

}

Shop.prototype.randomCustomershour=function()
{
    for(let i=0; i<hoursArray.length ;i++){

       this.randomCustomer.push(Getrandom(this.min,this.max));
       
     }
     console.log(this.randomCustomer);
}

Shop.prototype.avgchookiesperhour=function()
{
    for( let j=0 ; j<hoursArray.length ;j++)
    {
     var numofcookies = Math.floor(this.randomCustomer[j] * this.avg);
     this.avgChookies.push(numofcookies);
     this.total +=this.avgChookies[j];
    }
   console.log(this.avgChookies);
}


// 5 objects
let Seattle=new Shop("Seattle",23,65,6.3);

let Tokyo=new Shop("Tokyo",  3, 24, 1.2);

let Dubai=new Shop("Dubai",11,38,3.7);

let Paris=new Shop("Paris",20,38,2.3);

let Lima=new Shop("Lima",2,16,4.6);






Table.textContent='';
//header row
function header()
{ 
    
    var trElement=document.createElement('tr')
    Table.appendChild(trElement);
    var thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent='Location\ /time';
    for( let i=0 ; i<hoursArray.length; i++)
    {
    
      var thElement=document.createElement('th');
      trElement.appendChild(thElement);
      thElement.textContent=`${hoursArray[i]}`;
    }
    var thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent='Daily Location Total';




}
header();

//
Shop.prototype.render=function()
{
  

    var trElement=document.createElement('tr');
    Table.appendChild(trElement);
    
    var thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent=this.locationName;
   
    for(let i=0 ;i< hoursArray.length ;i++)
    {
      
       var tdElement=document.createElement('td');
       trElement.appendChild(tdElement);
       tdElement.textContent=this.avgChookies[i];

    }
    
    var thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent=this.total;
      
      
}



function Footer()
{
   
 let tfootElement=document.createElement('tfoot');
 Table.appendChild(tfootElement);
 var trElement=document.createElement('tr');
 tfootElement.appendChild(trElement);
 trElement.textContent="Total";
 
 for(let i=0 ;i< hoursArray.length;i++)
 {
    let total2=0;
    
    var tdElement=document.createElement('td');
    trElement.appendChild(tdElement);
    for(let j=0;j<locationArray.length;j++)
    { 
      total2+=locationArray[j].avgChookies[i]; 
     
       tdElement.textContent=total2;       
     
    }
    
}

let totalOftotal=0;
for(let j=0;j<locationArray.length;j++)
{ 
  totalOftotal+=locationArray[j].total;
 // console.log(locationArray[j]); 
}
var tdElement=document.createElement('td');
trElement.appendChild(tdElement);
tdElement.textContent=totalOftotal;  
console.log("Total of Total",totalOftotal);



    
} 
  
 




for(let i=0;i<locationArray.length;i++)
{
   locationArray[i].randomCustomershour();
   locationArray[i].avgchookiesperhour();
   locationArray[i].render();
  
}

Footer();
console.log("befor",locationArray.length);

//add tag form for html 
let form=document.getElementById('form');

//you need to add listener
form.addEventListener('submit',Addform);
function Addform(event)
{
   event.preventDefault();
   
   //console.log(event);
    let name=event.target.nameshop.value;
    //console.log(name);
    let minCustomer=parseInt(event.target.min.value);
   // console.log(minCustomer);
   let maxCustomer=parseInt(event.target.max.value);

   let Avgforchookies=parseFloat(event.target.avg.value);

   
   let addnewshop=new Shop(name,minCustomer,maxCustomer,Avgforchookies);
   //delete the last element
   Table.deleteRow(-1);
   console.log("After",locationArray.length);
   addnewshop.randomCustomershour();
   addnewshop.avgchookiesperhour();
   addnewshop.render();
   Footer();
}


