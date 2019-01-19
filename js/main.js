// 4-1 Click to Change Text
// https://stackoverflow.com/questions/28620819/how-to-change-button-text-on-click-using-javascript
function changeText() {
	var change = document.getElementById("welcome-text-change");
 	if (change.innerHTML == "Welcome Message"){
 		change.innerHTML = "Have a Good Time!";
    } else {
		change.innerHTML = "Welcome Message";
    }
}
// 4-3 Click to Show More Content Boxes
/*
>JavaScript-Toggle Element style
 https://stackoverflow.com/questions/4528085/toggle-show-hide-div-with-button
>setTimeout : https://stackoverflow.com/questions/29755233/trouble-with-settimeout-with-addeventlistener
*/
var togglebutton = document.getElementById("btn-show");
var showcontent = document.getElementById("show-box");

togglebutton.addEventListener("click", function(){
	showcontent.style.display = (showcontent.dataset.toggled ^= 1)? "block" : "none";
});

/*
4-3 Click to Show More Content Boxes: solution-2
*/
// function main(){
// 	// $('#test').hide();
// 	// $('#btn-test2').on('click',function() {
// 	// 	$(this).next().slideToggle(400);
// 	// } );
// 	// $('#show-box').hide();
// 	// $('#btn-show').on('click', function(){
// 	// 	$(this).next().slideToggle(400);
// 	// });
// }
// $(document).ready(main);

/*
4-3 Click to Show More Content Boxes: solution-3
*/
// function showBox() {
//   var boxShow = document.getElementById("show-box");
//   if (boxShow.style.display === "none") {
//     boxShow.style.display = "block";
//   } else {
//     boxShow.style.display = "none";
//   }
// }