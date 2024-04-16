class Student {
  constructor(rgm, Name, lastName) {
  this.rgm = rgm;
  this.Name = Name;
  this.lastName = lastName;
  }
  
  getInfo() {
  return Nome: ${this.Name} ${this.lastName}, RGM: ${this.rgm};
  }
  }
  
  module.exports = {
  createStudent: (rgm, Name, lastName) => new Student(rgm, Name, lastName)
  };