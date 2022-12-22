export type formPersonalType = {
    name: string;
    lastName: string;
    birthDate: number;
    gender: string;
    email: string;
    info: string;
};

export class FormPersonal implements formPersonalType {
    constructor(
        public name: string,
        public lastName: string,
        public birthDate: number,
        public gender: string,
        public email: string,
        public info: string
    ) {
        this.name = ' ';
        this.lastName = ' ';
        this.birthDate = 0;
        this.gender = ' ';
        this.email = ' ';
        this.info = ' ';
    }
}

export type formAccessType = {
    userName: string;
    password: string;
    rePassword: string;
    accout: string;
};

export class FormPersonalAccess implements formAccessType {
    constructor(
        public userName: string,
        public password: string,
        public rePassword: string,
        public accout: string
    ) {
        this.userName = ' ';
        this.password = ' ';
        this.rePassword = ' ';
        this.accout = ' ';
    }
}
