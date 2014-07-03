window.onload = app;

function app() {

    //get url for content
    var baseURL = "https://api.github.com/users/";
    var username = "davidjfreedman";

    //put the url together
    var url = baseURL + username;
    console.log(url);

    var grabbed_Data = $.getJSON(url);
    console.log(grabbed_Data.responseText);

    //setting up the template
    var template_string = document.querySelector("#getProfileBox").textContent;
    //the same thing below
    var template_string = $("#getProfileBox")[0].textContent; // you NEED to have the array position!
    var createStringFromData = _.template(template_string); //turns the data into strings
    //'then' tells it to do it after it loaded grabbed_Data
    grabbed_Data.then(function loadInData(hamster) {
        hamster.company = "--See Attached --";
        hamster.bio = "Naginata";
        hamster.hireable = "Assassin";
        hamster.test = "Peanut Butter";

        var x = createStringFromData(hamster);
        // document.querySelector('#destination').innerHTML = x;
        $('body').append(x);

    })
    // console.log(createStringFromData());

    var test = $('.profileBox');
};