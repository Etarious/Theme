function day_theme(){
	let day_style = `
		body{
			background-color: white;
			font-family: century gothic;
			transition: 0.3s;
		}

		h1{
			text-align: center;
			color: black;
			transition: 0.3s;
		}

		footer{
			background-color: rgb(200, 200, 200);
			text-align: center;
			margin-top: 10px;
			transition: 0.3s;
		}
		
		h3{
			color: black;
			font-size: 200px;
			text-align: center;
			text-shadow: 0px 3px 5px white;
			font-family: 'Sen', sans-serif;
			transition: 0.3s;
		}

		h2{
			color: blue;
			font-size: 100px;
			text-align: center;
			transition: 0.3s;
			background: -webkit-linear-gradient(blue, blue, blue);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-family: 'Nunito', sans-serif;
		}

		img{
			transition: 0.3s;
		}

		.container{
			background-image: radial-gradient(circle, grey, grey 5%, white 5%, white 10%, grey 10%, grey 15%, white 15%, white 20%, grey 20%, grey 25%, white 25%, white 30%, grey 30%, grey 35%, white 35%, white 40%, grey 40%, grey 45%, white 45%, white 50%, grey 50%, grey 55%, white 55%, white 60%, grey 60%, grey 65%, white 65%, white 70%, grey 70%, grey 75%, white 75%, white 80%, grey 80%, grey 85%, white 85%, white 90%, grey 90%, grey 95%, white 95%, white);
			height: 500px;
			transition: 0.3s;
		}
	`;

	let theme_name = "Day Theme";

	let image = "<img src='images/isreal.png' width='10%' alt='Isreal' title='Day image'>"

	let day = [day_style, theme_name, image];

	localStorage.clear();
	

	day = JSON.stringify(day);
	localStorage.setItem("theme", day);
	day = localStorage.getItem("theme");
	day = JSON.parse(day);
	//console.log(day_style);

	let style = document.createElement("style");
	style.innerHTML = day[0];
	
	document.head.appendChild(style);

	let name = document.getElementById("name");
	name.innerHTML = day[1];

	let theme_img = document.getElementById("image");
	theme_img.innerHTML = day[2];
}

function night_theme(){
	let night_style = `
		body{
			background-color: rgb(50, 50, 50);
			font-family: century gothic;
			transition: 0.3s;
		}

		h1{
			text-align: center;
			color: rgb(230, 230, 230);
			transition: 0.3s;
		}

		footer{
			background-color: black;
			text-align: center;
			margin-top: 10px;
			color: rgb(100, 100, 100);
			transition: 0.3s;
		}
		
		h3{
			color: white;
			font-size: 200px;
			text-align: center;
			text-shadow: 0px 3px 5px black;
			font-family: 'Nunito', sans-serif;
			transition: 0.3s;
		}

		h2{
			color: tomato;
			font-size: 100px;
			text-align: center;
			transition: 0.3s;
			background: -webkit-linear-gradient(green, white, green);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-family: 'Sen', sans-serif;
		}

		img{
			transition: 0.3s;
		}

		.container{
			background-image: radial-gradient(circle, black, black 5%, grey 5%, grey 10%, black 10%, black 15%, grey 15%, grey 20%, black 20%, black 25%, grey 25%, grey 30%, black 30%, black 35%, grey 35%, grey 40%, black 40%, black 45%, grey 45%, grey 50%, black 50%, black 55%, grey 55%, grey 60%, black 60%, black 65%, grey 65%, grey 70%, black 70%, black 75%, grey 75%, grey 80%, black 80%, black 85%, grey 85%, grey 90%, black 90%, black 95%, grey 95%, grey);
			height: 500px;
			transition: 0.3s;
		}
	`;

	let theme_name = "Night Theme";

	let image = "<img src='images/nigeria.png' width='10%' alt='Nigeria' title='Night image'>"

	let night = [night_style, theme_name, image];

	localStorage.clear();

	night = JSON.stringify(night);
	localStorage.setItem("theme", night);
	night = localStorage.getItem("theme");
	night = JSON.parse(night);
	//console.log(night_style);

	let style = document.createElement("style");
	style.innerHTML = night[0];

	document.head.appendChild(style);

	let name = document.getElementById("name");
	name.innerHTML = night[1];

	let theme_img = document.getElementById("image");
	theme_img.innerHTML = night[2];
}


function persistTheme(){
	let theme = localStorage.getItem("theme");

	theme = JSON.parse(theme);
	//console.log(theme);

	let style = document.createElement("style");
	style.innerHTML = theme;

	document.head.appendChild(style);
}


function default_theme(){
	localStorage.clear();
	window.location.href = "theme.html";
}
