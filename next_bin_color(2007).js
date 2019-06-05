var today = new Date();
var next = new Date();

if (today.getDay() <= 3)
{
  var wait = 3-today.getDay();
}
else
{
  var wait = 11-today.getDay();
}

next.setDate(today.getDate()+wait);

switch (next.getDate()%10)
{
  case 1:
	var extra = "st"; break;
  case 2:
	var extra = "nd"; break;
  case 3:
	var extra = "rd"; break;
  default:
	var extra = "th"; break;
}

var month = new Array();
month.push("January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

if (wait==0) {var txt = " (today)";}
if (wait==1) {var txt = " (tomorrow)";}
if (wait>1) {var txt = " (in " + wait + " days time)";}

document.write("<div id='bindata' style='font-family:arial;font-size:18pt;font-weight:bold'>Bin color for Wednesday " + next.getDate() + extra + " " + month[next.getMonth()] + " " + next.getFullYear() + txt + "</div>");

var tmpval = Math.floor(((today.getTime()-Date.parse("Oct 10, 2007"))/(1000*60*60*24))%14);
if (tmpval > 0 && tmpval <= 7)
{
  document.getElementById("bindata").style.color = "#007A00";
}
else
{
  document.getElementById("bindata").style.backgroundColor = "#222222";
  document.getElementById("bindata").style.color = "#F0FF00";
}