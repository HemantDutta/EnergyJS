//Energy JS | Created by Hemant Dutta https://github.com/HemantDutta

//Class Declaration
class Energy {

    //Constructor
    constructor(elem) {
        this.elem = document.querySelector(elem);
    }

    //Translate Methods

    //Translate Horizontally
    translateXOffset(x, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.transform = `translateX(${x}%)`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.transform = `translateX(0%)`;
        }, 100);

        return null;
    }

    //Translate Horizontally To
    translateXTo(x, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.transform = `translateX(${x}%)`;
    }

    //Translate Vertically
    translateYOffset(y, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.transform = `translateY(${y}%)`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.transform = `translateY(0%)`;
        }, 100);
    }

    //Translate Vertically To
    translateYTo(y, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.transform = `translateY(${y}%)`;
    }

    //Translate 2D
    translate2D(x, y, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.transform = `translate(${x}%,${y}%)`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.transform = `translate(0%,0%)`;
        }, 100);
    }

    //Translate 2D To
    translate2DTo(x, y, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.transform = `translate(${x}%,${y}%)`;
    }


    //Opacity Method

    //Opacity from amt to 1
    opacity(amt, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.opacity = `${amt}`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.opacity = "1";
        }, 100)
    }

    //Opacity from 1 to amt
    opacityTo(amt, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.opacity = `${amt}`;
    }

    //Opacity from 1 to amt
    opacityRev(amt, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.opacity = "1";

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.opacity = `${amt}`;
        }, 100)
    }


    //Scale Methods

    //scale 2d
    scale2D(x, y, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.scale = `${x} ${y}`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.scale = `1 1`;
        }, 100);
    }

    //scale 2d To
    scale2DTo(x, y, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.scale = `${x} ${y}`;
    }

    //scaleX
    scaleX(x, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.scale = `${x}`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.transform = `scaleX(1)`;
        }, 100);
    }

    //scaleXTo
    scaleXTo(x, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.transform = `scaleX(${x})`;
    }

    //scaleY
    scaleY(y, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.transform = `scaleY(${y})`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.transform = `scaleY(1)`;
        }, 100);
    }

    //scaleY
    scaleYTo(y, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.transform = `scaleY(${y})`;
    }


    //Rotate Methods

    //Normal Rotate
    rotate(angle, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.rotate = `${angle}deg`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.rotate = `0deg`;
        }, 100)
    }

    //Normal Rotate To
    rotateTo(angle, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.rotate = `${angle}deg`;
    }

    //Rotate on Axis
    rotateAxis(axis, angle, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.rotate = `${axis} ${angle}deg`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.rotate = `${axis} 0deg`;
        }, 100)
    }

    //Rotate on Axis To
    rotateAxisTo(axis, angle, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.rotate = `${axis} ${angle}deg`;
    }


    //Filter Methods

    //Blur From
    blur(amt, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.filter = `blur(${amt}px)`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.filter = `blur(0px)`;
        }, 100)
    }

    //Blur To
    blurTo(amt, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.filter = `blur(${amt}px)`;
    }


    //Brightness from
    brightness(amt, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.filter = `brightness(${amt}%)`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.filter = `brightness(100%)`;
        }, 100)
    }

    //Brightness from
    brightnessTo(amt, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.filter = `brightness(${amt}%)`;
    }

    //Height & Width Methods

    //Height From
    heightFrom(h, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.height = `${h}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.height = `100%`;
        }, 100)
    }

    //Height To
    heightTo(h, dur) {
        this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
        this.elem.style.height = `${h}%`;
    }

    //Height From To
    heightFromTo(hFrom, hTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.height = `${hFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.height = `${hTo}%`;
        }, 100)
    }

    //Width From
    widthFrom(w, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.width = `${w}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.width = `100%`;
        }, 100)
    }

    //Width From To
    widthFromTo(wFrom, wTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.width = `${wFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.width = `${wTo}%`;
        }, 100)
    }


    //Top | Bottom | Left | Right  Methods
    topFromTo(tFrom, tTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.top = `${tFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.top = `${tTo}%`;
        }, 100)
    }

    bottomFromTo(bFrom, bTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.bottom = `${bFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.bottom = `${bTo}%`;
        }, 100)
    }

    rightFromTo(rFrom, rTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.right = `${rFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.right = `${rTo}%`;
        }, 100)
    }

    leftFromTo(lFrom, lTo, dur) {
        this.elem.style.transition = `none`;
        this.elem.style.left = `${lFrom}%`;

        setTimeout(() => {
            this.elem.style.transition = `all ${dur}ms cubic-bezier(0.87, 0, 0.13, 1)`;
            this.elem.style.left = `${lTo}%`;
        }, 100)
    }

}

export {Energy}