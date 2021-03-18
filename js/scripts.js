$.ajax('https://www.balldontlie.io/api/v1/teams')
    .then(function (data) {
        console.log(data)
    }, function (error) {
        console.log(error)
    });