import Rectangle from "./Rectangle.js"

export default class Square extends Rectangle{
    constructor(width, color, left, top) {
        super(width, width, color, left, top)
    }
}