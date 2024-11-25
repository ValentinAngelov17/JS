let SkiResort = require('./solution');

describe('testing SkiResort class', function () {
    beforeEach(() => {
        resort = new SkiResort('Alpine Resort'); // Create a new instance
    });

    describe('testing class constructor', () => {
        test('testing name, voters', () => {
            expect(resort.name).toEqual("Alpine Resort");
            expect(resort.voters).toEqual(0);
            expect(resort.hotels).toEqual([]);
        })
    });

    describe('build()', () => {
        test('test invalid data handler', () => {
            expect(() => resort.build("Hotel Alpine", 0)).toThrow("Invalid input");
            expect(() => resort.build("", 5)).toThrow("Invalid input");
            expect(() => resort.build("", 0)).toThrow("Invalid input");
        })
        test('should successfully add a hotel if valid inputs are provided', () => {
            const result = resort.build("Hotel Alpine", 5);
            expect(result).toBe("Successfully built new hotel - Hotel Alpine");
            expect(resort.hotels.length).toBe(1);
            expect(resort.hotels[0]).toEqual({
                name: "Hotel Alpine",
                beds: 5,
                points: 0
            });
        });

        test('should correctly add multiple hotels with valid inputs', () => {
            resort.build("Hotel Alpine", 5);
            resort.build("Snowy Peak Inn", 10);

            expect(resort.hotels.length).toBe(2);
            expect(resort.hotels[1]).toEqual({
                name: "Snowy Peak Inn",
                beds: 10,
                points: 0
            });
        });
    })

    describe('book method', () => {
        beforeEach(() => {
            resort.build('Sun', 10);
        });

        test('should throw an error if name is empty or beds < 1', () => {
            expect(() => resort.book("", 5)).toThrow("Invalid input");
            expect(() => resort.book("Sun", 0)).toThrow("Invalid input");
        });

        test('should throw an error if the hotel does not exist', () => {
            expect(() => resort.book("Moon", 3)).toThrow("There is no such hotel");
        });

        test('should throw an error if there are not enough beds', () => {
            expect(() => resort.book("Sun", 15)).toThrow("There is no free space");
        });

        test('should successfully book beds and reduce available beds', () => {
            expect(resort.book("Sun", 5)).toBe("Successfully booked");
            expect(resort.hotels[0].beds).toBe(5);
        });
    });

    // Testing 'leave' method
    describe('leave method', () => {
        beforeEach(() => {
            resort.build('Sun', 10);
            resort.book('Sun', 5);
        });

        test('should throw an error if name is empty or beds < 1', () => {
            expect(() => resort.leave("", 3, 1)).toThrow("Invalid input");
            expect(() => resort.leave("Sun", 0, 2)).toThrow("Invalid input");
        });

        test('should throw an error if the hotel does not exist', () => {
            expect(() => resort.leave("Moon", 3, 1)).toThrow("There is no such hotel");
        });

        test('should add points, increase beds, and update voters', () => {
            expect(resort.leave("Sun", 3, 2)).toBe("3 people left Sun hotel");
            expect(resort.hotels[0].beds).toBe(8); // 5 (remaining beds) + 3
            expect(resort.hotels[0].points).toBe(6); // 3 * 2 = 6 points
            expect(resort.voters).toBe(3);
        });
    });

    // Testing 'averageGrade' method
    describe('averageGrade method', () => {
        test('should return "No votes yet" if no voters exist', () => {
            expect(resort.averageGrade()).toBe("No votes yet");
        });

        test('should calculate and return the average grade', () => {
            resort.build('Sun', 10);
            resort.build('Avenue', 5);

            resort.book('Sun', 5);
            resort.book('Avenue', 5);

            resort.leave('Sun', 3, 2); // +6 points
            resort.leave('Avenue', 3, 3); // +9 points

            expect(resort.averageGrade()).toBe("Average grade: 2.50"); // (6 + 9) / (3 + 3) = 2.5
        });
    });

    // Testing 'bestHotel' property
    describe('bestHotel property', () => {
        test('should return "No votes yet" if no hotels have votes', () => {
            expect(resort.bestHotel).toBe("No votes yet");
        });

        test('should return the best hotel with the most points', () => {
            resort.build('Sun', 10);
            resort.build('Avenue', 5);

            resort.book('Sun', 5);
            resort.book('Avenue', 5);

            resort.leave('Sun', 3, 2); // +6 points
            resort.leave('Avenue', 3, 3); // +9 points

            const expected = "Best hotel is Avenue with grade 9. Points: 9"; // Based on leave actions
            expect(resort.bestHotel).toContain("Best hotel is Avenue");
            expect(resort.bestHotel).toContain("Points: 9");
        });
    });
});
