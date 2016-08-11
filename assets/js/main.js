/**
 * 
 */

var srcImg = [];

document.addEventListener('DOMContentLoaded', function() {
	
	mailUs();
	hoverImages();
	search();
	
}, false);

function search() {
	document.getElementById('search').addEventListener('click', function() {
		document.getElementById('Q').style. visibility = 'visible';
	})
}

function hoverImages() {
	var img1 = document.getElementById('img1');
	var img2 = document.getElementById('img2');
	var img3 = document.getElementById('img3');
	
	img1.addEventListener('click', function() {
		document.getElementById('carosel1').style.backgroundImage = "url('assets/images/sb.jpg')";
		document.getElementById('heading').innerHTML = 'Spongebob';
	}, false);
	
	img2.addEventListener('click', function() {
		document.getElementById('carosel1').style.backgroundImage = "url('assets/images/madmax.jpg')";
		document.getElementById('heading').innerHTML = 'Mad-max';
	}, false);
	
	img3.addEventListener('click', function() {
		document.getElementById('carosel1').style.backgroundImage = "url('assets/images/exsmall.jpg')";
		document.getElementById('heading').innerHTML = 'Ex-Machina';
	}, false);

}

function mailUs() {
	var name = document.getElementById('in-name');
	var mail = document.getElementById('in-mail');
	var text = document.getElementById('message');
	
	name.addEventListener('focus', function() {
		document.getElementById('lb-name').style.transition = 'all 0.4s ease';
		document.getElementById('lb-name').style.top = '-70px';
	},false);
	
	mail.addEventListener('focus', function() {
		document.getElementById('lb-mail').style.transition = 'all 0.4s ease';
		document.getElementById('lb-mail').style.top = '-70px';
	},false);
	
	text.addEventListener('focus', function() {
		document.getElementById('lb-text').style.transition = 'all 0.4s ease';
		document.getElementById('lb-text').style.top = '-120px';
	},false);
	
	name.addEventListener('blur', function() {
		document.getElementById('lb-name').style.transition = 'all 0.4s ease';
		document.getElementById('lb-name').style.top = '-30px';
	},false);
	
	mail.addEventListener('blur', function() {
		document.getElementById('lb-mail').style.transition = 'all 0.4s ease';
		document.getElementById('lb-mail').style.top = '-30px';
	},false);
	
	text.addEventListener('blur', function() {
		document.getElementById('lb-text').style.transition = 'all 0.4s ease';
		document.getElementById('lb-text').style.top = '-30px';
	},false);
}

