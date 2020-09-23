let inputAdding = document.getElementById('inputAdding');
let listItem = document.getElementById('listItem');
let alertBox = document.getElementById('alertBox');


let bgColor = document.getElementById('bgColor');
let colorTitle = document.getElementById('colorTitle');


let sound = document.getElementById('sound');
let counterBox = document.getElementById('counterBox');
let secondsDown = document.getElementById("seconds");
let minutesDown = document.getElementById("minutes");
let hoursDown = document.getElementById("hours");
let daysDown = document.getElementById("days");


let userName = document.getElementById('userName');
let nameAlert = document.getElementById('nameAlert');
let emailAddress = document.getElementById('emailAddress');
let emailAlert = document.getElementById('emailAlert');
let phoneNumber = document.getElementById('phoneNumber');
let phoneAlert = document.getElementById('phoneAlert');
let submitBtn = document.getElementById('submitBtn');
// let textArea = document.getElementById('textArea');










if(localStorage.getItem("listOfItems") === null){
    var arrList = [];
}
 else{
    var arrList = JSON.parse(localStorage.getItem("listOfItems"));
 }

 displayItem();


$("#addBtn").click(function(){

   if(validateData() == true ){

    let itemsList ={
        item : inputAdding.value
    }

    arrList.push(itemsList)
    localStorage.setItem("listOfItems", JSON.stringify(arrList) );
    displayItem()
    clearInput()
   } else{
      
   }
   
})



function displayItem(){
    
    let box =``;
    for(let i = 0  ; i< arrList.length ; i++){
        box +=`
        <li class="form-control position-relative">${arrList[i].item}
        <button onclick="deleteItem(${i})" class="btn btn-danger "> X </button>
        </li> 
        `
    }
    listItem.innerHTML = box;

}


function clearInput(){
    inputAdding.value = ``
}

function deleteItem(index){
    arrList.splice(index,1);
    localStorage.setItem("listOfItems", JSON.stringify(arrList) );
    displayItem()
}

function validateData(){
    if(inputAdding.value ==''){
        alertBox.classList.add("d-block")
        return false
       
    }
    else{
        alertBox.classList.remove("d-block")
        return true
    }
}



function changeColor(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
     bgColor.style.backgroundColor =`rgb(${r}, ${g}, ${b})`

    
    
}


  colorTitle.addEventListener("mouseover" , function(){
    var stop = setInterval(changeColor,200);
    // sound.setAttribute("autoplay" , true)
    sound.autoplay=true;
    sound.load();
    colorTitle.addEventListener("mouseout" , function(){
        clearInterval(stop);
        bgColor.style.backgroundColor ='#fff'
        sound.autoplay=false;
        sound.load();

        // sound.setAttribute("autoplay" , false)
      })

  })
 

  
  
//     let count = setInterval(function(){
//         seconds.innerHTML -= 1;
//         if(seconds.innerHTML < 0){
//            seconds.innerHTML=60
//            minutes.innerHTML -=1
//            if(minutes.innerHTML < 0){
//             minutes.innerHTML=60
//             hours.innerHTML -=1
//             if(hours.innerHTML < 0){
//                 hours.innerHTML=24
//                 days.innerHTML -=1
//             }
//         }
           
//         }
       
//     },1000);



    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('dec 30, 2020 00:00:00').getTime();

function counterDown(){    
   

    let now = new Date().getTime(),
    
        down = countDown - now;

      daysDown.innerHTML=`
        <div class="count">
        <h5>${Math.floor(down / (day))}</h5>
        <span class="">DAYS</span>
         </div>`;
      hoursDown.innerHTML =`
        <div class="count">
        <h5>${ Math.floor((down % (day)) / (hour))}</h5>
        <span>HOURS</span>
        </div>`
    
      minutesDown.innerHTML =`
        <div class="count">
        <h5>${Math.floor((down % (hour)) / (minute))}</h5>
        <span class="">MINUTES</span>
        </div>`
      
      
      secondsDown.innerHTML = `
         <div class="count">
                <h5>${ Math.floor((down % (minute)) / second)}</h5>
                <span class="">SECONDS</span>
              </div>
      `
      
  }


    setInterval(counterDown , second);

  /*************************************************************/

  $("#red").mouseover(function(){
     $("#rgbColor").css("backgroundColor" , "red");
     $("#red").mouseout(function(){
      $("#rgbColor").css("backgroundColor" , "#fff");
     })
  }) 
  
  $("#green").mouseover(function(){
    $("#rgbColor").css("backgroundColor" , "green");
    $("#green").mouseout(function(){
     $("#rgbColor").css("backgroundColor" , "#fff");
    })
 })

 $("#blue").mouseover(function(){
  $("#rgbColor").css("backgroundColor" , "blue");
  $("#blue").mouseout(function(){
   $("#rgbColor").css("backgroundColor" , "#fff");
  })
})




/**************************************************************/

function validateUserName(){
  let regex = /^[A-Z][a-zA-Z]{2,9}/;
  let uName = userName.value;
  if(regex.test(uName) == true){
    nameAlert.classList.add("d-none")
    userName.classList.remove("is-invalid")
    userName.classList.add("is-valid");
    submitBtn.removeAttribute("disabled");
    
  }
  else{
    nameAlert.classList.remove("d-none")
    userName.classList.add("is-invalid");
    submitBtn.setAttribute("disabled","true");



  }
}

userName.addEventListener("blur", validateUserName)

// $("#submitBtn").click(validateUserName);



function validateEmailAddress(){
  var regex = /^[A-Za-z0-9]{5,50}@[a-z]{4,9}.([a-z]{2,10})$/;
  let eAddress = emailAddress.value;
  if(regex.test(eAddress) == true){
    emailAlert.classList.add("d-none")
    emailAddress.classList.remove("is-invalid")
    emailAddress.classList.add("is-valid");
    submitBtn.removeAttribute("disabled");

   
  }
  else{
    emailAlert.classList.remove("d-none")
    emailAddress.classList.add("is-invalid");
    submitBtn.setAttribute("disabled","true");
    
  }
}


emailAddress.addEventListener("blur", validateEmailAddress)


function validatePhoneNum(){
  var regex = /^(002)?(01)[1025][1-9]{8}$/;
  let phone= phoneNumber.value;
  if(regex.test(phone) == true){
    phoneAlert.classList.add("d-none")
   phoneNumber.classList.remove("is-invalid")
   phoneNumber.classList.add("is-valid");
   submitBtn.removeAttribute("disabled");

  }
  else{
    phoneAlert.classList.remove("d-none")
    phoneNumber.classList.add("is-invalid");
    submitBtn.setAttribute("disabled","true");
  }
}


phoneNumber.addEventListener("blur", validatePhoneNum)







$("textArea").keypress(function(){
  let textStrg = this.value;
  
  let textLength =textStrg .length;
  console.log(textLength);

  if(textLength <= 50){
      $("#letterRnge").text( 50 - textLength + "letters") 
  
  }
  else{
    $("textArea").attr("disabled" , true)
    $("#letterRnge").text("finished") 
  }
})

