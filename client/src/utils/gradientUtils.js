// src/utils/gradientUtils.js

// An array of possible colors for the gradient
const COLORS = [
    '#FFC7C7',  // Pastel pink
    '#C7FFD8',  // Pastel green
    '#C7E1FF',  // Pastel blue
    '#F9F5C7',  // Pastel yellow
    '#E2C7FF',  // Pastel purple
    '#FFD6C7',  // Light coral
    '#C7FFF4',  // Light teal
    '#FFF4C7',  // Pastel cream
    '#C7FFEB',  // Light aquamarine
    '#FFC7F5',  // Light magenta
    '#C7D1FF',  // Light periwinkle
    '#F5FFC7',  // Light lime
    '#D8FFC7',  // Soft mint
    '#FFC7D8',  // Light blush
    '#C7FFF7',  // Pastel cyan
    '#E1FFC7',  // Light chartreuse
    '#C7EFFF',  // Light sky blue
    '#FFD1C7',  // Light peach
    '#E0C7FF',  // Soft lavender
    '#C7FFE0',  // Light seafoam
  ];
  
  export function getRandomGradient() {
    // Pick two different random colors
    const color1 = COLORS[Math.floor(Math.random() * COLORS.length)];
    let color2 = COLORS[Math.floor(Math.random() * COLORS.length)];
    // Ensure we don't pick the same color for both
    while (color2 === color1) {
      color2 = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
  
    // Return a linear gradient. Could randomize direction too if you want
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  }
  