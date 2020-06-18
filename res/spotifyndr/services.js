import axios from 'axios';

const credentials = {
    clientId: 'e774a71885a946c4bf1761d41d910d26',
    clientSecret: 'e324bfa507024a8682c96c8b159e5808',
    redirectUri: 'https://auth.expo.io/@julescript/spotifyndr'
}

const authEndPoints = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const instance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
    }
});

async function searchArtists(q, token) {
    return instance.get('/search/', {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        params: {
            'q': q,
            'type': 'artist',
            'limit': 12
        }
      })
}

async function next(nextURL, token) {
    return instance.get(nextURL, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    })
}

async function getAlbums(artistID, token) {
    return instance.get('artists/'+artistID+'/albums', {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        params: {
            'id': artistID,
            'country': 'US',
            'limit': 12
        }
    })
}

module.exports = {
    searchArtists: searchArtists,
    next: next,
    getAlbums: getAlbums,
    credentials: credentials,
    authEndPoints: authEndPoints
}