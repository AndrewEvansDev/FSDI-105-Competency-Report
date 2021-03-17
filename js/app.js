const salon={
    name:'The Pampered Pup',
    address:{
        city: 'Kelso',
        street: 'Main St',
        number: '5862',
        state: 'WA',
        zip: '98626'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    services:[
    {
        name:'Canine Grooming Services',
        desc:'a full service cut and grooming',
        msg:'We take pride in our work, taking care of our doggos is our number one priority. You won\'t find the level of care nor experience elsewhere, you might as well just give us your money unless you hate your doggo.',
        price:200},
    {
        name:'Deshedding',
        desc:'prevents excessive shedding at home',
        msg:'While it is nearly impossible to stop shedding completely, a full service deshedding treatment will help curb excessive shedding at home, leaving your couches in great shape.',
        price:50},
    {
        name:'Carding &amp; Hand Stripping',
        desc:'the removal of a dog’s undercoat',
        msg:'The undercoat is the soft, short, downy and dense hair under the top (or outer) coat. The undercoat insulates and protects the skin in colder weather.',
        price: 100},
    {
        name:'Undercoat Deshedding',
        desc:'another version of carding, to help remove undercoat',
        msg:'Shedding is a natural process for cats, dogs and other animals. Cats and dogs completely replace their coat every spring and autumn to adjust to the changes in temperature, and shedding can also happen throughout the year because pets live in our warm homes.',
        price:50},
    {
        name:'Hand Stripping',
        desc:'certain dogs require hand striping to be effectively groomed',
        msg:'The difference between clipping and hand-stripping is that not only is hand-stripping done by hand, but it removes coat from the root (not just the top layer) so a new coat is able to grow in.',
        price:100},
    {
        name:'Carding &amp; Hand Stripping',
        desc:'this is a comination of services',
        msg:'Dogs that require hand striping: Airedale Terrier, Bouvier de Flanders, Affenpinscher, Cairn Terrier, Wire Fox Terrier, Jack Russel Terrier, German Wirehaired Pointer, Schnauzer, Wirehaired Pointing, Griffon,Wirehaired Dachshund',
        price:100},
    {
        name:'Feline Grooming Services',
        desc:'cats are gross',
        msg:'While we prefer not to do cats, we will for the right price. It is widely acknowledged that dogs are superior to cats, so it\'s our guess why you would still choose to have such an inferior disgusting beast, but since you did we\'ll trim its coat for no less than $1000.',
        price:1000}
        ],
    pets:[]
}

var {name,address:{city,street,number,state,zip}, hours:{open,close}}=salon;


function displayInfo(){
    document.getElementById('footer-info').innerHTML=`
        <div><h2><strong><em>${name}</em></strong></h2></div>
        
        <div id="copyright"><small>&#169;2021: All rights reserved</small></div>  

        <div><p id="address">${number} ${street} ${city}, ${state} ${zip}</p>
        <p>Open M-F ${open}-${close}</p></div>       
    `
}
displayInfo()

// for(var i=0;i<salon.pets.length;i++){
//     console.log(salon.pets[i]);
// }

class Pet{
    constructor(name,age,gender,breed,service,owner,phone,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.email=email;
        this.price=0;
    }
}

//create pets
var scooby=new Pet('Scooby',50,'Male','Great Dane','Full Service','Roderick McShagginson','323-232-4444','shagawag@mysterymachine.com');
salon.pets.push(scooby)
// var scrappy=new Pet("scrappy",40,"male","Dane","Nails cut","Shaggy","555-323-2345");
// salon.pets.push(scrappy);

//create register function

//get value from inputs and store them in variables
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');
var txtEmail=document.getElementById('ownerEmail');



function register(thePet){
    if(txtName.value !="" && txtAge !="" && txtBreed !="" &&txtGender.value !="" && txtService.value !="" && txtOwner.value !="" && txtPhone.value !="" && txtEmail.value !=""){
    //document.getElementById("pets").innerHTML="";
    //create a generic pet/ThePet
    var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtEmail.value)
    // get from txtName.value(grabbed from page inputs)
    //pass parameters/the values stored in variables

    //push thePet into the array
    salon.pets.push(thePet);
    clear();
    display();
}else{
        alert('please complete form')
    }
}

function clear(){
    txtName.value='';
    txtAge.value='';
    txtGender.value='Select Gender';
    txtBreed.value='';
    txtService.value='Select Service';
    txtOwner.value='';
    txtPhone.value='';
    txtEmail.value='';
}

function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('').innerHTML=`Profits: $${sum}`
}