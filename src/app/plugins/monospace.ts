declare var $: any;

export class AddFontMonospaceComponent {
  constructor(){}

  addMonospaceFontToolBox = (uid) => {
    $(`#cb-box-2-${uid}`).addClass('monospace-font');
  }
}
