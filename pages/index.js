/* eslint-disable no-console */
import { ArrowLeftIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../components/Inputs/Button';
import ButtonGroup from '../components/Inputs/ButtonGroup/ButtonGroup';
import Checkbox from '../components/Inputs/Checkbox';
import Fab from '../components/Inputs/Fab';
import Radio from '../components/Inputs/Radio';
import Link from '../components/Navigation/Link';
import NavigationLink from '../components/Navigation/NavigationLink';
import DarkModeSwitcher from '../components/Theme/DarkModeSwitcher';
import Backdrop from '../components/Utils/Backdrop';
import ClickAwayListener from '../components/Utils/ClickAwayListener';
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

  const [open3, setOpen3] = useState(false);

  const handleToggle3 = () => {
    setOpen3((prevState) => !prevState);
  };

  const handleRowChange = (e) => {
    console.log(e.target.value);
  };

  const handleColumnChange = (e) => {
    console.log(e.target.value);
  };
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
        <Button variant="contained" color="warning" />
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
        <br />
        <br />
        <br />
        <br />
        <Checkbox checked={open3} onClick={handleToggle3}>
          this is my first time
        </Checkbox>
        <br />
        <br />
        <br />
        <div onChange={handleRowChange}>
          <Radio value="row" name="row" alignItems="row">
            <div>Row</div>
            <div>helper text</div>
          </Radio>
          <br />
          <Radio value="row-start" name="row" alignItems="row-start">
            <div>Row Start</div>
            <div>helper text</div>
          </Radio>
          <br />
          <Radio value="row-reverse" name="row" alignItems="row-reverse">
            <div>Row Reverse</div>
            <div>helper text</div>
          </Radio>
          <br />
          <Radio
            value="row-reverse-start"
            name="row"
            alignItems="row-reverse-start"
          >
            <div>Row reverse Start</div>
            <div>helper text</div>
          </Radio>
          <br />
        </div>
        <div onChange={handleColumnChange}>
          <Radio value="column" name="column" alignItems="column">
            <div>Column</div>
            <div>helper text</div>
          </Radio>
          <br />

          <Radio value="column-start" name="column" alignItems="column-start">
            <div>Column Start</div>
            <div>helper text</div>
          </Radio>
          <br />

          <Radio
            value="column-reverse"
            name="column"
            alignItems="column-reverse"
          >
            <div>Column Reverse</div>
            <div>helper text</div>
          </Radio>
          <br />
          <Radio
            value="column-reverse-start"
            name="column"
            alignItems="column-reverse-start"
          >
            <div>Column Reverse Start</div>
            <div>helper text</div>
          </Radio>
        </div>

        <br />
        <br />
        <br />

        <br />
        <Fab size="large" color="danger" icon={<ListBulletIcon />}>
          Fab content
        </Fab>

        <br />
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
