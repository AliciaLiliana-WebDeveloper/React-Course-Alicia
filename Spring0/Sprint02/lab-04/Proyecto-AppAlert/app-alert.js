const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: sans-serif;
      max-width: 100%;
      margin: 10px;
      border-radius: 20px;
      overflow: hidden;
    }
    .hidden {
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      height: 0;
      margin: 0;
      padding: 0;
    }
    .alert {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      color: #fff;
      gap: 10px;
      position: relative;
    }
    .alert svg {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
    }
    .close-btn {
      position: absolute;
      right: 25px;
      top: 15px;
      background: none;
      border: none;
      color: inherit;
      font-size: 30px;
      cursor: pointer;
    }

    .success { background-color: #009b72; }
    .info { background-color: #6761a8; }
    .warning { background-color: #bfa900; }
    .error { background-color: #f26430; }
  </style>
  <div class="alert" role="alert" aria-live="polite">
    <span class="icon"></span>
    <span class="message"></span>
    <button class="close-btn" aria-label="Cerrar">&times;</button>
  </div>
`;

export class AppAlert extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'message', 'open'];
  }

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.appendChild(template.content.cloneNode(true));
    this._container = this._shadow.querySelector('.alert');
    this._message = this._shadow.querySelector('.message');
    this._icon = this._shadow.querySelector('.icon');
    this._btn = this._shadow.querySelector('.close-btn');
    this._closeHandler = this._close.bind(this);
  }

  connectedCallback() {
    this._btn.addEventListener('click', this._closeHandler);
    this._render();
  }

  disconnectedCallback() {
    this._btn.removeEventListener('click', this._closeHandler);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  _close() {
    this.removeAttribute('open');
    this._container.classList.add('hidden');
    this.dispatchEvent(new CustomEvent('alert-close', { bubbles: true, composed: true }));
  }

  _render() {
    const type = this.getAttribute('type') || 'info';
    const message = this.getAttribute('message') || '';
    const open = this.hasAttribute('open');

    // The message
    this._message.textContent = message;

    // My type
    this._container.className = `alert ${type} ${open ? '' : 'hidden'}`;

    // Icons for the alerts
    const icons = {
      success: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17l-3.59-3.58L4 14l5 5 12-12-1.41-1.42z"/></svg>`,
      info: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2v2h-2zm0 4h2v6h-2zm1-9C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10S17.52 4 12 4z"/></svg>`,
      warning: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
      error: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`
    };
    this._icon.innerHTML = icons[type] || '';
  }
}

customElements.define('app-alert', AppAlert);
