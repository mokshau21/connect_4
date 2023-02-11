var player1 = prompt("Enter the name of player 1")
var player2 = prompt("Enter the name of player 2")
var ctr = 0
var chip1 = 'red chip'
var chip2 = 'blue chip'
var button_ctr = -1
var ctr_h3 = 0;
var column_red_counter = 0;
var column_blue_counter = 0;
var row0 = 5;
var row1 = 5;
var row2 = 5;
var row3 = 5;
var row4 = 5;
var row5 = 5;
var row6 = 5;

$("button").on('mouseover', function () {
    $(this).css('cursor', 'pointer')
    
})
$("button").click(function () {
    if (ctr_h3 % 2 == 0) {
        if ($(this).index("button") == 0) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (0 + (row0 * 7))
            $("button").eq(index).css("background-color", "red")
            row0 = row0 - 1;
        }
        if ($(this).index("button") == 1) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (1 + (row1 * 7))
            $("button").eq(index).css("background-color", "red")
            row1 = row1 - 1;

        }
        if ($(this).index("button") == 2) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (2 + (row2 * 7))
            $("button").eq(index).css("background-color", "red")
            row2 = row2 - 1;
        }
        if ($(this).index("button") == 3) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (3 + (row3 * 7))
            $("button").eq(index).css("background-color", "red")
            row3 = row3 - 1;
        }
        if ($(this).index("button") == 4) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (4 + (row4 * 7))
            $("button").eq(index).css("background-color", "red")
            row4 = row4 - 1;
        }
        if ($(this).index("button") == 5) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1
            var index = (5 + (row5 * 7))
            $("button").eq(index).css("background-color", "red")
            row5 = row5 - 1;
        }
        if ($(this).index("button") == 6) {
            console.log($(this).index("button"))
            $("h3").text(player1 + ": it is your turn,please pick a column to drop your " + chip1)
            ctr_h3 = ctr_h3 + 1;
            var index = (6 + (row6 * 7))
            $("button").eq(index).css("background-color", "red")
            row6 = row6 - 1;
        }
    }
    else {
        if ($(this).index("button") == 0) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1;
            var index = (0 + (row0 * 7))
            $("button").eq(index).css("background-color", "blue")
            row0 = row0 - 1;
            
        }
        if ($(this).index("button") == 1) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (1 + (row1 * 7))
            $("button").eq(index).css("background-color", "blue")
            row1 = row1 - 1;
        }
        if ($(this).index("button") == 2) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (2 + (row2 * 7))
            $("button").eq(index).css("background-color", "blue")
            row2 = row2 - 1;

        }
        if ($(this).index("button") == 3) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (3 + (row3 * 7))
            $("button").eq(index).css("background-color", "blue")
            row3 = row3 - 1;
        }
        if ($(this).index("button") == 4) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (4 + (row4 * 7))
            $("button").eq(index).css("background-color", "blue")
            row4 = row4 - 1;
        }
        if ($(this).index("button") == 5) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (5 + (row5 * 7))
            $("button").eq(index).css("background-color", "blue")
            row5 = row5 - 1;
        }
        if ($(this).index("button") == 6) {
            console.log($(this).index("button"))
            $("h3").text(player2 + ": it is your turn,please pick a column to drop your " + chip2)
            ctr_h3 = ctr_h3 + 1
            var index = (6 + (row6 * 7))
            $("button").eq(index).css("background-color", "blue")
            row6 = row6 - 1;
        }
    }
})