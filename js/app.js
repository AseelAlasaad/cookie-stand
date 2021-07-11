'use strict';
let hoursArray = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "Total"];
function Getrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1st
let Seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustomers: [],
    avgcookiesHoure: [],
    total:0,

    randomCustomershour: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.randomCustomers.push(Getrandom(this.min, this.max));
        }
        console.log(Seattle.randomCustomers);

    },
    avgchookies: function () {
        for (let j = 0; j < this.randomCustomers.length; j++) {

            var numofcookies=Math.floor(this.randomCustomers[j] * this.avg);
            
            this.total+=  numofcookies;
            this.avgcookiesHoure.push(numofcookies);

        }
       this.avgcookiesHoure.push(this.total);
        

    },



}

Seattle.randomCustomershour();
Seattle.avgchookies();
console.log(Seattle.avgcookiesHoure);

Seattle.render=function(){

 let parent=document.getElementById('one');
 console.log(parent);

let articelelement=document.createElement('article');

parent.appendChild(articelelement);

let h2Element=document.createElement('h2');
articelelement.appendChild(h2Element);
h2Element.textContent=this.name;

let ulElement=document.createElement('ul');

articelelement.appendChild(ulElement);

for(let x=0 ;x<hoursArray.length ;x++)
{
  let liElement=document.createElement('li');

  ulElement.appendChild(liElement);

  liElement.textContent=hoursArray[x]+' : ' +this.avgcookiesHoure[x]+' '+'Cookies';



}




}
Seattle.render();





//second
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    randomCustomers: [],
    avgcookiesHoure: [],
    total:0,
       
    randomCustomershour: function () {
        for (let i = 0; i < hoursArray.length; i++) {
            this.randomCustomers.push(Getrandom(this.min, this.max));
        }

    },
    avgchookies: function () {
        for (let j = 0; j < this.randomCustomers.length; j++) {
            var numofcookies=Math.floor(this.randomCustomers[j] * this.avg);
            
            this.total+=  numofcookies;
            this.avgcookiesHoure.push(numofcookies);

        }
       this.avgcookiesHoure.push(this.total);

    },}
    
    Tokyo.randomCustomershour();
    console.log(Tokyo.randomCustomers);
    Tokyo.avgchookies();
    console.log(Tokyo.avgcookiesHoure);
Tokyo.render=function(){

    let parent=document.getElementById('one');
    console.log(parent);
   
   let articelelement=document.createElement('article');
   
   parent.appendChild(articelelement);
   
   let h2Element=document.createElement('h2');
   articelelement.appendChild(h2Element);
   h2Element.textContent=this.name;
   
   let ulElement=document.createElement('ul');
   
   articelelement.appendChild(ulElement);
   
   for(let x=0 ;x<hoursArray.length ;x++)
   {
     let liElement=document.createElement('li');
   
     ulElement.appendChild(liElement);
   
     liElement.textContent=hoursArray[x]+' : ' +this.avgcookiesHoure[x]+' '+'Cookies';
   
   
   
   }


}
Tokyo.render();



//third
 let Dubai={
        name: 'Dubai',
        min: 11,
        max: 38,
        avg: 3.7,
        randomCustomers: [],
        avgcookiesHoure: [],
        total:0,   
   randomCustomershour: function () {
            for (let i = 0; i < hoursArray.length; i++) {
                this.randomCustomers.push(Getrandom(this.min, this.max));
            }

        },
        avgchookies: function () {
            for (let j = 0; j < this.randomCustomers.length; j++) {
            var numofcookies=Math.floor(this.randomCustomers[j] * this.avg);
            
            this.total+=  numofcookies;
            this.avgcookiesHoure.push(numofcookies);

        }
       this.avgcookiesHoure.push(this.total);
    },
    }

    
