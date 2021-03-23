// constant variables
const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';
const teamLogos = {
    'Atlanta': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png',
    'Boston': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/200px-Boston_Celtics.svg.png',
    'Brooklyn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png',
    'Charlotte': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png',
    'Chicago': 'https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif',
    'Cleveland': 'https://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif',
    'Dallas': 'https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif',
    'Denver': 'https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif',
    'Detroit': 'https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif',
    'Golden State': 'https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif',
    'Indiana': 'https://logos-world.net/wp-content/uploads/2020/05/Indiana-Pacers-Symbol.png',
    'LA': 'https://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif',
    'Los Angeles': 'https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif',
    'Memphis': 'https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif',
    'Miami': 'https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif',
    'Milwaukee': 'https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif',
    'Minnesota': 'https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif',
    'New Orleans': 'https://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif',
    'New York': 'https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif',
    'Oklahoma City': 'https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif',
    'Orlando': 'https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif',
    'Philadelphia': 'https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif',
    'Phoenix': 'https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif',
    'Portland': 'https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif',
    'Sacramento': 'https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif',
    'San Antonio': 'https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif',
    'Toronto': 'https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif',
    'Utah': 'https://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif',
    'Washington': 'https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif',
}

// state variables
let teamInfo;

// cached element references (jQuery)
const $teamInfo = $('#teamInfo');
const $input = $('input[type="text"]')
const $article = $('.card')

// event listeners
$('.btn').on('click', handleGetTeam)

//functions
init();

function init() {
    getData();
}

function handleGetTeam(event) {
    event.preventDefault()
    userInput = $input.val();
    $input.val('');
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1)
    if(userInput === 'Golden state') {
        userInput = 'Golden State'
    } else if(userInput === 'La'){
        userInput = 'LA';
    } else if(userInput === 'Los angeles'){
        userInput = 'Los Angeles';
    } else if(userInput === 'New orleans'){
        userInput = 'New Orleans';
    } else if(userInput === 'New york'){
        userInput = 'New York';
    } else if(userInput === 'Oklahoma city'){
        userInput = 'Oklahoma City';
    } else if(userInput === 'San antonio'){
        userInput = 'San Antonio';
    }
    let foundTeam = teamInfo.data.find(team => team.city === userInput);
    render(foundTeam)
}

function getData() {
    $.ajax(BASE_URL).then(function (data) {
        teamInfo = data;
        render();
    }, function (error) {
        console.log(error, ' ERRORR');
    });
}

function render(search) {
    if (!search) {
        const $div =
            $(`<div><h1>Team Name: </h1>
            <p>Abbreviation: </p>
            <p>Conference: </p>
            <p>Division: </p></div>`)
        $article.append($div)
    } else {
        $('div').remove()
        let teamSrc = '';
        Object.entries(teamLogos).forEach(function(team) {
            if(team.includes(search.city)) {
                teamSrc = team[1]
            }
        })
        if (search.city === Object.keys(teamLogos)) {
            return teamLogos.values, 'this is the value';
        }
        const $div = $(`
        <div><h1>Team Name: ${search.full_name}</h1>
        <p>Abbreviation: ${search.abbreviation}</p>
        <p>Conference: ${search.conference}</p>
        <p>Division: ${search.division}</p>
        <img src="${teamSrc}" alt="logo-image">
        </div>`)
        $article.append($div)
    }
}
