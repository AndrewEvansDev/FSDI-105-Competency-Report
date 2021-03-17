function display(){
    document.getElementById("pets").innerHTML="";
        for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        var tmp =`

            <div class="col-sm">
                <h3>${aPet.name}</h3>
                <p>Age: ${aPet.age}</p>
                <p>Gender: ${aPet.gender}</p>
                <p>Breed: ${aPet.breed}</p>
                <p>Service: ${aPet.service}</p>
                <p>Owner: ${aPet.owner}</p>
                <p>Phone: ${aPet.phone}</p>
                <p>${aPet.email}</p>
                <p>$${aPet.price}</p>
            </div>
    `
        document.getElementById("pets").innerHTML+=tmp;
    }
}
display()

function serviceShow(){
    document.getElementById("service").innerHTML="";
        for(var i=0;i<salon.services.length;i++){
        var aName=salon.services[i].name;
        var aDesc=salon.services[i].desc;
        var aMsg=salon.services[i].msg;
        var smp =`
        <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${aName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${aDesc}</h6>
            <p class="card-text">${aMsg}</p>
            </div>
        </div>
        </div>
    `;
    document.getElementById("service").innerHTML+=smp;
    }
}
serviceShow()

// function DisplayTable(aPet){
//     var row=`
//     <tr>
//         <td>${aPet.name}</td>
//         <td>${aPet.age}</td>
//         <td>${aPet.gender}</td>
//         <td>${aPet.breed}</td>
//         <td>${aPet.service}</td>
//         <td>${aPet.owner}</td>
//         <td>${aPet.phone}</td>
//     </tr>
//     `
//     document.getElementById('pet-table').innerHTML+=row;
//

