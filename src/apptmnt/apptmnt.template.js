export default ({ date }) => `
  <div class="components">
    <apptmnt-datepicker filter="${filter}" date="${date}" ${closed ? 'closed' : ''}></apptmnt-datepicker>
  </div>
`
