import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';

const indexPage = ({ appName }) => (
  <div>
    <h1>The Main Page {appName}</h1>
    <p>
      Go to
      <Link href="/auth">
        <a>Auth</a>
      </Link>

      <button type="button" onClick={() => Router.push('/auth')}>To Auth</button>
    </p>
  </div>
);

indexPage.getInitialProps = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ appName: 'My App' });
    }, 1000);
  });

  return promise;
};

indexPage.propTypes = {
  appName: PropTypes.string,
};

export default indexPage;
