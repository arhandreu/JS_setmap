export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Ошибка1'], [2, 'Ошибка2'], [3, 'Ошибка3']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
