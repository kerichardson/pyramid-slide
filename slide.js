
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */

function determineHeightAndThenDrawPyramid() {
/*
clear height from html, identify new height input,
and report back to user
*/
	document.getElementById("slideValue").innerHTML= "";
	var height = document.getElementById("slideScale").value;
	var numElem = document.createTextNode(height);
	document.getElementById("slideValue").appendChild(numElem);
//draw pyramid with given height
	drawPyramid(height);
}

/**
*Links button action to determineHeightAndThenDrawPyramid
*/
// var scale = document.querySelector("#slideScale");
// scale.addEventListener("input", function() {
//     determineHeightAndThenDrawPyramid();
//});

/**
* Renders, in the HTML document, a Mario pyramid of the specified height
*/
function drawPyramid(height) {
     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML= "";
	 //document.getElementById("slideValue").innerHTML= "";
     // for each row....
     for (var row = 0; row < height; row++) {
         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += "\u00A0";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

		// create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
		rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
