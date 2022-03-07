update = document.getElementById("update");
boxModel = document.querySelector(".model-box");
box = document.querySelector(".box");
//
// update.onclick = function () {
// 	 // // window.location.href = "http://127.0.0.1:8000/update/10";
// 	 // history.pushState({}, null, "http://127.0.0.1:8000/update/10");
// 	boxModel.style.visibility = "visible";
// 	boxModel.style.opacity = "1";
// };

window.onclick = function (event) {
	if (event.target == boxModel) {
		console.log("ddd");
		boxModel.style.visibility = "hidden";
		boxModel.style.opacity = "0";
	}
};

$('#update').on('submit', function(event){
    event.preventDefault();
    your_ajax_function();
});