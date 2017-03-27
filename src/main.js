let counter = function() {
    var value = $('#text').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        $('#totalChars').html(0);
        $('#charCount').html(0);
        $('#charCountNoSpace').html(0);
        return;
    }

    var regex = /\s+/gi;
    const valueTrim = value.trim();
    var wordCount = valueTrim.replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = valueTrim.length;
    var charCountNoSpace = value.replace(regex, '').length;

    $('#wordCount').html(wordCount);
    $('#totalChars').html(totalChars);
    $('#charCount').html(charCount);
    $('#charCountNoSpace').html(charCountNoSpace);
};

$(document).ready(function() {
    const text = $('#text');
    text.change(counter);
    text.keydown(counter);
    text.keypress(counter);
    text.keyup(counter);
    text.blur(counter);
    text.focus(counter);
});
