fetch('./src/components/PodcastForm/PodcastForm.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class PodcastForm extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    }

    // VARIABLES

    // METHODS
    handleSubmit(e, inputEmail, errorMessage) {
      // regex for checking valid email
      const validEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const isValid = inputEmail.value.match(validEmail);

      if (!isValid) {
        // prevent form from submitting if there's an error
        e.preventDefault();
        errorMessage.classList.remove('hide');
      } else {
        errorMessage.classList.add('hide');
      }
    }

    // LIFE CYCLE METHODS
    connectedCallback() {
      const form = this.shadowRoot.lastElementChild.children[2];
      const inputEmail = form.firstElementChild.children[1];
      const errorMessage = form.firstElementChild.children[2];

      form.addEventListener('submit', (e) =>
        this.handleSubmit(e, inputEmail, errorMessage)
      );
    }
  }
  window.customElements.define('podcast_form-component', PodcastForm);
}
