// constant variables
const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';


// state variables
let teamInfo;

// cached element references (jQuery)
const $teamInfo = $('#teamInfo');
const $input = $('input[type="text"]')

// event listeners

$('form').on('click', handleGetTeam)

//functions

init();

function init() {
    getData();
}

function handleGetTeam(event) {
    event.preventDefault()
    userInput = $input.val();
}

function getData() {
    $.ajax(BASE_URL).then(function (data) {
        console.log(data);
        teamInfo = data;
        render();
    }, function (error) {
        console.log(error);
    });
}

function render() {
    const html = teamInfo.forEach(function(info) {
        console.log(info);
        return            
            `
            <h1>${info.data.full_name}</h1>
            <p>${info.data.abbreviation}</p>
            <p>${info.data.conference}</p>
            <p>${info.data.division}</p>
         `;
    });
    console.log(html);
}