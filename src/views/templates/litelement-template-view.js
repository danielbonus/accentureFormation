import { LitElement, html, css } from 'lit-element';
import '../../components/view-code';
class LitelementTemplateView  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container-code {
        background-color: #333;
        color: white;
      }
      .explanation {
        margin-bottom: 1.6rem;
      }
      .explanation > h5, .explanation > p {
        display: inline;
      }
      .image-component {
        height: 50%;
        width: auto;
      }

      section {
       padding: 24px; 
      }
      section > * {
        max-width: 600px;
        margin-right: auto;
        margin-left: auto;
      }
      section:nth-child(even) {
        background-color: #f7f7f7;
      }
      section:nth-child(odd) {
        background-color: white
      }
      h2 {
        text-align: center;
        color: #293237;
        font-size: 36px;
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
       <section>
        <div>
          <img style="width: 100%" class="image-component" src="https://desarrolloweb.com/archivoimg/general/4664.jpg" alt="Lit Element">
        </div>
        <h2>LitElement</h2>
        <p>Es una potente clase que nos brinda la base para crear Web Componentes. Mediante esta clase podemos crear elementos HTML personalizados con su propia interfaz y comportamiento.</p>
        <p>Esta basada en los estándares de Js y HTML por lo tanto es muy ligero y ofrece un buen rendimiento, al ser nativo podemos reutilizar estos componentes con cualquier otro Framework como: ReactJs, VueJS,..etc</p>
        <p>LitElement es solo una clase de la cual extendemos para poder crear un componente, toda la construcción se basa en orientación a objetos.</p>
      </section>
      <section>
        <h2>Characteristics Web Components</h2>
        <p>Aquí hacemos un paréntesis, y vamos a explicar los conceptos de Web components</p>
        <h4>Shadow Dom</h4>
        <p>Se puede decir que es un DOM dentro del DOM, surge por el problema que teníamos con la manipulación del DOM, ya que al tener aplicaciones altamente reactivas y dinámicas rugen problemas de rendimiento.<br> Si el DOM crea un árbol DOM global, el <b>Shadow Root</b> crea un <b>sub-árbol dentro del DOM regular</b>, y dentro de este los nodos HTML, CSS, JS son independientes, gracias a esto permite la encapsulacion.</p>
        <h5>Uso básico de Shadow DOM</h5>
        <p>Para trabajar con Shadow DOM hay que tener claros estos conceptos:</p>
        <ul>
          <li><b>Shadow host:</b> es el nodo del DOM regular al que se ancla el Shadow DOM</li>
          <li><b>Shadow root:</b> es el nodo raíz del Shadow Tree</li>
          <li><b>Shadow tree:</b> es el árbol DOM que hay dentro de nuestro Shadow DOM, el sub-árbol dentro del árbol DOM regular.</li>
        </ul>
        <div>
          <img style="width: 100%" class="image-component" src="https://cybmeta.com/wp-content/uploads/2019/03/shadow-dom-1024x489.png" alt="Shadow Dom">
        </div>
        <p>Gracias a este nuevo estándar, podemos crear clases css independientes y que no colisionen en el documento, incluso nuestro HTML y JS.</p>
      </section>      
      <section>
        <h3>Características que nos ofrece Lit Element para trabajar con los Web components</h3>
        <ul>
          <li>Renderizar templates en el Shadow DOM.</li>
          <li>Facilitar la creación de propiedades para los componentes</li>
          <li>Administrar los atributos de los elementos, de modo que se sincronicen de manera automática con las propiedades del componente y viceversa.</li>
          <li>Enlace automático entre propiedades del componente y el template, lo que conocemos como binding. Gracias a ello conseguimos templates reactivos en los cuales, al actualizarse las propiedades, se actualiza automáticamente el template.</li>
        </ul>
      </section>
      <section>
        <h1>Started kit Lit element</h1>
        <p>Para ver toda la potencia de LitElement, vamos a crear un proyecto sencillo desde cero donde iremos explicando paso a paso todas sus características:</p>
        <h3>¿Qué necesitamos para empezar?</h3>
        <ul>
          <li>Node JS: Lo instalaremos para utilizar el empaquetador NPM con el que instalaremos los módulos que necesita nuestra aplicación, también nos brinda un estándar para el desarrollo <a href="https://nodejs.org/es/">Descargar</a></li>
          <li>Started kit LitElement <a href="https://lit-element.polymer-project.org/guide/start">Descargar</a></li>
        </ul>
        <p>Si nos fijamos estamos utilizando el CLI de Polymer para montar el proyecto y levantar un servidor de pruebas, esto es para facilitarnos la construcción del proyecto, más adelante seria recomendable ver como funciona este tema.</p>
        <h4>Procedemos a instalar  Lit element con NPM</h4>
        <div class="container-code">
          <view-code code="
            npm install lit-element">
          </view-code>
        </div>
        <p>Con este paquete ya tenemos disponible la clase de lit Element para poder usarla.</p>
      </section>
      <section>
        <h4>¿Como lo utilizamos?</h4>
        <p>Para poder utilizarlo tenemos que importarlo en nuestro javascript</p>
        <div class="container-code">
          <view-code code="
          import { LitElement, html } from 'lit-element';
          export class MyElement extends LitElement {
            render() {
             return html '
              <h1>Soy un componente</h1>
             ';
            }
          }
          customElements.define('my-element', MyElement);
          ">
          </view-code>
        </div>
      </section>
    `;
  }
}

customElements.define('litelement-template-view', LitelementTemplateView);