Dubai.randomCustomershour();
console.log(Dubai.randomCustomers);
Dubai.avgchookies();
console.log(Dubai.avgcookiesHoure);

    Dubai.render=function(){

        let parent=document.getElementById('one');
        console.log(parent);
       
       let articelelement=document.createElement('article');
       
       parent.appendChild(articelelement);
       
       let h2Element=document.createElement('h2');
       articelelement.appendChild(h2Element);
       h2Element.textContent=this.name;
       
       let ulElement=document.createElement('ul');
       
       articelelement.appendChild(ulElement);
       
       for(let x=0 ;x<hoursArray.length ;x++)
       {
         let liElement=document.createElement('li');
       
         ulElement.appendChild(liElement);
       
         liElement.textContent=hoursArray[x]+' : ' +this.avgcookiesHoure[x]+' '+'Cookies';
       
       
       
       }


    }
Dubai.render();


//4th
 let Paris ={
            name: 'Paris',
            min: 20,
            max: 38,
            avg: 2.3,
            randomCustomers: [],
            avgcookiesHoure: [],
            total:0,
   
            randomCustomershour:function(){
                for(let i=0 ;i<hoursArray.length;i++)
                {
                    this.randomCustomers.push(Getrandom(this.min,this.max));
                }
                   
            },
            avgchookies:function(){
               for(let j=0; j<this.randomCustomers.length ;j++) 
               {
                var numofcookies=Math.floor(this.randomCustomers[j] * this.avg);
            
                this.total+=  numofcookies;
                this.avgcookiesHoure.push(numofcookies);
    
            }
           this.avgcookiesHoure.push(this.total);

        },
    }

Paris.randomCustomershour();
//console.log(Paris.randomCustomers);
Paris.avgchookies();
//console.log(Paris.avgcookiesHoure);
Paris.render=function(){

    let parent=document.getElementById('one');
    console.log(parent);
   
   let articelelement=document.createElement('article');
   
   parent.appendChild(articelelement);
   
   let h2Element=document.createElement('h2');
   articelelement.appendChild(h2Element);
   h2Element.textContent=this.name;
   
   let ulElement=document.createElement('ul');
   
   articelelement.appendChild(ulElement);
   
   for(let x=0 ;x<hoursArray.length ;x++)
   {
     let liElement=document.createElement('li');
   
     ulElement.appendChild(liElement);
   
     liElement.textContent=hoursArray[x]+' : ' +this.avgcookiesHoure[x]+' '+'Cookies';
   
   
   
   }


}

Paris.render();


 //5th
 let Lima={
            name: 'Lima',
            min: 2,
            max: 16,
            avg: 4.6,
            randomCustomers: [],
            avgcookiesHoure: [],
            total:0,
   
            randomCustomershour:function(){
                for(let i=0 ;i<hoursArray.length;i++)
                {
                    this.randomCustomers.push(Getrandom(this.min,this.max));
                }
                   
            },
            avgchookies:function(){
               for(let j=0; j<this.randomCustomers.length ;j++) 
               {
                var numofcookies=Math.floor(this.randomCustomers[j] * this.avg);
            
                this.total+=  numofcookies;
                this.avgcookiesHoure.push(numofcookies);
    
            }
           this.avgcookiesHoure.push(this.total);


        },
    }
    Lima.randomCustomershour();
   // console.log(Lima.randomCustomers);
    Lima.avgchookies();
  //  console.log(Lima.avgcookiesHoure);
    Lima.render=function(){
        let parent=document.getElementById('one');
        console.log(parent);
       
       let articelelement=document.createElement('article');
       
       parent.appendChild(articelelement);
       
       let h2Element=document.createElement('h2');
       articelelement.appendChild(h2Element);
       h2Element.textContent=this.name;
       
       let ulElement=document.createElement('ul');
       
       articelelement.appendChild(ulElement);
       
       for(let x=0 ;x<hoursArray.length ;x++)
       {
         let liElement=document.createElement('li');
       
         ulElement.appendChild(liElement);
       
         liElement.textContent=hoursArray[x]+' : ' +this.avgcookiesHoure[x]+' '+'Cookies';
       
       
       
       }




    }
    Lima.render();