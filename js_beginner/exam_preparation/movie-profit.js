function movieProfit(input) {
    let movieName = input[0];
    let movieDays = Number(input[1]);
    let movieTickets = Number(input[2]);
    let moviePrice = Number(input[3]);
    let percentage = Number(input[4]);
    let currentSum = 0;
    currentSum = movieTickets * moviePrice;
    currentSum *= movieDays;
    let percentageSum = currentSum * percentage / 100;
    let finalSum = currentSum - percentageSum


    console.log(`The profit from the movie ${movieName} is ${finalSum.toFixed(2)} lv.`);
}
movieProfit(['asd', 20, 500, 7.50, 7]);