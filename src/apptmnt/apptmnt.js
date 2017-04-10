import template from './apptmnt.css';
import style from './apptmnt.template';

export default class Apptmnt extends HTMLElement {
  static get selector() { return 'apptmnt-creator' };
  constructor() {
      super();
  }

  render () {const innerHTML = template({
      date: this.date
  });

  this.element.innerHTML = `<style>${style}</style>${innerHTML}`;this.attachEventListeners()}
  updateDate (date) {
      console.debug('updateDate', date);this.date = date
  }
  attachEventListeners () {
      this.element.querySelector('apptmnt-datepicker').addEventListener('date-selected', ({ detail }) => this.updateDate(detail));
  }
}
