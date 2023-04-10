
var time = document.getElementById('time');
var btn = document.getElementById('btn');
var list = document.getElementById('list');

var now ;
  var hours;
  var minutes;
  var seconds;
  var amPm;

function showTime() {
  now = new Date;
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  amPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // if hours is 0, set it to 12

  time.innerHTML = (hours < 10 ? '0'+ hours : hours)+':'+(minutes < 10 ? '0' + minutes : minutes)+ ':' +(seconds < 10 ? '0' + seconds : seconds)+' '+ amPm;

}

setInterval(showTime, 1000);

btn.addEventListener('click', function(){

    var hour = document.getElementById('hour').value;
    var min = document.getElementById('min').value;
    var sec = document.getElementById('sec').value;
    var li = document.createElement('li');
    var icon = document.createElement('i');
    icon.classList.add('fas', 'fa-trash');

    li.innerHTML = (hour < 10 ? '0'+ hour : hour)+':'+(min < 10 ? '0' + min : min)+ ':' +(sec < 10 ? '0' + sec : sec)+' '+ (hour >= 12 ? 'PM' : 'AM') ;
    list.append(li);
    li.append(icon);

    alert('alarm has been set');

    icon.addEventListener('click', function () {
        this.parentNode.remove();


   

    var interval = 1000*((parseInt(hour)*3600+parseInt(min)*60+parseInt(sec))-((parseInt(hours)*3600+parseInt(minutes)*60+parseInt(seconds))));

    setTimeout(() => {
      alert('alerm');
      }, interval);

      
  });

    

});
















