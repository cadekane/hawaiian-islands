/* Write your code here: */

/**
 * Pt1: Define Objects
 * Pt2: Store Islands in an Array
 * Pt3: Add and Edit an Attribute
 * Pt4: Stretch Goals
 */

// Pt1: Define Objects


// Pt2: Store Islands in an Array


// Pt3: Add and Edit an Attribute


// Pt4: Stretch Goals


/* DO NOT EDIT. This code is used to visualize your array of island objects. */
  
  const islandsContainer = document.getElementById("islands-container");
  
  // Function to display island information dynamically in HTML
  function displayIslandInfo(island) {
    const islandDiv = document.createElement("div");
    islandDiv.classList.add("island-container");
  
    // Display island properties
    for (const property in island) {
      const propertyParagraph = document.createElement("p");
      propertyParagraph.innerHTML = `<strong>${property}:</strong> ${island[property]}`;
      islandDiv.appendChild(propertyParagraph);
    }
  
    islandsContainer.appendChild(islandDiv);
  }
  
  // Example usage: Display information for each island
  islands.forEach((island) => displayIslandInfo(island));
  