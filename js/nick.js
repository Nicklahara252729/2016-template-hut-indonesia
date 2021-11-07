var nrImg=4;
var IntSeconds=4;
function load(){
	nrShown=0;
	Vect = new Array(nrImg + 10);
	Vect[0]=document.getElementById("img1");
	vect[0].style.visibility="visible";
	for (var i=0;i<nrImg;i++){
		Vect[i]=document.getElementById("img" + (i+1));
	}
	mytime=setInterval(Timer, IntSeconds * 1000);
}
function Timer(){
	nrShown++;
	if(nrShown == nrImg)
		nrShown=0;
    Effect();
}
function Effect(){
	for(var i=0;i<nrImg;i++){
		Vect[i].style.opacity="0";
		Vect[i].style.visibility="hidden";
	}
		Vect[nrShown].style.opacity="1";
		Vect[nrShown].style.visibility="visible";
}






$(function(){
$(window).scroll(function(){
	if($(window).scrollTop()>600){
		$('.top').fadeIn('slow');
	}else{
	$('.top').fadeOut('slow');
        }
})
$('.top').click(function(){
	$('body,html').animate({
		scrollTop:0
		},1000);
    return false;
        });
    });
$(function(){
	$('body').css({
	});
});