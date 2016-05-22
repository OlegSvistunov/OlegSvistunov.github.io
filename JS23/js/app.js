requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4.min',
        'template': 'template'
    },
    shim: {
        'jquery': {
            exports:'jQuery'
        },
        'template': {
			exports: 'template'
		}
    }
});


require(
    [
        'model',
        'view',
        'controller',
        'jquery',
        'template'
    ],
    function (model, view, controller, $, template) {
        var firstToDoList = ['Test 1', 'Test 2', 'Test 3'];
        var newModel = new model(firstToDoList);
        var newView = new view(newModel);
        var newController = new controller(newModel, newView);
    }
);
