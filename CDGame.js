var player = document.getElementById("player");
var fruit = document.getElementById("fruit");

function jump()
{
	if(player.classList != "animate")
	{
	player.classList.add("animate");
	}
	setTimeout(function()
	{
		player.classList.remove("animate");
	},500);
}
	var lives = 2;
	var score = 0;

	var fruitChange = setInterval(function()
	{
		var fruitType =( (Math.random()) * (3 - 0) + 0);
		console.log(fruitType);
		if(fruitType <= 0)
		{
			document.getElementById("fruit").style.backgroundImage = "url('0.png')";
			
		}
		else if(fruitType <= 1)
		{
			document.getElementById("fruit").style.backgroundImage = "url('1.png')";
			
		}
		else if(fruitType <= 2)
		{
			document.getElementById("fruit").style.backgroundImage = "url('2.png')";
		}
		else
		{
			document.getElementById("fruit").style.backgroundImage = "url('3.png')";
		}
		
	},1000);
	
	var intersect = setInterval(function ()
	{	
		var playerTop =
			parseInt(window.getComputedStyle(player).getPropertyValue("top"));
			
	
		var fruitLeft = 
			parseInt(window.getComputedStyle(fruit).getPropertyValue("left"));
			if(fruitLeft <20 && fruitLeft > 0 && playerTop >=130)
		{	
			
			if(lives <=0)
			{
				fruit.style.animation = "none";
				fruit.style.display = "none";
				alert("you lose! " + " score: " + score);
			
			}
			else
			{
				lives--; 
			}
		
		}	
		if(fruitLeft < 20 && fruitLeft > 0 && playerTop <= 130)
		{	
			score = score + 1;
			document.getElementById("score").innerHTML = score;
		}
		
	},10);
	
	
	
	
	

