// player obj
const player = {
	character: $("#player"),
	playerPos: 0
}
console.log(player)

// ai object
const ai = {
	character:$("#ai"),
	aiPos : 0
}




console.log(ai)


let playerPosition = 0;
let aiPosition = 0;





const aiEasy = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiEasy, 500)
}


const aiMed = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMed,400)
}

const aiHard = () => {

	if (ai.aiPos <1000) {
		ai.character.animate ({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}
	
	ai.aiPos = aiPosition
	result()
	setTimeout(aiHard, 300)
}

$("#uwin").hide()
$("#ulose").hide()
$("#try").hide()

// move the  ai
$("#easy").click(function(){
	console.log("hello")
	
	$("#start").click(function(){
		alert('use right arrow key to move your character')
		aiEasy()
		$("#start").hide()

	})

})

// medium

$("#med").click(function(){
	$("#start").click(function(){
		alert('use right arrow key to move your character')
		aiMed()
		$("#start").hide()
	})
})

// hard

$("#hard").click(function(){
	$("#start").click(function(){
		alert('use right arrow key to move your character')
		aiHard()
		$("#start").hide()
	})
})


//  move the player function

// player.character.click(function(){

// 	// console.log("kimbap")
// 	$(this).animate({
// 		'left': (playerPosition+=100) + 'px'
// 	})

// 	// console.log('this is the current value of player position: ' + playerPosition)
// 	player.playerPos = playerPosition
// 	// console.log(player)

// 	result()
// })

$("body").keyup(function(e) {
  if(e.keyCode == 39) { // right
    $("#player").animate({
      // left: "+=100"
      'left': (playerPosition+=100) + 'px'

    })
    } 

    player.playerPos = playerPosition
    result()
});






// button effects
$("#start").hide()


$("#easy").click(function(){
	$("#med").hide()
	$("#hard").hide()
	$("#easy").hide()
	$("#try").hide()
	$("#start").show()


})

$("#med").click(function(){
	$("#med").hide()
	$("#hard").hide()
	$("#easy").hide()
	$("#try").hide()
	$("#start").show()
})

$("#hard").click(function(){
	$("#med").hide()
	$("#hard").hide()
	$("#easy").hide()
	$("#try").hide()
	$("#start").show()
})


// parallax background

$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $('body').css('background-position', x + 'px 0');
    }, 10);
})



const result = () => {

	if(player.playerPos === 1000){

		$("#uwin").show()
		$("#try").show()
		$("#try").click(function(){
			location.reload(true)
		})
		ai.stop(true,true)
		return true
	}

	else if (ai.aiPos === 1000){
		$("#ulose").show()	
		$("#try").show()
		$("#try").click(function(){
			location.reload(true)
		})
		player.stop(true,true)
		return true

	}

	


}

