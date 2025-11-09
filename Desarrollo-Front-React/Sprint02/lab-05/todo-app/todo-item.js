import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';

export class TodoItem extends LitElement {
  static properties = {
    text: { type: String },
    completed: { type: Boolean },
    index: { type: Number }
  };

  static styles = css`
    li {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1rem;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1.5rem;
    }

    .completed {
        text-decoration: line-through;
        color: black;
        background-color: lightgray;
        border-radius: 6px;
    }

    input[type="checkbox"] {
        padding: 0.5rem;
        border-radius: 6px;
    }

    button {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1rem;
        margin-left: 1rem;
        background-color: #4bbcee;
        border-radius: 6px;
        padding: 5px;
    }
  `;

  toggleComplete() {
    this.dispatchEvent(
      new CustomEvent('task-toggled', {
        detail: { index: this.index },
        bubbles: true,
        composed: true
      })
    );
  }

  deleteTask() {
    this.dispatchEvent(
      new CustomEvent('task-deleted', {
        detail: { index: this.index },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <li class=${this.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          .checked=${this.completed}
          @change=${this.toggleComplete}
        />
        <span>${this.text}</span>
        <button @click=${this.deleteTask}>Delete</button>
      </li>
    `;
  }
}

customElements.define('todo-item', TodoItem);
