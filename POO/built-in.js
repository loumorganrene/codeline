class MySet {
  constructor(defaultValues) {
    this._values = defaultValues;
  }

  has(value) {
    if (this._values.includes(value)) {
      return true;
    } else {
      return false;
    }
  }

  add(value) {
    if (!this.has(value)) {
      this._values.push(value);
    } else {
      return;
    }
  }

  delete(value) {
    if(this.has(value)) {
      this._values = this._values.filter(item => item !== value);
    } else {
      return;
    }
  }

  clear() {
    this._values = [];
  }

  get size() {
    return this._values.length;
  }
}

module.exports = { MySet }