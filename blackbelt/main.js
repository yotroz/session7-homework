    fetch(
        "https://api.chucknorris.io/jokes/random",
        {
            method: "GET",
            headers: {},
            body: "this is the body"
        }
    ) {
        console.log('Im here')
    }; 