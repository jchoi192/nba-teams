alert('JS is working');

// constant variables

// state variables

// cached element references (jQuery)

// event listeners

//functions

function getData() {
    $.ajax('https://www.balldontlie.io/api/v1/teams')
        .then(function (data) {
            console.log(data)
        }, function (error) {
            console.log(error)
        });
}