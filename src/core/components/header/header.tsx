import './header.css';

export function Header() {
    const title = 'Mi formulario';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
        </header>
    );
}
