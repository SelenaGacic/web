const dataModule = (($) => {

    const constants = {
        baseUrl: "http://api.tvmaze.com/shows",
    }

    class Show {
        constructor(id, raiting, img, title) {
            this.id = id,
            this.raiting = raiting,
            this.img = img,
            this.title = title
        }
    }

    const adaptData = (shows) => {

        const showArr = [];

        for (let show of shows) {
            let arr = [show.id, show.rating.average, show.image.medium, show.name];
            showArr.push(arr)
        }

        showArr.sort(function (a, b) {
            return b[1] - a[1];
        });

        showArr.splice(50, 190);

        const showList = showArr.map((element) => {
            return new Show(element[0], element[1], element[2], element[3])
        })

        // const showList = showArr.forEach(element => {
        //     return new Show(element[0], element[1], element[2], element[3])
        // })
        const test = showList;

        return showList;
    }

    

    return {
        constants,
        adaptData
    }

})(jQuery);

const uiModule = (($) => {

    const displayShows = (shows) => {
        shows.forEach(function (element) {

            return $('#resultMovies').append(`
            <a href="#" class="col-md-4 col-sm-6">
                <div >
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top image-fluid" src=${element.img} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                        </div>
                    </div>
                </div>
            </a>
            `)
        })

    }

    const searchList = (list) => {
        let result = `<ul class="list-group">`;
        list.forEach(element => {
            result += `<li class="list-group-item">${element.show.name}</li>`
        })
        result += `</ul>`;
        console.log(result);
        return $('.search-result').append(result);
    }

    const displayError = (error) => {
        return $('#resultMovies').innerHTML = "<h3>Error</h3>"
    }

    return {
        displayShows,
        displayError,
        searchList
    };

})(jQuery);

const mainModule = ((data, ui) => {
    const init = () => {
        const { baseUrl } = data.constants
        getShows(baseUrl);
    }

    const getShows = (url) => {
        const request = $.ajax({
            url: url,
            method: "GET",
        });
        request.done(onSuccess);
        request.fail(onFailure);
    }

    $('#search').on('keyup', function(e){
        searchShows(e.target.value);
         
    })

    const searchShows = input => {
        const request = $.ajax({
            url: 'http://api.tvmaze.com/search/shows?q=' + input,
            method: "GET",
        });
        request.done(searchSuccess);
        //request.fail(searchFailure);
    }

    const onSuccess = (response) => {
        const adaptedData = data.adaptData(response);
        return ui.displayShows(adaptedData);
    }

    const onFailure = (err) => {
        return ui.displayError(err);
    }

    const searchSuccess = (response) => {
        //console.log(response);
        ui.searchList(response);
    }

    return init();

})(dataModule, uiModule);
