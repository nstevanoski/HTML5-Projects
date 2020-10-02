$(document).ready(function() {
    // Check for local storage;
    // if exists, set variables and hide form
    var storedAge = localStorage.getItem('age');
    var storedGender = localStorage.getItem('gender');
    if (storedAge != null) {
        $('#specialOffer').removeClass('unsubmitted');
        $('.detail').css('display', 'none');
    }
    // If form unsubmitted, do card flip
    if ($('#specialOffer').hasClass('unsubmitted')) {
        $('.cardGroup.flip').hover(
            function() {
                $(this).find('.card').addClass('theFlip');
            },
            function() {
                $(this).find('.card').removeClass('theFlip');
            }
        );
    }
    // Draw initial canvas
    if (storedAge == null) {
        $("#myCanvas").drawText({
            layer: true,
            fillStyle: "#36c",
            font: "bold 32pt Trebuchet MS",
            text: "Get Special Offer Here!",
            x: 100,
            y: 100,
            name: "startLayer",
            maxWidth: 200
        });
    } else { //Create special offer canvas, based on local storage values
        var theText;
        var theImage;
        if (storedGender == 'male') {
            theImage = 'images/mars.jpg';
        } else {
            theImage = 'images/venus.jpg';
        }
        storedAge = parseInt(storedAge);
        if (storedAge <= 60) {
            theText = 'HIKE!\n25% off!';
        } else {
            theText = 'TOUR!\n25% off!'
        }
        $("#myCanvas").addLayer({
            type: 'image',
            source: theImage,
            x: 100,
            y: 100,
            load: function() {
                $(this).drawLayer(1);
                $(this).drawLayer(2);
            }
        });
        $("#myCanvas").addLayer({
            type: 'text',
            fillStyle: "#fff",
            font: "bold 32pt Trebuchet MS",
            text: theText,
            x: 101,
            y: 101,
            maxWidth: 200
        });
        $("#myCanvas").addLayer({
            type: 'text',
            fillStyle: "#36c",
            font: "bold 32pt Trebuchet MS",
            text: theText,
            x: 100,
            y: 100,
            maxWidth: 200
        });
        $("#myCanvas").drawLayers();
    }
    // Form submit button actions
    $('#theButton').click(function() {
        var theAge = $('#age').val();
        var theGender = $('input:radio[name=gender]:checked').val();
        localStorage.setItem("age", theAge);
        localStorage.setItem("gender", theGender);
        window.location.href = "offer.html";
    });
});
// Update text field for slider
function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}
window.onload = function() {
    printValue('age', 'rangeValue');
}