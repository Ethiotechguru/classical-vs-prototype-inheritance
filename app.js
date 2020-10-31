let users = [];
let admins = [];
class User{
    constructor(name, email, id){
        this.name = name;
        this.email= email;
        this.id = id;
        this.login();
    }
    login(){
        if(this instanceof Admin){
            admins.push(this);
        }
        else{
            users.push(this);
        }
        
    }
}
class Admin extends User{
    
    constructor(name, email, id, password){
        super(name, email, id);
        this.password = password;
    }
    delete_user(user, p){
        admins.forEach(admin=>{
            if(admin.password === p){
                if(!user){
                    console.log(false);
                    return false;
                }
               let indexOfU = users.findIndex(ele=>{
                   return ele.email === user.email;
               });
               if(indexOfU == -1){
                   return false;
               }else{
                   users.splice(indexOfU, 1);
                   console.log(user.name + ' is deleted');
               }
            }
        });
        
    }
}

class Root extends Admin{
    constructor(name, email, id, password){
        super(name, email, id, password);
    }
    removeAdmin(admin){
        admins = admins.filter(a=>{
            return admin.email !== a.email;
        });
    }
}

let user1 = new User('me', 'me@me.com', 1234);
let user2 = new User('Kate', 'kate@kate.com', 2321);

let admin1 = new Admin('T', 't@t.com', 4566, 't.t123');
let admin2 = new Admin('K', 'k@k.com', 4566, 'k.k123');

let root = new Root();
console.log(users);
console.log(admins);


admin1.delete_user(user1, 't.t123');

console.log(users);
console.log(admins);

root.removeAdmin(admin1);

console.log(users);
console.log(admins);