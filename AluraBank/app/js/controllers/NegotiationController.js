class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._viewNegotiations = new Views.ViewNegotiations('#viewNegotiations');
        this._viewMessage = new Views.ViewMessage('#viewMessage');
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputPrice = $('#price');
        this._viewNegotiations.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputPrice.val()));
        this._negotiations.add(negotiation);
        this._viewNegotiations.update(this._negotiations);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.quantity);
            console.log(negotiation.price);
        });
        this._viewMessage.update('Negotiation successfully added!');
    }
}
