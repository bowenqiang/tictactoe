$(document).ready(function() {
    var currPlayer = 0;
    var state = [];
    var index = 0;
    var result = -1;
    $("[class^=img]").click(function() {
        var getresult = function(state) {
            result = checkWiner(state);
            if (result >= 0) {
                setTimeout(function() {
                    alert("The Winner is Player " + result);
                }, 1000);
                //location.reload();
            }
        }

        index = $(this).attr("value");
        console.log(index);
        state[index] = currPlayer;
        if (currPlayer == 0) {
            //alert("Player 0");
            $(this).attr("src", "imgs/X.png");
            $(this).unbind('click').attr("disabled", "disabled");
            currPlayer = 1;
            console.log('this', this);
            getresult(state);
        } else {
            currPlayer = 0;
            $(this).attr("src", "imgs/O.png");
            $(this).unbind('click').attr("disabled", "disabled");
            getresult(state);

        }
    });

});


function checkWiner(state) {
    if (state[0] == state[1] && state[1] == state[2])
        return state[0];
    if (state[3] == state[4] && state[4] == state[5])
        return state[3];
    if (state[6] == state[7] && state[7] == state[8])
        return state[6];

    if (state[0] == state[3] && state[3] == state[6])
        return state[0];
    if (state[1] == state[4] && state[4] == state[7])
        return state[1];
    if (state[2] == state[5] && state[5] == state[8])
        return state[2];

    if (state[0] == state[4] && state[4] == state[8])
        return state[0];
    if (state[2] == state[4] && state[4] == state[6])
        return state[2];
    return -1;
}
