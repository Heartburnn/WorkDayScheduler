$currentTime = moment().format('dddd, MMMM Do, YYYY')
$('#currentDay').text($currentTime)


function checkTime(current){
  $timeCheck = moment().format('HH')
  if(current == $timeCheck){
    $text.addClass('present')
  } else if (current< $timeCheck){
    $text.addClass('past')
  } else {
    $input.addClass('future')
  }
}

function save(){
  $(".saveBtn").click(function(){
    var id = $(this).data("id")
    var userInput = $(this).siblings().eq(1).val()
    localStorage.setItem(id,userInput)
  })  
}

function getSchedule(){
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
   $9am = $(`<div class= "row col-8">`)
  $hour = $(`<div class = "hour time-block col-1"></div>`)
  $hour.text("9am")
  $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
  $text.text(localStorage.getItem(9))
  $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
      
  $('.9am').append($9am)
  $($9am).append($hour)
  $($9am).append($text)
  $($9am).append($button)
      
  checkTime(9)
  save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

function nineAM(){
  $9am = $(`<div class= "row col-8">`)
 $hour = $(`<div class = "hour time-block col-1"></div>`)
 $hour.text("9am")
 $text = $(`<textarea class = "col hour" id='inputText${9}' type='text' name='userInput'></textarea>`)
 $text.text(localStorage.getItem(9))
 $button = $(`<button class = "saveBtn col-1 col-m-2 fas fa-save" data-id='${9}'></button>`)
     
 $('.9am').append($9am)
 $($9am).append($hour)
 $($9am).append($text)
 $($9am).append($button)
     
 checkTime(9)
 save();
}

getSchedule();
