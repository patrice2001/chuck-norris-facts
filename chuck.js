function fetchChuckJSON() {

    const url = `https://api.chucknorris.io/jokes/random/`;


    axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .then(function (random) {
            console.log('data decoded from JSON:', random);

            // Build a block of HTML
            const chuckHtml = `
            <img src="${random.icon_url}" />
            <p><strong>${random.value}</strong></p>
      `;
            document.querySelector('#chuck-norris').innerHTML = chuckHtml;
        });
}

fetchChuckJSON();

