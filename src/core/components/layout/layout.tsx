import HomePage from '../../../features/home/pages/home.page';
// import { MenuItems } from '../../types/menu.item';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <form className="form_Personal">
                    <HomePage></HomePage>
                </form>
            </main>
            <Footer></Footer>
        </>
    );
}
