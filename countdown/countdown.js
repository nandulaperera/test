var countDownDate = new Date("Oct 30, 2019").getTime();

var x = setInterval(setTimer,1000);

function setTimer(){
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var seclength = seconds.toString().length;
	var minslength = minutes.toString().length;
	var hrslength = hours.toString().length;
	var dayslength = days.toString().length;

	if (seclength == 1) {
		seconds = "0" + seconds;
	}
	if (minslength == 1) {
		minutes = "0" + minutes;
	}
	if (hrslength == 1) {
		hours = "0" + hours;
	}
	if (dayslength == 1) {
		days = "0" + days;
	}

	var sec1 = seconds/10;
	var sec2 = seconds%10;
	var min1 = minutes/10;
	var min2 = minutes%10;
	var hrs1 = hours/10;
	var hrs2 = hours%10;
	var days1 = days/10;
	var days2 = days%10;
	
	var arr=[[1,1,1,1,1,1,1,1,1,1]/*1-1*/,
			 [1,0,1,1,0,0,1,1,1,1]/*1-2*/,
			 [1,1,0,1,1,0,1,1,1,1]/*1-3*/,
			 [0,0,0,0,0,0,1,1,0,1]/*2-1*/,
			 [0,1,1,0,0,0,0,0,0,1]/*2-2*/,
			 [1,1,0,1,0,1,1,1,1,1]/*2-3*/,
			 [0,0,0,0,0,0,1,1,0,1]/*3-1*/,
			 [0,0,1,0,1,0,0,0,0,1]/*3-2*/,
			 [1,0,0,1,1,1,1,1,1,1]/*3-3*/,
			 [1,0,0,0,0,1,1,0,0,1]/*4-1*/,
			 [0,0,0,0,0,0,0,0,0,0]/*4-2*/,
			 [1,0,0,0,1,1,0,0,1,1]/*4-3*/,
			 [0,1,0,0,0,0,0,0,0,0]/*5-1*/,
			 [0,0,0,0,0,0,0,0,0,0]/*5-2*/,
			 [0,1,0,0,0,0,0,0,0,0]/*5-3*/,
			 [0,0,0,0,0,0,0,1,0,1]/*6-1*/,
			 [0,0,1,0,0,0,0,0,0,0]/*6-2*/,
			 [1,0,0,1,1,0,0,0,1,1]/*6-3*/,
			 [1,0,0,1,1,1,0,0,0,1]/*7-1*/,
			 [1,0,1,1,0,0,0,0,0,1]/*7-2*/,
			 [1,0,0,1,1,0,1,0,1,1]/*7-3*/,
			 [0,1,0,0,0,0,0,0,0,1]/*8-1*/,
			 [0,0,1,0,0,0,0,0,0,1]/*8-2*/,
			 [0,1,0,1,1,1,1,0,1,1]/*8-3*/,
			 [0,0,0,0,0,0,1,1,0,1]/*9-1*/,
			 [0,0,1,0,1,1,1,1,0,1]/*9-2*/,
			 [1,0,0,1,1,1,0,1,1,1]/*9-3*/,
			 [0,0,0,0,0,0,0,0,0,0]/*10-1*/,
			 [0,0,1,0,0,0,0,0,0,0]/*10-2*/,
			 [1,0,0,0,0,0,1,0,1,0]/*10-3*/,
			 [0,1,0,0,0,0,0,0,0,0]/*11-1*/,
			 [0,0,0,0,0,0,0,0,0,0]/*11-2*/,
			 [0,1,0,0,0,0,0,0,0,0]/*11-3*/,
			 [0,0,0,1,0,0,0,1,0,1]/*12-1*/,
			 [0,0,0,0,0,0,0,0,0,0]/*12-2*/,
			 [1,0,0,0,1,1,1,1,1,1]/*12-3*/,
			 [1,1,1,0,0,0,0,0,0,1]/*13-1*/,
			 [1,0,0,0,0,0,0,0,0,1]/*13-2*/,
			 [1,1,1,1,0,1,1,0,1,1]/*13-3*/,
			 [0,0,0,0,0,0,0,0,0,1]/*14-1*/,
			 [0,1,0,0,0,0,0,0,0,1]/*14-2*/,
			 [1,1,1,1,0,1,1,0,1,1]/*14-3*/,
			 [0,0,0,1,1,0,1,1,0,1]/*15-1*/,
			 [0,1,1,1,1,0,1,1,0,1]/*15-2*/,
			 [1,1,0,0,1,1,0,1,1,1]/*15-3*/
			];
	var style = document.documentElement.appendChild(document.createElement("style"));
	for(var i=0;i<arr.length;i++){
		var ruleday1="changedays1-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][days1]+";}}";
		var ruleday2="changedays2-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][days2]+";}}";
		var rulehrs1="changehrs1-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][hrs1]+";}}";
		var rulehrs2="changehrs2-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][hrs2]+";}}";
		var rulemin1="changemin1-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][min1]+";}}";
		var rulemin2="changemin2-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][min2]+";}}";
		var rulesec1="changesec1-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][sec1]+";}}";
		var rulesec2="changesec2-"+(Math.floor((i/3))+1)+"-"+((i%3)+1)+"{0%,100%{opacity:"+arr[i][sec2]+";}}";
		if (CSSRule.KEYFRAMES_RULE) { // W3C
			style.sheet.insertRule("@keyframes " + ruleday1, 0);
			style.sheet.insertRule("@keyframes " + ruleday2, 0);
			style.sheet.insertRule("@keyframes " + rulehrs1, 0);
			style.sheet.insertRule("@keyframes " + rulehrs2, 0);
			style.sheet.insertRule("@keyframes " + rulemin1, 0);
			style.sheet.insertRule("@keyframes " + rulemin2, 0);
			style.sheet.insertRule("@keyframes " + rulesec1, 0);
			style.sheet.insertRule("@keyframes " + rulesec2, 0);
		} else if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
			style.sheet.insertRule("@-webkit-keyframes " + ruleday1, 0);
			style.sheet.insertRule("@-webkit-keyframes " + ruleday2, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulehrs1, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulehrs2, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulemin1, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulemin2, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulesec1, 0);
			style.sheet.insertRule("@-webkit-keyframes " + rulesec2, 0);
		}
		console.log(days+" "+hours+" "+minutes+" "+seconds);
	}
}

