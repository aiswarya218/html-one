// Reverse string
const str = "hello world";
const reversedStr = str.split('')
.reverse()
.join('');
console.log(reversedStr);


// Flattening an array refers to the process of transforming a multi-dimensional or nested array into a single-level array. This means combining all sub-array elements 
// into a new array, effectively removing the nested structure.The primary method for achieving this in JavaScript is the Array.prototype.flat() method. This method creates a new array with all sub-array elements concatenated into it recursively up to a specified depth. 
// Syntax:   arr.flat([depth])
// Example:
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // Output: [1, 2, 3, 4] 

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); // Output: [1, 2, 3, 4, [5, 6]] (only one level flattened)

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (all levels flattened)

// "IsArray" typically refers to methods or functions in programming languages, used to check if a given variable or value is an array, returning true if it is and false otherwise. These functions are crucial for validating data and ensuring that operations intended for arrays are not performed on incorrect data types. 
// In JavaScript, Array.isArray() is a static method of the Array object that is more robust than the instanceof operator because it correctly handles arrays created in different JavaScript contexts (like within iframes).It returns true if the provided value is a true array and false for any other data type. 

// A for loop is a programming construct used to execute a block of code repeatedly based on a specified condition. It is useful for tasks such as running code a fixed number of times or iterating through sequences like lists or strings. 
// In languages like C, C++, and Java, a common style of for loop includes an initialization step, a condition, and an increment or decrement step. The process involves initializing a loop counter, checking a condition before each iteration, executing the loop body if the condition is true, and updating the loop variable. If the condition is false, the loop terminates. For more details on how a C-style for loop works, see GeeksforGeeks. 
// for loop syntax varies across different programming languages. For instance, Python's for loop iterates directly over items in a sequence. 
// python

// fruits = ["apple", "banana", "cherry"]
// for fruit in fruits:
//   print(fruit)

// for i in range(5):
//   print(i) # Prints numbers from 0 to 4

const students = [
    {
        name: "Alice Johnson",
        class: "K",
        marks: { Math: 85, Science: 92, English: 78, History: 65 }
    },
    {
        name: "Bob Smith",
        class: "K",
        marks: { Math: 90, Science: 88, English: 81, History: 72 }
    },
    {
        name: "Charlie Brown",
        class: "K",
        marks: { Math: 76, Science: 95, English: 88, History: 91 }
    },
    {
        name: "Diana Prince",
        class: "K",
        marks: { Math: 98, Science: 70, English: 94, History: 85 }
    },
    {
        name: "Ethan Hunt",
        class: "K",
        marks: { Math: 60, Science: 75, English: 68, History: 55 }
    }
];

// Helper function to calculate total marks for a single student
const calculateTotalMarks = (student) => {
    return Object.values(student.marks).reduce((sum, mark) => sum + mark, 0);
};

// Helper function to calculate average marks for a single student
const calculateAverageMarks = (student) => {
    const marksArray = Object.values(student.marks);
    const total = calculateTotalMarks(student);
    return total / marksArray.length;
};

// 1. Write a function to print the name of the class: 'Class K'.
const problem1_printClassName = () => {
    return "Class"
};

// 2. Write a function to print the teacher's name: 'Mary'.

// 3. Write a function to print the names of all the students in the class.
const problem3_getAllStudentNames = (data) => {
    return data.map(s => s.name)
};

// 4. Write a function to print the names of all the subjects in the class.
const problem4_getAllSubjectNames = (data) => {
    if (data.length === 0) return [];
    // Assuming all students have the same subjects
    return Object.keys(data[0].marks);
};

// 5. Write a function to print the marks of a specific subject for a specific student.
const problem5_getSpecificMark = (data, studentName, subject) => {
    const student = data.find(s => s.name === studentName);
    if (!student) return `Error: Student ${studentName} not found.`;
    const mark = student.marks[subject];
    return mark !== undefined
        ? `${studentName}'s mark in ${subject}: ${mark}`
        : `Error: Subject ${subject} not found for ${studentName}.`;
};

// 6. Write a function to calculate and print the total marks for a specific student.
const problem6_getTotalMarksForStudent = (data, studentName) => {
    const student = data.find(s => s.name === studentName);
    if (!student) return `Error: Student ${studentName} not found.`;
    const total = calculateTotalMarks(student);
    return `${studentName}'s total marks: ${total}`;
};

// 7. Write a function to calculate and print the average marks for a specific student.
const problem7_getAverageMarksForStudent = (data, studentName) => {
    const student = data.find(s => s.name === studentName);
    if (!student) return `Error: Student ${studentName} not found.`;
    const average = calculateAverageMarks(student);
    return `${studentName}'s average marks: ${average.toFixed(2)}`;
};

