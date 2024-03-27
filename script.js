//Task 1:
const resume = {
    "first_name":"susidharan",
    "last_name":"Palraj",
    "age":23,
    "mobileNo":9876543210,
    "education": "Btech Information Technology",
    "language": ["tamil","English"],
    "skills":["HTML","CSS","java script","reactJs","NodeJs","MongoDB"],
    "location":"Erode",
    "about":"I am susidharan and I am a full stack developer"
};
//Task 2:
//for loop:

for(let i = 0;i< Object.entries(resume).length;i++){
    console.log( Object.keys(resume)[i]+":"+Object.values(resume)[i]);
}
console.log("-----------------------------------------");
//for in:

for(var key in resume){
    console.log(key+":"+resume[key]);

}
console.log("-----------------------------------------");
//for of:
for(var [key,val] of Object.entries(resume)){
    console.log(key+":"+ val);
}
console.log("-----------------------------------------");
// for Each:
Object.entries(resume).forEach(([key,val])=>console.log(key+":"+val));

console.log("-----------------------------------------");


