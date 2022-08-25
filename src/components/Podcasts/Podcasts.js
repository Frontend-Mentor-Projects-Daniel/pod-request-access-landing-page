fetch('./src/components/Podcasts/Podcasts.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class Podcasts extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    }

    // VARIABLES

    // METHODS
  }
  window.customElements.define('podcasts-component', Podcasts);
}
