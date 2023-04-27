import Main from "../pages/Albums"

const fetchRequests = 
{
    getAlbums(){
        console.log(`fetched albums`)
    },
    getArtists(){
        console.log("fetched artists")
    },
    getAudiobooks(){
        console.log("fetched audiobooks")
    },
    getPlaylists(){
        console.log("fetched playlists")
    },
    getPodcasts(){
        console.log("fetched podcasts")
    }
}

export default fetchRequests
