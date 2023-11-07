export default class Rectangle {
  constructor(width, height, color, left, top) {
      this.width = width;  
      this.height = height;  
      this._color = color;  
      this.left = left;  
      this.top = top;
  }

  draw(br = 0) {
      document.body.insertAdjacentHTML('afterbegin',`
          <div style="border-radius: ${br}; width: ${this.width}px; height: ${this.height}px; background: ${this._color}; position:absolute; top: ${this.top}px; left: ${this.left}px"></div>
      `)
  }

  get square() {
      return this.width * this.height
  }

  get color() {
      return this._color
  }

  set color(colorVal) {
      if(colorVal) {
          this._color = colorVal;
      }
  }
}