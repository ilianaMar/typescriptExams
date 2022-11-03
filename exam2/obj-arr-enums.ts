// const person: {
//     name: string;
//     age: number;
// } 
// const person: {
//     name: string;
//     age: number;
//     hobies: string[],
//     role: [number, string]
// } = {
//     name: 'Iliana',
//     age: 30, 
//     hobies: ['gym', 'cooking'], 
//     role: [2, 'author']
// };

enum Role {Admin = 5, Read = 'read', Author = 10};

const person =  {
    name: 'Iliana',
    age: 30, 
    hobies: ['gym', 'cooking'], 
    role: Role.Admin
};
// person.role.push('admin');
// person.role = [0, 'admin'];
let activities = ['test1', 'test2'];
let arr1: any[];
arr1 = [123, 'test1']
person['activites'] = activities;
console.log(person);

for(const hobby of person.hobies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.Admin){
    console.log(Role.Admin);
}

console.log(Role.Author);
console.log(Role.Read);