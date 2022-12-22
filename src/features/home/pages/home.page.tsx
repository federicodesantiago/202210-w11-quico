import { SyntheticEvent, useEffect, useState } from 'react';
import { FormPersonal } from '../../../core/types/form.type';
import './home.page.css';
// import { Link } from 'react-router-dom';

export default function HomePage() {
    const initialFormPersonal: FormPersonal = {
        name: ' ',
        lastName: ' ',
        birthDate: 0,
        gender: ' ',
        email: ' ',
        info: ' ',
        userName: ' ',
        password: ' ',
        rePassword: ' ',
        accout: ' ',
    };

    const [count, setCount] = useState(0);

    const handleCount = (value: number) => {
        setCount(count + value);
    };

    const [formPersonal, setFormPersonal] = useState(initialFormPersonal);

    const [yearsOld, setYearsOld] = useState(0);

    useEffect(() => {
        if (formPersonal.birthDate)
            setYearsOld(yearCalculation(formPersonal.birthDate));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formPersonal.birthDate]);

    const yearCalculation = (birthDate: number) => {
        const birthGivenDate = new Date(formPersonal.birthDate);
        const today = new Date();
        const yearsOld = today.getFullYear() - birthGivenDate.getFullYear();
        console.log('years old: ', yearsOld);
        return yearsOld;
    };

    const handleForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        setFormPersonal({ ...formPersonal, [element.name]: element.value });
        console.log('hola: ', formPersonal);
    };

    const formPersonalP = () => {
        const template = (
            <>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Escribe tu nombre"
                        value={formPersonal.name}
                        onInput={handleForm}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formPersonal.lastName}
                        onInput={handleForm}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div className="birthDateDiv">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input
                        className="dataBox"
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        value={formPersonal.birthDate}
                        onInput={handleForm}
                    />
                    <p>{yearsOld ? `Tienes: ${yearsOld} años` : ' '}</p>
                </div>
                <div className="radioButtons">
                    <label htmlFor="gender">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Male'}
                        value={'Male'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Female'}
                        value={'Female'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Other</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Other'}
                        value={'Other'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Prefer not to mention</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Prefer'}
                        value={'Prefer not to mention'}
                        onChange={handleForm}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="email"
                        id="email"
                        value={formPersonal.email}
                        onInput={handleForm}
                        placeholder="Escribe tu mail"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={() => {
                            handleCount(+1);
                        }}
                    >
                        Siguiente
                    </button>
                </div>
            </>
        );

        return template;
    };

    const formAccessP = () => {
        const template = (
            <>
                <div>
                    <label htmlFor="userName">Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Escribe tu nombre de usuario"
                        value={formPersonal.userName}
                        onInput={handleForm}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Last Name</label>
                    <input
                        className="TextBox"
                        type="password"
                        name="password"
                        id="password"
                        value={formPersonal.password}
                        onInput={handleForm}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="rePassword">Birth Date</label>
                    <input
                        className="TextBox"
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        value={formPersonal.rePassword}
                        onInput={handleForm}
                    />
                </div>
                <div className="selectButton">
                    <label htmlFor="account-select">Personal</label>
                    <select name="account" id="acount-select">
                        <option value=""> Please select an account</option>
                        <option value="Personal"> Personal</option>
                        <option value="Pro"> Pro</option>
                        <option value="Business"> Business</option>
                    </select>
                </div>
                <div>
                    <button type="submit" onClick={() => handleCount(+1)}>
                        Siguiente
                    </button>
                </div>
                <div>
                    <button type="submit" onClick={() => handleCount(-1)}>
                        Atrás
                    </button>
                </div>
            </>
        );
        return template;
    };

    const formConfirmationP = () => {
        const template = (
            <>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Escribe tu nombre"
                        value={formPersonal.name}
                        onInput={handleForm}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formPersonal.lastName}
                        onInput={handleForm}
                        placeholder="Responsable de la tarea"
                    />
                </div>
                <div>
                    <label htmlFor="birthDate">Birth Date</label>
                    <input
                        className="dataBox"
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        value={formPersonal.birthDate}
                        onInput={handleForm}
                    />
                </div>
                <div className="radioButtons">
                    <label htmlFor="gender">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Male'}
                        value={'Male'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Female'}
                        value={'Female'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Other</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Other'}
                        value={'Other'}
                        onChange={handleForm}
                    />

                    <label htmlFor="gender">Prefer not to mention</label>
                    <input
                        type="radio"
                        name="gender"
                        id="gender"
                        checked={formPersonal.gender === 'Prefer'}
                        value={'Prefer not to mention'}
                        onChange={handleForm}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="email"
                        id="email"
                        value={formPersonal.email}
                        onInput={handleForm}
                        placeholder="Escribe tu mail"
                    />
                </div>
                <div>
                    <button type="submit" onClick={() => handleCount(+1)}>
                        Siguiente
                    </button>
                </div>
                <div>
                    <button type="submit" onClick={() => handleCount(-1)}>
                        Atrás
                    </button>
                </div>
            </>
        );

        return template;
    };

    if (count === 1) return formAccessP();
    if (count === 2) return formConfirmationP();
    return formPersonalP();
}
