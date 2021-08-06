
const video = ['youtube', 'video', 'rutube'],
    blogs = ['wordpress', 'levejournal', 'blogger'],
    internet = [...video, ...blogs, 'vf', 'FB'];

console.log(internet);

function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

newQ.two = 3;

console.log(newQ);
console.log(q);