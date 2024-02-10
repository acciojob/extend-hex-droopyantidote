const extendHex = (shortHex) => {
  // write your code here
	// Remove '#' if it exists
    shortHex = shortHex.replace('#', '');

    // Check if the shortHex has only 3 characters
    if (shortHex.length === 3) {
        // Extend each color component
        let fullHex = '';
        for (let i = 0; i < 3; i++) {
            // Get the color component
            let component = shortHex[i];
            // Extend the color component by repeating it
            fullHex += component + component;
        }
        // Add '#' prefix and return the full hex code
        return '#' + fullHex;
    } else {
        // If the input is not a short hex code, return null or throw an error
        return null; // Or you can throw an error here
    }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
