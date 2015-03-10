var sandbox = $('#sandbox');
var field = SVG('sandbox').size('100%', '100%');
var bloqs = bloqs();

var bloqArr = [];

var newBloqWidth = 200;
var newBloqHeight = 100;

var bloq1 = {
    connections: [{location:'up',type:'int'},{location:'down',type:'int'},{location:'right', type:'int'},{location:'left', type:'int'}],
    size: [200, 100],
    color: '#000',
    code: {setup:"1", loop:"1"}
};

var getRandomColor = function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
};

var createBloq = function(){
    var xpos = Math.floor(Math.random(0, 1) * sandbox.width() + (newBloqWidth));
    var ypos = Math.floor(Math.random(0, 1) * sandbox.height() + (newBloqHeight));

    var fillColor = getRandomColor();

    var bloqData = {
        connections: [{location:'up',type:'int'},{location:'down',type:'int'},{location:'right', type:'int'},{location:'left', type:'int'}],
        size: [newBloqWidth, newBloqHeight],
        color: fillColor,
        code: {setup:"1", loop:"1"}
    };
    bloqArr.push(bloqs.createBloq(bloqData, field, [xpos, ypos]));
};

var removeBloqs = function(){
    $.each(bloqArr, function(bloq){
        bloqArr[bloq].remove();
    });
};

bloqArr.push(bloqs.createBloq(bloq1, field, [300,100]));

