function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
        throw new Error('Invalid card face or suit');
    }

    return {
        get face() {
            return face;
        },
        get suit() {
            return suit;
        },
        toString() {
            return `${face}${validSuits[suit]}`;
        }
    };
}

// Test cases
try {
    console.log(createCard('A', 'S').toString()); // Output: A♠
    console.log(createCard('10', 'H').toString()); // Output: 10♥
    console.log(createCard('1', 'C').toString()); // Should throw an error
} catch (error) {
    console.error(error.message);
}
