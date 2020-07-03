System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, ViewNegotiations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            ViewNegotiations = class ViewNegotiations extends View_1.View {
                template(model) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    
                    ${model.toArray().map(negotiation => `<tr>
                            <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.price}</td>
                            <td>${negotiation.volume}</td>
                        </td>`).join('')}
                    
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
        `;
                }
            };
            exports_1("ViewNegotiations", ViewNegotiations);
        }
    };
});
