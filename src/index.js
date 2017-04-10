import { Datepicker } from './datepicker/datepicker';
import { Apptmnt } from './apptmnt/apptmnt';

const components = [
  Datepicker,
  Apptmnt,
];

components.forEach(component => customElements.define(component.selector, component));
