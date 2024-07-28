/**
 * Calculates the area of a given shape.
 * @param {Object} shape - The shape object containing the type and dimensions.
 * @returns {number} - Returns the area of the shape.
 * @throws {Error} - Throws an error if the shape type is invalid.
 */
function calculateArea(shape) {
    if (shape.type === "circle") {
      // Calculate the area of a circle
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "square") {
      // Calculate the area of a square
      return shape.side * shape.side;
    } else {
      // Throw an error for invalid shape types
      throw new Error("Invalid shape type");
    }
  }
  
  // Example usage:
  const circle = { type: "circle", radius: 5 };
  const square = { type: "square", side: 4 };
  
  console.log(calculateArea(circle)); // Output: 78.53981633974483
  console.log(calculateArea(square)); // Output: 16