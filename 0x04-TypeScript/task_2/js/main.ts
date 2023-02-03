interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface{

    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }

}

function createEmployee (salary: number | string): Director | Teacher{
    let numericSalary = typeof salary === "string" ? parseInt(salary) : salary;
    /*  checks the type of the salary argument.
        If it's a string, it uses the parseInt function to convert it to a number. 
        If it's already a number, it just assigns it to the numericSalary 
    */
   if (numericSalary < 500)
   {
    return new Teacher
   }
   else {
    return new Director
   }
}

function isDirector(employee: any) : employee is Director{
    return employee instanceof Director
}

function executeWork(employee : Director | Teacher){
    if(isDirector(employee)){
        employee.workDirectorTasks();
    }
    else{
        employee.workTeacherTasks();
    }
    
}

type Subjects = "Math" | "History"
/*In TypeScript string literals are used to specify the exact value of a string
    Subject literal can only be assigned values of "Math" or "History"
 */
function teachClass(todayClass: Subjects) : string{
    if (todayClass === "Math"){
        return "Teaching Math";
    }
    if (todayClass === "History"){
        return "Teaching History";
    }
}