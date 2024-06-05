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

class MyMap {
  constructor() {
    this._values = {};
  }

  set(key, value) {
    this._values[key] = value;
  }

  get(key) {
    if(this._values.hasOwnProperty(key)) {
      return this._values[key]
    }
  }
  
  has(key){
    return this._values.hasOwnProperty(key)
  }

  delete(key){
    if(!this.has(key)) { return false }

    delete this._values[key]
    return true
  }

  clear() {
    this._values = {}
  }

  get size() {
    return Object.keys(this._values).length;
  }
}

module.exports = { MySet, MyMap }