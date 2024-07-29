import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';



function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
