let users = [];

function User(name, email){
    this.name = name;
    this.email = email;
    this.login();
}

User.prototype.login = function(){
    users.push(this);
};
User.prototype.logout = function(){
    console.log(this.name + ' logged out');
};
function Admin(adminId, ...args){
    User.apply(this, args);
    this.adminId = adminId;
}

function Root(rootId, ...args){
    Admin.apply(this, args);
    this.rootId = rootId;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.delete_user = function(user){
    users = users.filter(a=>{
        return user.email !== a.email;
    });
}
let user1 = new User('kamil', 'k@k.com');
let user2 = new User('jack', 'jack@jack.com');

console.log(users);
let admin1 = new Admin(3455, 'me', 'me@me.com');
admin1.delete_user(user1);
console.log(users);
let root = new Root(8828282, 83838, 'root', 'root@root.com');

