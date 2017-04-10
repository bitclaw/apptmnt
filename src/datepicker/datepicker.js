import template from './datepicker.template';
import style from './datepicker.css';

export default class Datepicker extends HTMLElement {
  static get selector () { return 'apptmnt-datepicker' };

  render () {
    const innerHTML = template({
      date: this.date
    });

    this.element.innerHTML = `<style>${style}</style>${innerHTML}`;
  }
}
