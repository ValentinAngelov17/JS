function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660', // Spades (♠)
            'H': '\u2665', // Hearts (♥)
            'D': '\u2666', // Diamonds (♦)
            'C': '\u2663'  // Clubs (♣)
        };

        if (!validFaces.includes(face) || !validSuits.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            toString() {
                return `${face}${validSuits[suit]}`;
            }
        };
    }

    try {
        const result = cards.map(cardStr => {
            const face = cardStr.slice(0, -1);
            const suit = cardStr.slice(-1);
            const card = createCard(face, suit);
            return card.toString();
        });
        console.log(result.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}

// Test cases
printDeckOfCards(['AS', '10D', 'KH', '2C']); // Output: A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']); // Output: Invalid card: 1C
