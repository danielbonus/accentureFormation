import { LitElement, html, css } from 'lit-element';

class HomeTemplateView  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      este es master
    `;
  }
}

customElements.define('home-template-view', HomeTemplateView);