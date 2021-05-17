let person = {
  name: 'Katerina',
  surname: 'Ivanova',
  middlname: 'Aleksandrovna',

  get fullName() {
    return `${this.surname} ${this.name} ${this.middlname}`;
  },

  set nameNew(val){
    this.name = val;
  }
};
person.name = 'Irina';
console.log(person.fullName);




let Group = () => {
  let ourGroup = [
    {name: 'Катерина', surname: 'Иванова'},
    {name: 'Александр', surname: 'Сидоров'},
  ];

let result = {
  ourGroup, 
  
  get fullName(){
    return `${ourGroup.name} ${ourGroup.surname}`;
  }, 
};

  return result;
};

let { ourGroup } = Group();

console.log(ourGroup.fullName)