
const Scene = require('Scene');
const Time = require('Time');
const Materials = require('Materials');
const Textures = require('Textures');
const TouchGestures = require('TouchGestures');


// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
// https://sparkar.facebook.com/ar-studio/learn/reference/classes/materialsmodule#3d-text-properties

const colors = ['black', 'yellow', 'white', 'pink', 'blue', 'green', 'red'];
(async function() {

const [plane, material, text] = await Promise.all([
    Scene.root.findFirst('plane0'),
    Materials.findFirst('black_mat'),
    Scene.root.findFirst('3dText0')
  ]);

const [black, yellow, white, pink, blue, green, red] = await Promise.all([
    Textures.findFirst('black'),
    Textures.findFirst('yellow'),
    Textures.findFirst('white'),
    Textures.findFirst('pink'),
    Textures.findFirst('blue'),
    Textures.findFirst('green'),
    Textures.findFirst('red'),
  ]);

const mats = [black, yellow, white, pink, blue, green, red]
  // material.diffuse = yellow;
  

TouchGestures.onTap(plane).subscribe(function () {
	  const countdownTimer = Time.setInterval(function () {
  	const ranNum = getRandomColor()
  	text.text = "your lucky\nnumber is...." + ranNum;   
  }, 100);

	
Time.setTimeout(function () {
	        Time.clearInterval(countdownTimer);
	}, 5000);
})
})();

function getRandomColor() { 
	return Math.floor(Math.random() * 9)
}

