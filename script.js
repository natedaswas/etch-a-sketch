var newline = 0;
var end = 0;
var html = "";




$(document).ready(function name(){
for(k=0;k<16;k++)
{
console.log(k);
for(i=0;i<16;i++)
{
$('body').prepend( '<div></div>' );
}
$('body').prepend( '<br>' );
}
});

$(document).ready(function() {
    $('div').mouseenter(function() {
        $(this).css('background-color', '#F38630');
    });
    $('div').mouseenter(function() {
        $(this).css('background-color', 'blue');
    });
});


$(document).ready(function() {
    $('button').click(function() {
        $('div').css('background-color', '#F38630');
    });
});

/*for(i=0;i<16;i++)
{$('#table').append( '<tr>' );
for(i=0;i<16;i++)
{$('#table').append( '<td>data</td>' );}
}
$('#table').append( '</tr>' );
}

*/



