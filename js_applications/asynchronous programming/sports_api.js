const fetchSportsData = async () => {
    try {
        const apiKey = 'your_api_key_here'; // Replace with your actual API key
        const league = 'NBA';
        const url = `https://www.balldontlie.io/api/v1/games?seasons[]=2023&per_page=5`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const games = data.data.map(game => ({
            homeTeam: game.home_team.full_name,
            visitorTeam: game.visitor_team.full_name,
            date: game.date,
            score: `${game.home_team_score} - ${game.visitor_team_score}`
        }));

        console.log(`Recent ${league} Games:`);
        games.forEach((game, index) => {
            console.log(`${index + 1}. ${game.homeTeam} vs ${game.visitorTeam}`);
            console.log(`   Date: ${new Date(game.date).toLocaleDateString()}`);
            console.log(`   Score: ${game.score}`);
        });

        return games;
    } catch (error) {
        console.error('Error fetching sports data:', error);
    }
};

fetchSportsData();
