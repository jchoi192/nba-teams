// constant variables
const BASE_URL = 'https://www.balldontlie.io/api/v1/teams';
const teamLogos = {
    'Atlanta': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png',
    'Boston': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/200px-Boston_Celtics.svg.png',
    'Brooklyn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png',
    'Charlotte': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png',
    'Chicago': 'https://i.pinimg.com/originals/20/05/81/20058190382ffdd5b8e57303e6b9b2ab.png',
    'Cleveland': 'https://lh3.googleusercontent.com/proxy/P_4eZnsJG6l_4LU_kMygKnTHZhlaludC2f-WphSp37ekUnMQgneJQJ5WjvOjS6AGKPNnbdD0J8zv1N2kJCqiY3_dyhtspxvB_XhgwFKiJ6Rl_OmEF3rPS74MUNSMCLF-PznPtyfMcS_GsDJw1DjGfAI',
    'Dallas': 'http://assets.stickpng.com/images/58419cd6a6515b1e0ad75a68.png',
    'Denver': 'https://i.frog.ink/j0CiwJxE/denver-nuggets-2_600.jpg?v=1606228716.203',
    'Detroit': 'https://i.pinimg.com/originals/c1/82/3e/c1823ebf5032a6591a2b231ad3578df1.jpg',
    'Golden State': 'https://images.ctfassets.net/a4rx79jcl3n1/139uoz1HBz6PsWh8pEqOCK/eced155325ccb92acf76962ca5d688e5/gsw-logo-1920.png',
    'Indiana': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png',
    'LA': 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png',
    'Los Angeles': 'https://thumbs.dreamstime.com/b/untitled-140340700.jpg',
    'Memphis': 'http://assets.stickpng.com/images/58419c00a6515b1e0ad75a5a.png',
    'Miami': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
    'Milwaukee': 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png',
    'Minnesota': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png',
    'New Orleans': 'https://cdn.freebiesupply.com/images/large/2x/new-orleans-pelicans-logo-transparent.png',
    'New York': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
    'Oklahoma City': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png',
    'Orlando': 'https://freepngimg.com/thumb/orlando_magic/87942-charlotte-magic-text-orlando-logo-nba-hornets.png',
    'Philadelphia': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1200px-Philadelphia_76ers_logo.svg.png',
    'Phoenix': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1200px-Phoenix_Suns_logo.svg.png',
    'Portland': 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png',
    'Sacramento': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png',
    'San Antonio': 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/sas.png',
    'Toronto': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/1200px-Toronto_Raptors_logo.svg.png',
    'Utah': 'https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/uta.png',
    'Washington': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/1200px-Washington_Wizards_logo.svg.png',
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

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
// https://media.newyorker.com/photos/5f52608d704116b9739db5c9/mas
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ExEECRiQhn
// https://cdn-wp.thesportsrush.com/2021/03/d6cfe071-untitled-design-2021-03-21t113708.511.jpg


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
