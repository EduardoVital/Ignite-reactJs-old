import Link from 'next/link';
import styles from './header.module.scss';
import commonStyles from '../../styles/common.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={commonStyles.container}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/Vector.svg" alt="logo" />
            <h1>
              spacetraveling<span>.</span>
            </h1>
          </a>
        </Link>
      </div>
    </header>
  );
}
