function formSubmit(){
var data={
	"animal":document.getElementById("animal").value,
	"anotherAnimal":document.getElementById("anotherAnimal").value,
	"oneMoreAnimal":document.getElementById("oneMoreAnimal").value,
	"adjective":document.getElementById("adjective").value,
	"verb":document.getElementById("verb").value,
	"number":document.getElementById("number").value,
	"yes":document.getElementById("yes").checked,
	"quicker":document.getElementById("quicker").value,
	"motivation":document.getElementById("motivation").value,
	"message":document.getElementById("message").value
};
//console.log(data);
localStorage.setItem("data",JSON.stringify(data));
}

function getdata(){
var data = localStorage.getItem("data");
//localStorage.clear();
var data=JSON.parse(data);
var u =document.getElementsByTagName('u');
for(var i=0;i<u.length;i++){
	switch(u[i].className){
		case "animal":
			u[i].innerText=data["animal"];
			break;
		case "anotherAnimal":
			u[i].innerText=data["anotherAnimal"];
			break;
		case "oneMoreAnimal":
			u[i].innerText=data["oneMoreAnimal"];
			break;
		case "adjective":
			u[i].innerText=data["adjective"];
			break;
		case "verb":
			u[i].innerText=data["verb"];
			break;
		case "number":
			u[i].innerText=data["number"];
			break;
		case "quicker":
			u[i].innerText=data["quicker"];
			break;
		case "yes":
			u[i].innerText=data["yes"]?"YES":"NO";
			break;
		case "motivation":
			u[i].innerText=data["motivation"];
			break;
		case "message":
			u[i].innerText=data["message"];
			break;
		default:
			u[i].innerText=data["___________"];
			break;
	}

}
}