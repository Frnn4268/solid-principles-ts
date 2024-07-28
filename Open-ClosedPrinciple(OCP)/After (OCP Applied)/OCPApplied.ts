/**
 * Interface representing a shape with a method to calculate its area.
 */
interface Shape {
    calculateArea(): number;
  }
  
  /**
   * Class representing a circle.
   * Implements the Shape interface.
   */
  class Circle implements Shape {
    radius: number;
  
    /**
     * Constructor to initialize the circle with a radius.
     * @param {number} radius - The radius of the circle.
     */
    constructor(radius: number) {
      this.radius = radius;
    }
  
    /**
     * Calculates the area of the circle.
     * @returns {number} - Returns the area of the circle.
     */
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  /**
   * Class representing a square.
   * Implements the Shape interface.
   */
  class Square implements Shape {
    side: number;
  
    /**
     * Constructor to initialize the square with a side length.
     * @param {number} side - The side length of the square.
     */
    constructor(side: number) {
      this.side = side;
    }
  
    /**
     * Calculates the area of the square.
     * @returns {number} - Returns the area of the square.
     */
    calculateArea(): number {
      return this.side * this.side;
    }
  }
  
  /**
   * Function to calculate the area of a given shape.
   * @param {Shape} shape - The shape object implementing the Shape interface.
   * @returns {number} - Returns the area of the shape.
   */
  function calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
  
  // Example usage:
  const circle = new Circle(5);
  const square = new Square(4);
  
  console.log(calculateArea(circle)); // Output: 78.53981633974483
  console.log(calculateArea(square)); // Output: 16