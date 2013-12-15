$(function() {
    var sites = [
        "maze-algorithm-viewer",
        "maze",
        "blaze",
        "life",
        "T3-2",
        "todo"
    ];

    var descs = [
        "A tool that can be used to help visualize maze generating and maze solving algorithms interactively. The orange square is the current square, yellow squares are the current shortest path, and blue squares are where the algorithm has visited.",
        "A game that involves solving a maze before the enemies solve it to find you. Create or destroy walls by right clicking and using the arrow or wasd keys. Cancel the operation by right clicking again.",
        "A game that involves trying to stop a fire by targeting critical nodes. Press \"restart\" to play. Click to place some water, and click again to flood fill that space.",
        "The infamous programming problem. Features hot-swapping many different modes. Click to toggle the alive state of each cell. Press random for a random grid, and start to run the program.",
        "A simple combination Tic-Tac-Toe and Connect Four game. Play against your friends! A computer player will be implemented soon.",
        "A simple to-do list. Features saving and loading lists using a passcode. Built to show off the power of Angular.js and as a good first program."
    ];

    var funcCreator = function(variable, type) {
        if(type == "show") {
            return function() {
                $(variable).show("blind");
                return false;
            }
        } else {
            return function() {
                $(variable).hide("blind");
                return false;
            }
        }
    }

    for(var i = 0; i < sites.length; i++) {
        var siteId = "#" + sites[i];
        $(siteId).prepend("<img src='images/" + sites[i] + ".jpg' width=200px height=200px>");
        $(siteId + "-desc").append(descs[i]);

        $(siteId).mouseover(funcCreator(siteId, "hide"));
        $(siteId + "-desc").mouseout(funcCreator(siteId, "show"));
    }
});
