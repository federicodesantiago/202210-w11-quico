import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormPersonal } from '../../../core/types/form.type';
import './home.page.css';

export default function HomePage() {
    const initialFormPersonal: FormPersonal = {
        name: ' ',
        lastName: ' ',
        birthDate: 0,
        gender: ' ',
        email: ' ',
        info: ' ',
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

    return (
        <div className="formPersonal">
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
                <Link to={'/FormAccessP'}>
                    <button>Siguiente</button>
                </Link>
            </div>
        </div>
    );
}
