var User = /** @class */ (function () {
    function User(username, email) {
        this._username = username;
        this._email = email;
    }
    Object.defineProperty(User.prototype, "username", {
        // Getter cho thuộc tính username
        get: function () {
            return this._username;
        },
        // Setter cho thuộc tính username
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        // Getter cho thuộc tính email
        get: function () {
            return this._email;
        },
        // Setter cho thuộc tính email
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// Tạo một đối tượng User
var user1 = new User("john_doe", "john.doe@example.com");
// In thông tin của đối tượng trước khi thay đổi
console.log("Username:", user1.username);
console.log("Email:", user1.email);
// Thay đổi giá trị thông qua setter
user1.username = "new_john_doe";
user1.email = "new_email@example.com";
// In thông tin của đối tượng sau khi thay đổi
console.log("Updated Username:", user1.username);
console.log("Updated Email:", user1.email);