// 8. Write a function to calculate and print the total marks for all students in a specific subject.
const problem8_getTotalMarksForSubject = (data, subject) => {
    const total = data.reduce((sum, s) => {
        const mark = s.marks[subject];
        return sum + (mark || 0);
    }, 0);
    return `Total marks for ${subject} across all students: ${total}`;
};

// 9. Write a function to calculate and print the average marks for all students in a specific subject.
const problem9_getAverageMarksForSubject = (data, subject) => {
    const marks = data.map(s => s.marks[subject]).filter(mark => mark !== undefined);
    if (marks.length === 0) return `Error: Subject ${subject} not found.`;
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    return `Average marks for ${subject} across all students: ${average.toFixed(2)}`;
};

// 10. Write a function to calculate and print the total marks for all students in all subjects.
const problem10_getOverallTotalMarks = (data) => {
    const overallTotal = data.reduce((total, student) => total + calculateTotalMarks(student), 0);
    return `Overall total marks for the class: ${overallTotal}`;
};

// 11. Write a function to calculate and print the average marks for all students in all subjects.
const problem11_getOverallAverageMarks = (data) => {
    if (data.length === 0) return 0;
    const overallTotal = data.reduce((total, student) => total + calculateTotalMarks(student), 0);
    const subjectsCount = problem4_getAllSubjectNames(data).length;
    const totalMarksCount = data.length * subjectsCount;
    
    const average = overallTotal / totalMarksCount;
    return `Overall average marks for the class: ${average.toFixed(2)}`;
};

// 12. Write a function to find and print the student with the highest marks in a specific subject.
const problem12_getHighestScorerInSubject = (data, subject) => {
    let highestMark = -1;
    let topStudent = null;

    data.forEach(s => {
        const mark = s.marks[subject];
        if (mark !== undefined && mark > highestMark) {
            highestMark = mark;
            topStudent = s.name;
        }
    });

    return topStudent
        ? `Highest mark in ${subject}: ${highestMark} (Scored by ${topStudent})`
        : `Error: Subject ${subject} not found or no students in class.`;
};

// 13. Write a function to find and print the student with the lowest marks in a specific subject.
const problem13_getLowestScorerInSubject = (data, subject) => {
    let lowestMark = Infinity;
    let bottomStudent = null;

    data.forEach(s => {
        const mark = s.marks[subject];
        if (mark !== undefined && mark < lowestMark) {
            lowestMark = mark;
            bottomStudent = s.name;
        }
    });

    return bottomStudent
        ? `Lowest mark in ${subject}: ${lowestMark} (Scored by ${bottomStudent})`
        : `Error: Subject ${subject} not found or no students in class.`;
};

// 14. Write a function to find and print the student with the highest total marks.
const problem14_getHighestTotalScorer = (data) => {
    let highestTotal = -1;
    let topStudent = null;

    data.forEach(s => {
        const total = calculateTotalMarks(s);
        if (total > highestTotal) {
            highestTotal = total;
            topStudent = s.name;
        }
    });

    return topStudent
        ? `Highest total marks: ${highestTotal} (Scored by ${topStudent})`
        : `Error: No students in class.`;
};

// 15. Write a function to find and print the student with the lowest total marks.
const problem15_getLowestTotalScorer = (data) => {
    let lowestTotal = Infinity;
    let bottomStudent = null;

    data.forEach(s => {
        const total = calculateTotalMarks(s);
        if (total < lowestTotal) {
            lowestTotal = total;
            bottomStudent = s.name;
        }
    });

    return bottomStudent
        ? `Lowest total marks: ${lowestTotal} (Scored by ${bottomStudent})`
        : `Error: No students in class.`;
};

// 16. Write a function to find and print the subject with the highest average marks.
const problem16_getHighestAverageSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    let highestAverage = -1;
    let topSubject = null;

    subjects.forEach(subject => {
        const marks = data.map(s => s.marks[subject]).filter(mark => mark !== undefined);
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;

        if (average > highestAverage) {
            highestAverage = average;
            topSubject = subject;
        }
    });

    return topSubject
        ? `Subject with highest average: ${topSubject} (${highestAverage.toFixed(2)})`
        : `Error: No subjects found.`;
};

// 17. Write a function to find and print the subject with the lowest average marks.
const problem17_getLowestAverageSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    let lowestAverage = Infinity;
    let bottomSubject = null;

    subjects.forEach(subject => {
        const marks = data.map(s => s.marks[subject]).filter(mark => mark !== undefined);
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;

        if (average < lowestAverage) {
            lowestAverage = average;
            bottomSubject = subject;
        }
    });

    return bottomSubject
        ? `Subject with lowest average: ${bottomSubject} (${lowestAverage.toFixed(2)})`
        : `Error: No subjects found.`;
};

