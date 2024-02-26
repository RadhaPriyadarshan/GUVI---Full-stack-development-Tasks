class Circle {
    #radius = 1.0;
    #color = "red";
  
    constructor(radius = 1.0, color = "red") {
      this.#radius = radius;
      this.#color = color;
    }
  
    getRadius() {
      return this.#radius;
    }
  
    setRadius(radius) {
      this.#radius = radius;
    }
  
    getColor() {
      return this.#color;
    }
  
    setColor(color) {
      this.#color = color;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.#radius;
    }
  
    toString() {
      return `Circle[radius=${this.#radius}, color=${this.#color}]`;
    }
  }
  

  const circle = new Circle(3, "green");
  console.log(circle.toString());
  