export type formPersonalType = {
    name: string;
    lastName: string;
    birthDate: number;
    gender: string;
    email: string;
    info: string;
    userName: string;
    password: string;
    rePassword: string;
    accout: string;
};

export class FormPersonal implements formPersonalType {
    constructor(
        public name: string,
        public lastName: string,
        public birthDate: number,
        public gender: string,
        public email: string,
        public info: string,
        public userName: string,
        public password: string,
        public rePassword: string,
        public accout: string
    ) {
        this.name = ' ';
        this.lastName = ' ';
        this.birthDate = 0;
        this.gender = ' ';
        this.email = ' ';
        this.info = ' ';
        this.userName = ' ';
        this.password = ' ';
        this.rePassword = ' ';
        this.accout = ' ';
    }
}
