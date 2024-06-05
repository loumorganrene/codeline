class MySet {
  constructor(defaultValues) {
    this._values = defaultValues
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
      this._values.push(value)
    }
  }

  delete(value) {
    if(this.has(value)) {
      this._values.pop(value)
    }
  }

  clear() {
    this._values = []
  }

  get size() {
    return this._values.length
  }
}

module.exports = { MySet }