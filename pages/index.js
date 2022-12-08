import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Inputs/Button';
import ButtonGroup from '../components/Inputs/ButtonGroup/ButtonGroup';
import Link from '../components/Navigation/Link';
import NavigationLink from '../components/Navigation/NavigationLink';
import DarkModeSwitcher from '../components/Theme/DarkModeSwitcher';
import Backdrop from '../components/Utils/Backdrop';
import ClickAwayListener from '../components/Utils/ClickAwaiyListener';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <main className={styles.main}>
        <Button
          variant="contained"
          color="secondary"
          href="www.google.com"
          disabled={true}
          startIcon={<ArrowLeftIcon />}
        />
        <br />
        <Button endIcon={<ArrowLeftIcon />} />
        <br />
        <Button variant="outlined" />
        <br />
        <Button variant="text" />
        <br />
        <Button disabled={true} />
        <br />
        <Button disabled={true} variant="outlined" />
        <br />
        <Button disabled={true} variant="text" />

        <Button size="small" />
        <br />
        <Button size="medium" variant="outlined" />
        <br />
        <Button size="medium" variant="text" />
        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Button size="small" />
        <br />
        <Button size="small" variant="outlined" />
        <br />
        <Button size="small" variant="text" />

        <br />
        <br />
        <br />

        <NavigationLink startIcon={<ArrowLeftIcon />} href="/">
          Test link
        </NavigationLink>
        <NavigationLink href="/asd" color="danger">
          Test link
        </NavigationLink>
        <br />
        <br />
        <br />
        <Link href="https://www.google.com" target="_blank" />

        <ClickAwayListener
          onClickAway={() => setOpen2(false)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button onClick={() => setOpen2((prevState) => !prevState)}>
            Toggle
          </Button>
          {open2 && <div>This is inside the clickAway</div>}
        </ClickAwayListener>

        <ButtonGroup />
        <Button onClick={handleToggle}>Show backdrop</Button>
        <Backdrop open={open} onClick={handleClose}>
          This is the children of the backdrop
        </Backdrop>
        <h1 className={styles.title}>
          Welcome to <a href="https://https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <DarkModeSwitcher />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
