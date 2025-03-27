function Person(subject,name,age,marks) {
    this.age=age
    this.name=name 
    this.subject=subject
    this.marks=marks
}

Person.prototype.greet=function() {
    return this.name , this.age
}

person1=new Person('hamid',8)

console.log(person1);
