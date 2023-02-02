interface Teacher {
    /*The readonly keyword before each property declaration makes the properties read-only,
       meaning that their values cannot be changed after the object is first initialized. */
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    gender: string;
    contract: boolean;
    salary: number;
}
// Interface that extends Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

/*
function which take two arguments return 
the first letter of argument 1 with argument 2 
*/
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}
/*
    TestCase
    const result= printTeacher("John", "Doe");
    console.log(result); 
    */


// Writing a Class named StudentClass

interface StudentConstructor{
    new (firstName: string, lastName: string): Student;
}

interface Student{
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student{
    firstName: string;
    lastName: string;

    constructor(firstName: string,lastName: string)
    {
        this.firstName =firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }
}