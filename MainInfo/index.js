const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
const enty = Object.entries(person);
for (const [key, value] of enty) {
  console.log(value);
}
