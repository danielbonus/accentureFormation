import { LitElement, html, css } from 'lit-element';
import '../../components/view-code';
class HomeTemplateView  extends LitElement {

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
          <img style="width: 100%" src="https://miro.medium.com/max/1200/1*aeFzjKB-7Y804GicKxk5Rg.jpeg" alt="Lit Element">
        </div>
        <h2>Novedades de Javascript ES6</h2>
        <p>Vamos a dar un repaso a todas las novedades de ES6 necesarias para poder trabajar con Webcomponents y más adelante con Cells</p>
      </section>
      <section>
        <h2>Nueva declaración de variables</h2>
        <h3>let</h3>
        <p>La diferencia entre let y var es el ámbito de alcance. Con let el ámbito es local al bloque de código o función. mientras que con var la variable sera global o local en una función sin importar en ámbito del bloque.</p>
        <div class="container-code">
          <view-code code="
          function varTest() {
            var x = 31;
            if (true) {
              var x = 71;  // misma variable!
              console.log(x);  // 71
            }
            console.log(x);  // 71
          }

          function letTest() {
            let x = 31;
            if (true) {
              let x = 71;  // variable diferente
              console.log(x);  // 71
            }
            console.log(x);  // 31
          }">
          </view-code>
        </div>
        <h3>Const</h3>
        <p>Podremos definir una variable con valores fijos que solo serán de lectura a lo largo del código.</p>
        <div class="container-code">
          <view-code code="
          (function() {
            const PI;
            PI = 3.15; 
            // ERROR, porque ha de asignarse un valor en la 
            // declaración
          })();

          (function() {
            const PI = 3.15;
            PI = 3.14159;
            // ERROR de nuevo, porque es sólo-lectura
          })();">
          </view-code>
        </div>
        <div class="documentation-link">
          <a href="https://javascript.info/variables">Documentación oficial Javascript</a>
        </div>
      </section>
      <section>
        <h2>Nueva función Arrow</h2>
        <p>Con el nuevo estándar podremos ahorrar mucho código, hay varias formas de declararlas dependiendo el caso de uso. <br> Lo más importante en cuanto a estas funciones es que mantiene el contexto del this dependiendo del ámbito donde se encuentre.</p>
        <h3>Primer caso</h3>
        <p>Como vemos en este caso recibe dos parámetros entre paréntesis y devuelve la suma de estos</p>
        <div class="container-code">
          <view-code code="
          let sum = (param1,param2) => {
            return param1 + param2;
          }">
          </view-code>
        </div>
        <h3>Segundo caso</h3>
        <p>Como vemos en este caso recibe solo un parámetro y no hace falta poner el paréntesis, si la operación es sencilla y cabe en una sola línea, no hace falta poner ni las llaves ni el return</p>
        <div class="container-code">
          <view-code code="
          let sum = param1 => 5 + param1;">
          </view-code>
        </div>
        <div class="documentation-link"> 
          <a href="https://javascript.info/function-expressions-arrows#arrow-functions">Documentacion oficial Javascript</a>
        </div>
      </section>
      <section>
        <h2>Clases</h2>
        <p>Ahora podemos utilizar todo el sistema de clases en JavaScript con todo lo que conlleva (Herencias, propiedades...etc)</p>
        <p>Este apartado es muy importante ya que los Webcomponents se basan en las clases, aunque esto lo veremos después..</p>
        <div class="container-code">
          <view-code code="
          class Point {
            constructor ( x = 0, y = 0 ) {
              this.x = x;
              this.y = y;
            }

            toString () {
              return '(' + this.x + ', ' + this.y + ')';
            }
          }

          // Creating points
          let p1 = new Point( 10, 20 );
          let p2 = new Point();

          // Output p1: (with params)
          // p1.toString(); // (10, 20)

          // Output p2: (without params)
          p2.toString(); // (0, 0)">
          </view-code>
        </div>
        <div class="explanation">
          <h5>Class: </h5> 
          <p>Podemos ver que aparece la palabra reservada ‘class‘, con esto la estamos creando seguido del nombre de la clase</p>
        </div>
        <div class="explanation">
          <h5>Constructor: </h5> 
          <p>Aparece el concepto de constructor es una función propia de la clase en la cual inicializamos las propiedades de nuestra clase.<br> Como vemos las propiedades las recibe por parámetro y dentro le damos valor, aquí aparece el contexto del ‘this‘ hace referencia a la propia clase.</p>
        </div>
        <div class="explanation">
          <h5>New: </h5> 
          <p>Para crear un objeto a partir de la clase usamos ‘new‘ {Nombre Clase}, una vez creado el objeto podremos acceder a sus propiedades o métodos.</p>
        </div>
        <p>Vemos también que podemos asignarle un valor por defecto a los parámetros de una función, es una característica de ES6.</p>
        <h3>Setters y Getters</h3>
        <p>Habituales en programación, los métodos de acceso denominados ‘getters‘ y ‘setters‘ se utilizan para obtener y asignar valores a los atributos de nuestros objetos respectivamente.</p>
        <div class="container-code">
          <view-code code="
          class Rectangle {
            constructor ( height = 0, width = 0 ) {
              this._height = height;
              this._width = width;
            }

