import { Link } from 'react-router-dom';
import './third.page.css';

export default function ThirdForm() {
    return (
        <div className="ThirdForm">
            <h2>Estos son los datos que has introducido:</h2>
            <ul>
                {/* <li>Nameº: {FormPersonal.}</li>
                 // <li>Last name: {userData.lastName}</li>
                    // <li>Birth Date: {userData.birthDate}</li>
                    // <li>email: {userData.email}</li>
                    // <li>Gender: {userData.gender}</li>
                    // <li>Account: {userData.accountType}</li>
                    // <li>Username: {userData.username}</li>
                    // <li>Password: {userData.username}</li> */}
            </ul>
            <div>
                <Link to={'/FormAccessP'}>
                    <button>Atrás</button>
                </Link>
            </div>
        </div>
    );
}
