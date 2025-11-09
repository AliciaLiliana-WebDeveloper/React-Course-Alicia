import './todo-item.js';
import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';

export class TodoList extends LitElement {
  static properties = {
    tasks: { type: Array }
  };

  constructor() {
    super();
    this.tasks = [];
  }

  static styles = css`
    form {
        margin-bottom: 2rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1rem;
    }
    input[type="text"] {
        padding: 0.5rem;
        width: 50%;
        border-radius: 6px;
    }
    button {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
        background-color: #4bbcee;
        border-radius: 6px;
    }
    ul{
        padding-inline-start: 0;
    }
  `;

  addTask(e) {
    e.preventDefault();
    const input = this.renderRoot.querySelector('#newTask');
    if (input.value.trim()) {
      this.tasks = [...this.tasks, { text: input.value, completed: false }];
      input.value = '';
    }
  }

  handleComplete(e) {
    const index = e.detail.index;
    this.tasks = this.tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
  }

  handleDelete(e) {
    const index = e.detail.index;
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }

  render() {
    return html`
      <form @submit=${this.addTask}>
        <input id="newTask" type="text" placeholder="New Task..." />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        ${this.tasks.map(
          (task, index) => html`
            <todo-item
              .text=${task.text}
              .completed=${task.completed}
              .index=${index}
              @task-toggled=${this.handleComplete}
              @task-deleted=${this.handleDelete}
            ></todo-item>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);
