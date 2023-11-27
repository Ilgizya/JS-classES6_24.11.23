class Student {
    #age = 0
    constructor(name, age) {
        this.name = name
        this.#age = age
    }

    getAge() {
        return this.#age
    }

    set age(years) {
        this.#age = years
    }

    printStudentInfo() {
        return `Студент: ${this.name},
        <br>Возраст: ${this.#age}</br>`
    }

    haveBirthday() {
        return this.#age++
    }
}

const student1 = new Student("Иванов Иван", 0)
console.log(`<br>First info:</br>
${student1.printStudentInfo()}`)

student1.age = 18
console.log(`<br>Set age:</br>
${student1.printStudentInfo()}`)

student1.haveBirthday()
console.log(`<br>After Birthday age:</br>
${student1.printStudentInfo()}`)
