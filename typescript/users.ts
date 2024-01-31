class Users {
    private _username: string;
    private _email: string;

    constructor(username: string, email: string) {
        this._username = username;
        this._email = email;
    }

    // Getter cho thuộc tính username
    public get username(): string {
        return this._username;
    }

    // Setter cho thuộc tính username
    public set username(value: string) {
        this._username = value;
    }

    // Getter cho thuộc tính email
    public get email(): string {
        return this._email;
    }

    // Setter cho thuộc tính email
    public set email(value: string) {
        this._email = value;
    }
}

// Tạo một đối tượng User
const users1: Users = new Users("john_doe", "john.doe@example.com");

// In thông tin của đối tượng trước khi thay đổi
console.log("Username:", user1.username);
console.log("Email:", user1.email);

// Thay đổi giá trị thông qua setter
user1.username = "new_john_doe";
user1.email = "new_email@example.com";

// In thông tin của đối tượng sau khi thay đổi
console.log("Updated Username:", user1.username);
console.log("Updated Email:", user1.email);
