
//checks time and adds class to appropiate times
function checkTime(current){
  $timeCheck = moment().format('HH')
  if(current == $timeCheck){
    $text.addClass('present')
  } else if (current< $timeCheck){
    $text.addClass('past')
  } else {
    $text.addClass('future')
  }
}

//function to save text input to local storage
function save(){
  $(".saveBtn").click(function(){
    var id = $(this).data("id")
    var userInput = $(this).siblings().eq(1).val()
    localStorage.setItem(id,userInput)
  })  
}

//calls all timeblock function to screate schedule
function getSchedule(){
 $currentTime = moment().format('dddd, MMMM Do, YYYY')
 $('lead').append($currentTime);
 console.log($currentTime);
 nineAM();
 tenAM();
 elevenAM();
 twelvePM();
 onePM();
 twoPM();
 threePM();
 fourPM();
 fivePM();

}


function nineAM(){
   $9am = $(`<div class= "row col-12">`)
  $hour = $(`<div class = "hour time-block col-1"></div>`)
  $hour.text("9am")
  $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
  $text.text(localStorage.getItem(9))
  $button = $(`<button class = "saveBtn col-1 col-m-1 fas fa-save" data-id='${9}'></button>`)
      
  $('.9am').append($9am)
  $($9am).append($hour)
  $($9am).append($text)
  $($9am).append($button)
      
  checkTime(9)
  save();
}

function tenAM(){
 $10am = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("10am")
 $text = $(`<textarea class = "col hour" id='inputText${10}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(10))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${10}'></button>`)
     
 $('.10am').append($10am)
 $($10am).append($hour)
 $($10am).append($text)
 $($10am).append($button)
     
 checkTime(10)
 save();
}

function elevenAM(){
 $11am = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("11am")
 $text = $(`<textarea class = "col hour" id='inputText${11}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(11))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${11}'></button>`)
     
 $('.11am').append($11am)
 $($11am).append($hour)
 $($11am).append($text)
 $($11am).append($button)
     
 checkTime(11)
 save();
}

function twelvePM(){
 $12pm = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("12pm")
 $text = $(`<textarea class = "col hour" id='inputText${12}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(12))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${12}'></button>`)
     
 $('.12pm').append($12pm)
 $($12pm).append($hour)
 $($12pm).append($text)
 $($12pm).append($button)
      
 checkTime(12)
 save();
}

function onePM(){
  $1pm = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("1pm")
 $text = $(`<textarea class = "col hour" id='inputText${1}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(1))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${1}'></button>`)
     
 $('.1pm').append($1pm)
 $($1pm).append($hour)
 $($1pm).append($text)
 $($1pm).append($button)
     
 checkTime(13)
 save();
}

function twoPM(){
 $2pm = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("2pm")
 $text = $(`<textarea class = "col hour" id='inputText${2}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(2))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${2}'></button>`)
     
 $('.2pm').append($2pm)
 $($2pm).append($hour)
 $($2pm).append($text)
 $($2pm).append($button)
     
 checkTime(14)
 save();
}

function threePM(){
  $3pm = $(`<div class= "row col-12>`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("3pm")
 $text = $(`<textarea class = "col hour" id='inputText${3}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(3))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${3}'></button>`)
     
 $('.3pmm').append($3pm)
 $($3pm).append($hour)
 $($3pm).append($text)
 $($3pm).append($button)
     
 checkTime(15)
 save();
}

function fourPM(){
  $4pm = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("4pm")
 $text = $(`<textarea class = "col hour" id='inputText${4}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(4))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${4}'></button>`)
     
 $('.4pm').append($4pm)
 $($4pm).append($hour)
 $($4pm).append($text)
 $($4pm).append($button)
     
 checkTime(16)
 save();
}

function fivePM(){
 $5pm = $(`<div class= "row col-12">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("5pm")
 $text = $(`<textarea class = "col hour" id='inputText${5}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(5))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${5}'></button>`)
     
 $('.5pm').append($5pm) 
 $($5pm ).append($hour)
 $($5pm ).append($text)
 $($5pm ).append($button)
     
 checkTime(17)
 save();
}

//runs maim function
getSchedule();
