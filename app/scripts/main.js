var sandbox = $('#sandbox');
var bloqs = bloqs();

var bloqArr = [];

var newBloqWidth = 200;
var newBloqHeight = 100;

var canvas = bloqs.createCanvas('sandbox');

var getRandomColor = function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // letter are white
    if (color == '#FFFFFF') {
        return getRandomColor();
    }
    return color;
};

var createSetup = function () {
    var setup = {
        label: 'setup',
        down: true,
        size: [200, 50],
        color: '#000',
        code: {setup: "", loop: "void setup (){\n"}
    };
    bloqs.createBloq(setup, canvas, [1, 1]);
};

var createLoop = function () {
    var loop = {
        label: 'loop',
        down: true,
        size: [200, 50],
        color: '#000',
        code: {setup: "", loop: "void loop (){\n"}
    };
    bloqs.createBloq(loop, canvas, [400, 1]);
};

var createBloq = function () {
    var label = $('#bloq_label').val() == 'loop' ||
    $('#bloq_label').val() == 'setup' ||
    $('#bloq_label').val() == '' ? '' + Math.floor(Math.random() * 1000) : $('#bloq_label').val();

    var codeSetup = $('#bloq_code_setup').val() != '' ? $('#bloq_code_setup').val() : '';
    var codeLoop = $('#bloq_code_loop').val() != '' ? $('#bloq_code_loop').val() : '';

    var fillColor = $('#bloq_color').val() != '' ? $('#bloq_color').val() : getRandomColor();

    var bloqData = {
        up: true,
        down: true,
        label: label,
        inputs: ['int', 'string'],
        output: 'string',
        size: [newBloqWidth, newBloqHeight],
        color: fillColor,
        code: {setup: codeSetup, loop: codeLoop}
    };
    bloqData.factoryCode = JSON.stringify(bloqData);
    var bloq = bloqs.createBloq(bloqData, canvas, [0, 0]);
    bloq.on('click', function(){
        // show factory code
        $('#factory-code').val(this.factoryCode);
    });
    bloqArr.push(bloq);
};

var removeBloqs = function () {
    $.each(bloqArr, function (bloq) {
        bloqArr[bloq].remove();
    });
};

createSetup();
createLoop();

