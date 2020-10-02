$(document).ready(function() {
    $('.column').columnize({ columns: 2 });
    $("#review").click(function() {
        interestsChecked = $('.interests:checked').map(function() {
            return $(this).val();
        }).get();
        $("#interestsResult").html('<strong>Одговор: </strong>');
        $("#interestsResult").append(interestsChecked.join(', '));

        sharedChecked = $('.shared:checked').map(function() {
            return $(this).val();
        }).get();
        $("#sharedResult").html('<strong>Одговор: </strong>');
        $("#sharedResult").append(sharedChecked.join(', '));

        var theDesiredCourse = localStorage.getItem('desiredCourse');
        theDesiredCourse = "<strong>Одговор:</strong> " + theDesiredCourse;
        $("#desiredCourseResult").html(theDesiredCourse);

        var theArtistLength = localStorage.getItem('artistLength');
        theArtistLength = "<strong>Одговор:</strong> " + theArtistLength;
        $("#artistLengthResult").html(theArtistLength);

        var theHoursPractice = localStorage.getItem('hoursPractice');
        theHoursPractice = "<strong>Часови:</strong> " + theHoursPractice;
        $("#hoursPracticeResult").html(theHoursPractice);
    });
});
// Update text field for slider
function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}
window.onload = function() {
    printValue('hoursPractice', 'hoursPracticeValue');
}