System.register(["./Negotiation", "./Negotiations", "./PartialNegotiation"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Negotiation_1_1) {
                exportStar_1(Negotiation_1_1);
            },
            function (Negotiations_1_1) {
                exportStar_1(Negotiations_1_1);
            },
            function (PartialNegotiation_1_1) {
                exportStar_1(PartialNegotiation_1_1);
            }
        ],
        execute: function () {
        }
    };
});
