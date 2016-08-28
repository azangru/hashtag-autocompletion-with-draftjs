const url = 'http://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search='

export default function (search) {
    return fetch(`${url}${search}`, {
        method: 'get'
    }).then((response) => {
        return response.json();
    });
}