// 18. Write a function to calculate and print the overall average marks for all subjects for the class.
// (Duplicate of P11, reusing P11 logic)
const problem18_getOverallAverageMarks = (data) => {
    return problem11_getOverallAverageMarks(data);
};

// 19. Write a function to calculate and print the overall average marks for each subject.
const problem19_getAverageMarksPerSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    const averages = {};

    subjects.forEach(subject => {
        const marks = data.map(s => s.marks[subject]).filter(mark => mark !== undefined);
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / marks.length;
        averages[subject] = average.toFixed(2);
    });

    return averages;
};

// 20. Write a function to calculate and print the total marks for each subject.
const problem20_getTotalMarksPerSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    const totals = {};

    subjects.forEach(subject => {
        const total = data.reduce((sum, s) => sum + (s.marks[subject] || 0), 0);
        totals[subject] = total;
    });

    return totals;
};

// 21. Write a function to find and print the subject with the highest total marks.
// (Duplicate of P16, but checking total instead of average - implementing based on *total*)
const problem21_getHighestTotalSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    let highestTotal = -1;
    let topSubject = null;

    subjects.forEach(subject => {
        const total = data.reduce((sum, s) => sum + (s.marks[subject] || 0), 0);
        if (total > highestTotal) {
            highestTotal = total;
            topSubject = subject;
        }
    });

    return topSubject
        ? `Subject with highest total marks: ${topSubject} (${highestTotal})`
        : `Error: No subjects found.`;
};

// 22. Write a function to find and print the subject with the lowest total marks.
const problem22_getLowestTotalSubject = (data) => {
    const subjects = problem4_getAllSubjectNames(data);
    let lowestTotal = Infinity;
    let bottomSubject = null;

    subjects.forEach(subject => {
        const total = data.reduce((sum, s) => sum + (s.marks[subject] || 0), 0);
        if (total < lowestTotal) {
            lowestTotal = total;
            bottomSubject = subject;
        }
    });

    return bottomSubject
        ? `Subject with lowest total marks: ${bottomSubject} (${lowestTotal})`
        : `Error: No subjects found.`;
};

// 23. Write a function to find and print the student(s) with the highest average marks.
const problem23_getStudentsWithHighestAverage = (data) => {
    if (data.length === 0) return [];
    
    let maxAvg = -1;
    let topStudents = [];

    data.forEach(s => {
        const avg = calculateAverageMarks(s);
        if (avg > maxAvg) {
            maxAvg = avg;
            topStudents = [{ name: s.name, average: avg.toFixed(2) }];
        } else if (avg === maxAvg) {
            topStudents.push({ name: s.name, average: avg.toFixed(2) });
        }
    });
    
    return topStudents;
};

// 24. Write a function to find and print the student(s) with the lowest average marks.
const problem24_getStudentsWithLowestAverage = (data) => {
    if (data.length === 0) return [];

    let minAvg = Infinity;
    let bottomStudents = [];

    data.forEach(s => {
        const avg = calculateAverageMarks(s);
        if (avg < minAvg) {
            minAvg = avg;
            bottomStudents = [{ name: s.name, average: avg.toFixed(2) }];
        } else if (avg === minAvg) {
            bottomStudents.push({ name: s.name, average: avg.toFixed(2) });
        }
    });

    return bottomStudents;
};

// 25. Write a function to find and print the student(s) with the highest total marks.
// (Similar to P14, but returning all students if ties exist)
const problem25_getStudentsWithHighestTotal = (data) => {
    if (data.length === 0) return [];

    let maxTotal = -1;
    let topStudents = [];

    data.forEach(s => {
        const total = calculateTotalMarks(s);
        if (total > maxTotal) {
            maxTotal = total;
            topStudents = [{ name: s.name, total }];
        } else if (total === maxTotal) {
            topStudents.push({ name: s.name, total });
        }
    });

    return topStudents;
};

// 26. Write a function to find and print the student(s) with the lowest total marks.
// (Similar to P15, but returning all students if ties exist)
const problem26_getStudentsWithLowestTotal = (data) => {
    if (data.length === 0) return [];

    let minTotal = Infinity;
    let bottomStudents = [];

    data.forEach(s => {
        const total = calculateTotalMarks(s);
        if (total < minTotal) {
            minTotal = total;
            bottomStudents = [{ name: s.name, total }];
        } else if (total === minTotal) {
            bottomStudents.push({ name: s.name, total });
        }
    });

    return bottomStudents;
};

