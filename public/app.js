const $pokemonList = $("pokemon-listing")

$pokemonList.on("click", (event) => {
    const $item = $(event.currentTarget)
    console.log($item)
    const id = $item.attr("data-index")

    fetch(`/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {


        const $rightWin = $("right-screen") 
        // $rightWin.empty()

        $rightWin.html(`<div>
            <h3>${data.name}</h3>
            <img src="${data.img}">
            <p>Type: ${data.type}</p>
            <a href="/pokemon/${id}/edit"><button>Edit</button></a>
            <form action="/pokemon/${id}?_method=DELETE" method="post">
            <button>Delete</button>
            </form>
        
        </div>`)



    })
})