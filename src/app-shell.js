import { LitElement, html, css } from 'lit-element';
import { initRouter } from './utils/router';
import { connect } from 'pwa-helpers';
import { store } from './redux/store';

class Component  extends connect(store)(LitElement) {

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 0;
      }
    `;
  }

  firstUpdated() {
    initRouter(this)
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <header>
     
      </header>
      <main>
        
      </main>
      <footer>
        
      </footer>
    `;
  }


}

window.customElements.define('component-example', Component);