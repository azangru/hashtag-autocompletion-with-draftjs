const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=';

const cachedSearches = {};

export default function (search) {
    if (cachedSearches[search]) {
        return Promise.resolve(cachedSearches[search]);
    }
    return fetch(`${url}${search}`, {
        method: 'get'
    }).then((response) => {
        // cachedSearches[search] = response.json();
        return response.json().then((data) => {
            cachedSearches[search] = data[1];
            return data[1];
        });
    });
}
