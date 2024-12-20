const fetchMusicData = async () => {
    try {
        const apiKey = 'your_api_key_here'; // Replace with your actual API key
        const artist = '21 savage';
        const url = `https://api.deezer.com/search?q=${encodeURIComponent(artist)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const tracks = data.data.map(track => ({
            title: track.title,
            album: track.album.title,
            previewUrl: track.preview
        }));

        console.log(`Top tracks for ${artist}:`);
        tracks.forEach((track, index) => {
            console.log(`${index + 1}. ${track.title} - Album: ${track.album}`);
            console.log(`Preview: ${track.previewUrl}`);
        });

        return tracks;
    } catch (error) {
        console.error('Error fetching music data:', error);
    }
};

fetchMusicData();
