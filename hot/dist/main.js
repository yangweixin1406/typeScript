System.register("components", [], function (exports_1, context_1) {
    "use strict";
    var a;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log('components >>>>>>...');
            exports_1("a", a = 10);
        }
    };
});
System.register("app", ["components"], function (exports_2, context_2) {
    "use strict";
    var components_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (components_1_1) {
                components_1 = components_1_1;
            }
        ],
        execute: function () {
            console.log('a >>>>>>>', components_1.a);
        }
    };
});
