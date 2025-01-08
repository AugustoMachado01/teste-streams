export class Database {
  #database;
  constructor() {
    this.#database = {};
  }

  select(table) {
    // Retorna os dados da tabela ou um array vazio, caso a tabela não exista
    return this.#database[table] ?? [];
  }

  insert(table, data) {
    // Verifica se a tabela já existe, caso contrário, inicializa como um array vazio
    if (!Array.isArray(this.#database[table])) {
      this.#database[table] = [];
    }
    // Insere o dado na tabela
    this.#database[table].push(data);
    return data;
  }
}
