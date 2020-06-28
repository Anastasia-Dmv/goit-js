import {
  default as users
} from './users.js'

console.table(users)

// ======================N1============

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

// ======================N2============
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));
// ======================N3============
const getUsersWithGender = (users, gender) => users
  .filter(user => user.gender === gender)
  .map(user => user.name);
console.log(getUsersWithGender(users, 'male'));
// ======================N4============
const getInactiveUsers = (users) => users
  .filter(user => !user.isActive) // получили  массив объектов 
  .map(user => user.name); // получили массив имён
console.log(getInactiveUsers(users));
// ======================N5============
const gerUserWithEmail = (users, email) => users
  .find(user => user.email === email);
console.log(gerUserWithEmail(users, 'shereeanthony@kog.com'));
// ======================N6============

const getUserWithAge = (users, min, max) => users
  .filter(user => (user.age >= min && user.age <= max));
console.log(getUserWithAge(users, 20, 30));
console.log(getUserWithAge(users, 30, 40));


// ======================N7============
const calculateTotalBalance = users => users
  .reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users));

// ======================N8============
const getUsersWithFriend = (users, FriendName) => users

  .filter(user => user.friends.some(name => name === FriendName))
  .map(user => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// ======================N9============

const getNamesSortedByFriendsCount = users => users
  .sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length)
  .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

// ======================N10============
const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((skills, user) => [...skills, ...user.skills], []);
  console.log(allSkills);

  const unrepetitiveSkills = allSkills.filter((skill, index) => allSkills.indexOf(skill) === index);
  console.log(unrepetitiveSkills);

  return unrepetitiveSkills.sort();

};

console.log(getSortedUniqueSkills(users));

// ======================N10 another option ============

// const getSortedUniqueSkills = users => {
//   const allSkills = users.reduce((skills, user) => [...skills, ...user.skills],[] );
//   console.log(allSkills);

//   const unrepetitiveSkills = allSkills.reduce((uniqueSkill, skill) => uniqueSkill.includes(skill) ? uniqueSkill : [...uniqueSkill, skill],[]);
//   console.log(unrepetitiveSkills);

//   return unrepetitiveSkills.sort();

//   };

//   console.log(getSortedUniqueSkills(users));