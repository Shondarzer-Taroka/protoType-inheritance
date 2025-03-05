function Person(subject,name,age) {
    this.age=age
    this.name=name 
    this.subject=subject
}

Person.prototype.greet=function() {
    return this.name , this.age
}

person1=new Person('hamid',8)

console.log(person1);
