export class NuevoUsuario {
    nombre!: string;
    userName!: string;
    email!: string;
    password!: string;
    authorities!: string[];

    constructor(nombre: string, userName: string, email: string, password: string){
        this.nombre = nombre;
        this.userName= userName;
        this.email = email;
        this.password = password;
    }
}
