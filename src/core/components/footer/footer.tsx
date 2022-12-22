import './footer.css';
export function Footer() {
    return (
        <footer aria-label="footer">
            <address>Quico</address>
            <p>{new Date().toLocaleDateString()}</p>
        </footer>
    );
}
