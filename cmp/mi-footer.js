class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        
        Pichardo Vilchis Alfonso.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