// 27. Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.
const problem27_countAboveMarkSubject = (data, subject, targetMark) => {
    const count = data.filter(s => s.marks[subject] !== undefined && s.marks[subject] > targetMark).length;
    return `${count} student(s) scored above ${targetMark} in ${subject}.`;
};

// 28. Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.
const problem28_countBelowMarkSubject = (data, subject, targetMark) => {
    const count = data.filter(s => s.marks[subject] !== undefined && s.marks[subject] < targetMark).length;
    return `${count} student(s) scored below ${targetMark} in ${subject}.`;
};

// 29. Write a function to calculate and print the number of students who scored above a certain mark in all subjects.
const problem29_countAboveMarkAllSubjects = (data, targetMark) => {
    const count = data.filter(s => 
        Object.values(s.marks).every(mark => mark > targetMark)
    ).length;
    return `${count} student(s) scored above ${targetMark} in ALL subjects.`;
};

// 30. Write a function to calculate and print the number of students who scored below a certain mark in all subjects.
const problem30_countBelowMarkAllSubjects = (data, targetMark) => {
    const count = data.filter(s => 
        Object.values(s.marks).every(mark => mark < targetMark)
    ).length;
    return `${count} student(s) scored below ${targetMark} in ALL subjects.`;
};

// 31. Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.
const problem31_percentAboveMarkSubject = (data, subject, targetMark) => {
    const studentsWithSubject = data.filter(s => s.marks[subject] !== undefined);
    const count = studentsWithSubject.filter(s => s.marks[subject] > targetMark).length;
    const total = studentsWithSubject.length;
    if (total === 0) return `0%`;
    const percentage = (count / total) * 100;
    return `${percentage.toFixed(2)}% of students scored above ${targetMark} in ${subject}.`;
};

// 32. Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.
const problem32_percentBelowMarkSubject = (data, subject, targetMark) => {
    const studentsWithSubject = data.filter(s => s.marks[subject] !== undefined);
    const count = studentsWithSubject.filter(s => s.marks[subject] < targetMark).length;
    const total = studentsWithSubject.length;
    if (total === 0) return `0%`;
    const percentage = (count / total) * 100;
    return `${percentage.toFixed(2)}% of students scored below ${targetMark} in ${subject}.`;
};

// 33. Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.
const problem33_percentAboveMarkAllSubjects = (data, targetMark) => {
    const count = data.filter(s => 
        Object.values(s.marks).every(mark => mark > targetMark)
    ).length;
    const total = data.length;
    if (total === 0) return `0%`;
    const percentage = (count / total) * 100;
    return `${percentage.toFixed(2)}% of students scored above ${targetMark} in ALL subjects.`;
};

// 34. Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.
const problem34_percentBelowMarkAllSubjects = (data, targetMark) => {
    const count = data.filter(s => 
        Object.values(s.marks).every(mark => mark < targetMark)
    ).length;
    const total = data.length;
    if (total === 0) return `0%`;
    const percentage = (count / total) * 100;
    return `${percentage.toFixed(2)}% of students scored below ${targetMark} in ALL subjects.`;
};


// =========================================================
// 3. DEMONSTRATION OF OUTPUT
// =========================================================

console.log("--- Problem 1-5 Demonstrations ---");
console.log(`P1: ${problem1_printClassName()}`);
console.log(`P2: ${problem2_printTeacherName()}`);
console.log(`P3: ${problem3_getAllStudentNames(students)}`);
console.log(`P4: ${problem4_getAllSubjectNames(students)}`);
console.log(`P5: ${problem5_getSpecificMark(students, "Alice Johnson", "Science")}`);

console.log("\n--- Problem 6-10 Demonstrations ---");
console.log(`P6: ${problem6_getTotalMarksForStudent(students, "Bob Smith")}`);
console.log(`P7: ${problem7_getAverageMarksForStudent(students, "Bob Smith")}`);
console.log(`P8: ${problem8_getTotalMarksForSubject(students, "Math")}`);
console.log(`P9: ${problem9_getAverageMarksForSubject(students, "Math")}`);
console.log(`P10: ${problem10_getOverallTotalMarks(students)}`);

console.log("\n--- Problem 12-14 Demonstrations ---");
console.log(`P12: ${problem12_getHighestScorerInSubject(students, "English")}`);
console.log(`P13: ${problem13_getLowestScorerInSubject(students, "English")}`);
console.log(`P14: ${problem14_getHighestTotalScorer(students)}`);

console.log("\n--- Problem 27 & 31 Demonstrations (Counting/Percentage) ---");
console.log(`P27: ${problem27_countAboveMarkSubject(students, "History", 80)}`);
console.log(`P31: ${problem31_percentAboveMarkSubject(students, "History", 80)}`);

