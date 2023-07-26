const prices: (number | string)[] = [1, 2, 5, 4, 6, 'dark'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['nicobytes', 15];
// user = ['5415', 15];

// user = []; ERROR
// user = ['nsa']; ERROR
// user = ['saf', 25];
user = ['adf', 45, true];

const [username, age] = user;
console.log(username);
console.log(age);
