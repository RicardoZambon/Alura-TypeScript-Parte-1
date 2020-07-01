class NegotiationController {

	private _inputDate: HTMLInputElement;
	private _inputQuantity: HTMLInputElement;
	private _inputPrice: HTMLInputElement;

	private _negotiations = new Negotiations();
	private _negotiationsView = new NegotiationsView('#negotiationsView');

	constructor() {
		this._inputDate = <HTMLInputElement>document.querySelector('#date');
		this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
		this._inputPrice = <HTMLInputElement>document.querySelector('#price');

		this._negotiationsView.update();
	}

	add(event: Event) {
		event.preventDefault();

		const negotiation = new Negotiation(
			new Date(this._inputDate.value.replace(/-/g, ',')),
			parseInt(this._inputQuantity.value),
			parseFloat(this._inputPrice.value)
		);

		this._negotiations.add(negotiation);

		this._negotiations.toArray().forEach(negotiation => {
			console.log(negotiation.date);
			console.log(negotiation.quantity);
			console.log(negotiation.price);
		});
	}
}