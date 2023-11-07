import Square from "./Square.js";

export default class Circle extends Square {
    _radius = this.width / 2;
    constructor(width, color, left, top) {
        super(width, color, left, top);
    }

    draw() {
        super.draw('50%')
    }

    get radius() {
        return this._radius;
    }

    set radius(val) {
        this._radius = val
    }
}