// @ts-nocheck
import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
          <a href="index.html">
              Sesión  </a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  /**
   * @param {import(
      "../lib/tiposFire.js").User}
      usu */
      async cambiaUsuario(usu) {
        if (usu && usu.email) {
          let html = "";
          const roles =
            await cargaRoles(
              usu.email);
          /* Enlaces para solo
           * para clientes. */
          if (roles.has("Cliente")) {
            html += /* html */
              `
                <a href=
                  "chat.html">  Chat  </a>
              `;
          }
          /* Enlaces para solo
           * administradores.
           */
          if (roles.has(
            "Administrador")) {
            html += /* html */
              `
                <a href="alumnos.html">  Alumnos  </a>
                <a href="usuarios.html">  Usuarios  </a>
              `;
          }
          this.ul.innerHTML += html;
        }
      }
    }


customElements.define(
  "mi-nav", MiNav);
