const objects = JSON.parse(`[{"canFly": false},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);
const concatenate = (a, o ) => ({...a, ...o});
const c = objects.reduce(concatenate, {});
console.log(c);