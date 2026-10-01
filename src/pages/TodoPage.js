export class TodoPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByLabel('New todo');
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.items = page.getByRole('listitem');
    this.emptyMessage = page.getByTestId('empty-message');
  }

  async open() {
    await this.page.goto('/');
  }

  async addTodo(text) {
    await this.input.fill(text);
    await this.addButton.click();
  }

  item(text) {
    return this.items.filter({ hasText: text });
  }

  async complete(text) {
    await this.item(text)
      .getByRole('checkbox', { name: `Complete ${text}` })
      .check();
  }
}
