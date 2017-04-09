export default class Apptmnt extends HTMLElement {
    static get selector () { return 'apptmnt-creator' }

    constructor() {
        super();
        this._name = 'Apptmnt';
    }

    get name() {
        return this._name;
    }

    render () {
        const innerHTML = template({
            date: this.date
        });

        this.element.innerHTML = `<style>${style}</style>${innerHTML}`;
        this.addEventListeners()
    }

    attachEventListeners () {
        this.element.querySelector('app-datepicker').addEventListener('selected-date', ({ detail }) => this.updateDate(detail));
    }
}
