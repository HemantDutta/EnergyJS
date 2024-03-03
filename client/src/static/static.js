//Static Code String
export const vanillaHTMLString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <!-- Your HTML content -->
    
<!-- Link EnergyJS library -->
<script src="path/to/energy.min.js"></script>
<!-- Link your main JavaScript file -->
<script src="path/to/main.js"></script>
</body>
</html>
`;
export const jsxReactString = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){
    //You component logic here
}

export default YourComponent;
`;

export const jsxReactClick = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){

    function animateOnClick(){
        const box = new Energy("#box");
        box.translate2D(-100, 100, 800);
    }
    
    return(
        <>
            <div className="box" id="box"></div>
            <button type="button" onClick={animateOnClick}>Click me</button>  
        </>
    )
}

export default YourComponent;
`;

export const jsxReactLoad = `// Inside your React component file
import React from 'react';
import {Energy} from './energy.js';

function YourComponent(){

    useEffect(()=>{
        const box = new Energy("#box");
        box.translate2D(-100, 100, 800);
    },[])
    
    return(
        <>
            <div className="box" id="box"></div>
        </>
    )
}

export default YourComponent;
`;

export const selectorGuideline = `// How to pass selectors in the constructor
    
        //ID based selector
        const box = new Energy("#box");
        
        //Class based selector
        const box = new Energy(".box");
        
        //Tag Based Selector
        const box = new Energy("div");
`;

export const chainMethods = `// How to chain multiple animation methods
        const box = new Energy("#box");
        box.translate2D(-100, 100, 800);
        box.blur(100, 800);
`;

export const translateMethods = `// Translate Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Translate From both X and Y axis Offsets
        box.translate2D(-100, 100, 800);
        
        //Translate To both X and Y axis Offsets
        box.translate2DTo(-100, 100, 800);
        
        //Translate Horizontally from an X offset
        box.translateXOffset(100, 800);
        
        //Translate Horizontally To an X offset
        box.translateXTo(100, 800);
        
        //Translate Vertically from an Y offset
        box.translateYOffset(100, 800);
        
        //Translate Vertically To an Y offset
        box.translateYTo(100, 800);
        
`;

export const scaleMethods = `// Scale Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Scale From both X and Y axis Values
        box.scale2D(100, 100, 800);
        
        //Scale To both X and Y axis Values
        box.scale2DTo(100, 100, 800);
        
        //Scale Horizontally from an X value
        box.scaleX(100, 800);
        
        //Scale Horizontally To an X value
        box.scaleXTo(100, 800);
        
        //Scale Vertically from an Y Value
        box.scaleY(100, 800);
        
        //Scale Vertically To an Y value
        box.scaleYTo(100, 800);
        
`;

export const rotateMethods = `// Rotate Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Rotation from a degree value
        box.rotate(-360, 800);
        
        //Rotate to a degree value
        box.rotateTo(45, 800);
        
        //Rotate on a specific axis
        box.rotateAxis("x", 45, 800);  
        
        //Rotate To on a specific axis
        box.rotateAxisTo("y", -45, 800);  
        
`;

export const opacityMethods = `// Opacity Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Opacity from a certain amount to 1
        box.opacity(0.5, 800);
        
        //Opacity from a 1 to a certain amount
        box.opacityRev(0.5, 800);
        
        //Opacity set to certain amount
        box.opacityTo(0.5, 800);
`;

export const blurMethods = `// Blur Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Blur from a certain pixel value to 0
        box.blur(100, 800);
        
        //Blur to a certain pixel value from 0
        box.blurTo(100, 800);
`;

export const brightnessMethods = `// Brightness Methods
    
        //Create Energy Object
        const box = new Energy("#box");
        
        //Brightness from a certain percentage value to 100%
        box.brightness(0, 800);
        
        //Brightness to a certain percentage value from default
        box.brightnessTo(100, 800);
`;

export const vanillaHTMLClick = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <div class="box" id="box"></div>
    <button type="button" onclick="animateBox()">Click Me</button>

<script src="path/to/energy.min.js"></script>
<script> 
function animateBox() {
    const box = new Energy("#box");
    box.translate2D(-100, 100, 800);
}
</script>
</body>
</html>
`;

export const vanillaHTMLLoad = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Web Page</title>
</head>
<body>
    <div class="box" id="box"></div>
    
<script src="path/to/energy.min.js"></script>
<script> 

// First way: Using Global Scope
const box = new Energy("#box");
box.translate2D(-100, 100, 800);

// Second way: Add an event listener on the html document
document.addEventListener("load", animateBox);

function animateBox() {
    const box = new Energy("#box");
    box.translate2D(-100, 100, 800);
}
</script>
</body>
</html>
`;