import './second.page.css';
import { FormPersonalAccess } from '../../core/types/form.type';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormAccessP() {
    const initialFormAccess: FormPersonalAccess = {
        userName: ' ',
        password: ' ',
        rePassword: ' ',
        accout: ' ',
    };

    const [formAccess, setFormAccess] = useState(initialFormAccess);

    const handleForm = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        setFormAccess({ ...formAccess, [element.name]: element.value });
        console.log('hola: ', formAccess);
    };

    return (
        <>
            <div>
                <label htmlFor="userName">Name</label>
                <input
                    className="TextBox"
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Escribe tu nombre de usuario"
                    value={initialFormAccess.userName}
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
                    value={initialFormAccess.password}
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
                    value={initialFormAccess.rePassword}
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
            <div className="buttons">
                <div>
                    <Link to={'/HomePage'}>
                        <button>Atrás</button>
                    </Link>
                </div>
                <div>
                    <Link to={'/ThirdForm'}>
                        <button>Siguiente</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