            set height ( value ) {
              this._height = value;
            }

            set width ( value = 0 ) {
              this._width = value;
            }

            get area() {
              return this._height * this._width;
            }
          }

          let obj = new Rectangle();
          obj.height = 10;
          obj.width = 20;
          obj.area; //200">
          </view-code>
        </div>
        <h3>Métodos estáticos</h3>
        <p>Los métodos estáticos son aquellos que se ejecutan a través/desde de la propia clase, no desde sus instancias. Es decir no hace falta instanciar una clase para hacer uso de ellos.</p>
        <div class="container-code">
          <view-code code="
          class Tools {
            static strToURL ( str ) {
              return encodeURIComponent( str )
                .replace( /%20/g,'+' );
            }
          }

          Tools.strToURL( 'La donna e mobile' );">
          </view-code>
        </div>
        <p>Si nos fijamos utilizamos directamente el método de la clase sin el ‘new‘.</p>
        <h3>Herencia: subclases o clases hijas</h3>
        <p>Como todos los lenguajes orientados a objetos en Javascript podemos utilizar la herencia, lo haremos por medio de la palabra reservada ‘extends‘.</p>
        <div class="container-code">
          <view-code code="
          class Device {
            constructor ( params = {} ) {
              ( {
                status: this._status = 'off',
                brand: this._brand = 'ACME',
                firmware: this._firmware = 'unknown'
              } = params );
            }

            start () {
              this._status = 'on';
            }

            get status () {
              return this._status;
            }

            get brand () {
              return this._brand;
            }

            get firmware () {
              return this._firmware;
            }
          }">
          </view-code>
        </div>
        <div class="explanation">
          <h5>Desestructuracion: </h5> 
          <p>Aprovechamos para ver otro concepto el de desestructuracion, recibimos un objeto por parámetro y a su vez lo desestructuramos para añadir valores a las propiedades de la clase.</p>
        </div>
        <h3>Extends</h3>
        <p>Podemos extender a partir de una clase y heredar todas sus propiedades y métodos.</p>
        <div class="container-code">
          <view-code code="
          class VideoDevice extends Device {
            start ( source = '' ) {
              super.start();

              return 'Rendering source...';
            }
          }">
          </view-code>
        </div>
        <p>Esto lo haremos con la palabra reservada ‘extends‘.</p>
        <div class="container-code">
          <view-code code="
          class Device {
            constructor ( status = 'off', brand = 'ACME', firmware ='know') {
              this._status = status;
              this._brand = brand;
              this._firmware = firmware;
            }

            start () {
              this._status = 'on';
            }

            get status () {
              return this._status;
            }

            get brand () {
              return this._brand;
            }

            get firmware () {
              return this._firmware;
            }
          }

          class Desktop extends Device {
            constructor(version) {
            super(version);
            this._version = version = 3;
            }
          }">
          </view-code>
        </div>
        <p>Para hacerlo más fácil en este ejemplo no utilizaremos la desestructuracion de objetos<br> Podemos ver que creamos una clase ‘Desktop‘ que extiende de ‘Device‘.</p>
        <p> - Si queremos utilizar el constructor en la clase hija es obligatorio llamar a ‘super‘.</p>
        <p> - Si queremos añadir una nueva propiedad para esta clase hija, añadimos esta en el constructor, luego llamamos a super para tener todas las propiedades del padre e inicializamos la nueva propiedad en este caso con un valor por defecto.</p>
        <div class="documentation-link">
          <a href="https://javascript.info/class">Documentación oficial</a>
        </div>
      </section>
      <section>
      <h2>Import y Export ES6</h2>
      <p>Es importante modularizar nuestro codigo e intentar separarlo en pequeñas funciones reutilizables, para esto tenemos los import y exports</p>
      <div class="container-code">
        <view-code code="
          //------ lib.js ------
          export const sqrt = Math.sqrt;
          export function square(x) {
              return x * x;
          }
          export function diag(x, y) {
              return sqrt(square(x) + square(y));
          }">
        </view-code>
      </div>
      <p>Para poder exportar variables o funciones utilizaremos ‘export‘.</p>
      <div class="container-code">
        <view-code code="
          //------ main.js ------//
          import { square, diag } from 'lib';
          console.log(square(11)); // 121
          console.log(diag(4, 3)); // 5
        ">
        </view-code>
      </div>
      <p>Para poder utilizar estas variables o funciones exportadas utilizaremos ‘import‘.</p>
      <div class="documentation-link">
        <a href="https://javascript.info/import-export">Documentación oficial</a>
      </div>
      <div>
        <img class="image-component" src="https://miro.medium.com/max/400/1*dbb7eIswD-w5cvVmevnANQ.jpeg" alt="Meme Javascript">
      </div>
      </section>
    `;
  }
}

customElements.define('home-template-view', HomeTemplateView);