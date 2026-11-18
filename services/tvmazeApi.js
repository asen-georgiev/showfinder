import axios from 'axios';
const tvmazeApi = axios.create({
    baseURL: 'https://api.tvmaze.com',
    timeout: 10000,
});

export async function searchShows(query, signal) {
    const response = await tvmazeApi.get('/search/shows', {
        params: { q: query },
        signal,
    });

    return response.data.map((result) => result.show);
}
