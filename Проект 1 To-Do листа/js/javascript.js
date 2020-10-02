$(document).ready(function() {
    var newListItem;
    var newList = true;
    var theList = document.getElementById('theList');

    $('#addToDo').on('click', function(e) {
        e.preventDefault();
        if (newList == true) {
            var theValue = $("#toDoItem").val();
            newListItem = '<li><span class="handle"> :: </span> <input class="listItem" value="' + theValue + '"><a class="removeListItem" style="display: none;" href="#"> X </a> </li>';
            newList = false;
        } else {
            var theValue = $("#toDoItem").val();
            newListItem = $('#theList li:last').clone();
            newListItem.find('input').attr('value', theValue);
        }

        var theCount = $("#theList li").length + 1;
        if (theCount > 1) {
            $('#doClearAll').css('display', 'block');
        }

        $('#theList').append(newListItem);


        $('#toDoItem').val('');
        $('#toDoItem').focus();
        $('.sortable').sortable('destroy');
        $('.sortable').sortable({
            handle: '.handle'
        });

    });

    $('input[type="text"]').on('keydown', function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
            e.preventDefault();
            var inputs = $(this).closest('form').find(':input:visible');
            inputs.eq(inputs.index(this) + 1).focus();
        }
    });

    $('#theList').on('change', '.listItem', function(e) {
        currentValue = $(this).val();
        $(this).attr('value', currentValue)
    });

    $('.sortable').sortable().bind('sortupdate', function() {

    });

    $('#theList').on('mouseover', 'li', function() {
        var $thisA = $(this).find('a');
        $thisA.css('display', 'block');
    });

    $('#theList').on('mouseout', 'li', function() {
        var $thisA = $(this).find('a');
        $thisA.css('display', 'none');
    });

    $('#theList').on('click', '.removeListItem', function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    $('#doClearAll').on('click', '#clearAll', function(e) {
        e.preventDefault();
        $('#theList').children().remove();
        newList = true;
        $('#toDoItem').val('');
        $('#doClearAll').css('display', 'none');
        $('#toDoItem').focus();
    });


});