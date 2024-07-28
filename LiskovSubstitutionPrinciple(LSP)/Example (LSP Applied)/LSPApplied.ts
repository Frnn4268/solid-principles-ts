/**
 * Interface representing a shape with a method to calculate its area.
 */
interface Shape {
    calculateArea(): number;
  }
  
  /**
   * Class representing a rectangle.
   * Implements the Shape interface.
   */
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    /**
     * Constructor to initialize the rectangle with width and height.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    /**
     * Calculates the area of the rectangle.
     * @returns {number} - Returns the area of the rectangle.
     */
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  /**
   * Function to draw a shape.
   * Adheres to the Liskov Substitution Principle (LSP).
   * @param {Shape} shape - The shape object implementing the Shape interface.
   */
  function drawShape(shape: Shape) {
    const area = shape.calculateArea();
    // Draw the shape based on its area
    console.log(`Drawing shape with area: ${area}`);
  }
  
  // Example usage:
  drawShape(new Rectangle(5, 4)); // Output: Drawing shape with area: 20