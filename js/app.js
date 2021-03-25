const salon={
    name:'The Fashion Pet',
    address:{
        city:'Tijuana',
        street:'Av. Univesidad',
        number:'262-k'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[]
}

var {name,address:{city,street,number},hours:{open,close}}=salon; 

function displayInfo(){
    document.getElementById('footer-info').innerHTML=`
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> It opens from ${open} to ${close}</p>
    `;
}

c=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone,type){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
        this.type=type;
        this.id=c++;
    }
}

//create register function


// get the value from inputs and store them in vars
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender = document.querySelectorAll("input[type='radio']:checked");
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');
var txtType=document.getElementById('type');


function register(){
    
    if(txtName.value !="" && txtAge.value !="" && txtBreed.value!=""){
        // create a generic thePet
        var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtType.value);
        console.log(thePet);
        //push thePet into the array
        salon.pets.push(thePet);
        displayTable(thePet);
        console.log(salon.pets);
        clear();
    }else{
        alert("Hey you have to complete all the fields");
    }
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits: $${sum}`;
}

function deletePet(petId){
    console.log(petId+'deleted');
    //select row with the pet
    
    var tr=$('#'+petId)
    var indexDelete;
    //search for it

    for(let i = 0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    //delete from array
    salon.pets.splice(indexDelete,1);
    //delete from html
    tr.remove();
}

function searchPet(){
    var ss = $('#searchPet').val();
    var searchString=ss.toLowerCase();
    for (var i=0; i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(ss===selected.name.toLowerCase()||searchString===selected.service.toLowerCase()){
            $('#'+selected.id).addClass('selected');
        }
    }
}

function getGender(){
    txtGender = document.querySelectorAll("input[type='radio']:checked");
}


function init(){
    
    var scooby=new Pet("Scooby",50,"Male","Dane","full","Shaggy","555-555-555","dog",1);
    var scrapy=new Pet("Scrappy",40,"Male","Dane","shower","Shaggy","555-555-555","dog",2);
    var lassie=new Pet("Lassie",50,"Female","Golden Retriever","full","Jeff Baskins","555-555-555","dog",2);
    var irwin=new Pet("Irwin",10,"Male","Australian","nails","Simon Bolivar","555-555-555","dog",2);
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(lassie);
    salon.pets.push(irwin)
    // create pets 
    displayTable(scooby);
    displayTable(scrapy);
    displayTable(irwin);
    displayTable(lassie);
    profitCalculation();
    $('#registerBtn').on('click',register);
    $('#searchBtn').on('click',searchPet);

    // hook events
}

window.onload=init;