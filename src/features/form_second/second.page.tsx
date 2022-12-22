import './second.page.css';
export default function SecondForm() {
    return (
        <>
            <h2>Second form page</h2>
            <form className="form_Access">
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input
                        className="TextBox"
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Escribe tu nombre de usuario"
                        // value={formData.title}
                        // onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        className="TextBox"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Escribe tu password"
                        // value={formData.title}
                        // onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rePassword">Password again</label>
                    <input
                        className="TextBox"
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        placeholder="Re-escribe tu password"
                        // value={formData.title}
                        // onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="account">Account Type</label>
                    <select className="TextBox" name="account" id="account">
                        <option value="">Select you account</option>
                        <option value="personal">Personal</option>
                        <option value="pro">Pro</option>
                        <option value="business">Business</option>
                    </select>
                </div>
            </form>
            <div>
                <button type="submit">Siguiente</button>
            </div>
        </>
    );
}
