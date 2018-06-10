$(function () {
    const request = $.ajax({
        url: " http://api.tvmaze.com/shows",
        method: "GET",
    });
    request.done(function (response) {
        const showArr = []
        console.log(response);
        $.each(response, function (index, show) {
            let arr = [show.id, show.rating.average, show.image.medium, show.name, show.url];
            showArr.push(arr);
        })

        showArr.sort(function (a, b) {
            return b[1] - a[1];
        });
        console.log(showArr);
        showArr.splice(50, 190);
        // console.log(showArr);


        //parse into dom
        showArr.forEach(function (element) {
            const img = element[2];
            const title = element[3];
            const link = element[4];
            $('#resultMovies').append(`
            <a href=${link} class="col-md-4 col-sm-6">
                <div >
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top image-fluid" src=${img} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                        </div>
                    </div>
                </div>
            </a>
            `)
        })


    })

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    $('#search').on('keyup', function (event) {
        let movie = event.target.value;
        console.log(movie);







        // request.done(function (msg) {
        //     $("#log").html(msg);
        // });

        // request.fail(function (jqXHR, textStatus) {
        //     alert("Request failed: " + textStatus);
        // });
    })
});

