import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Oops, something went wrong</h1>
    <h2>
      Try going <Link href="/"><a>Home</a></Link>
    </h2>
  </div>
);

export default errorPage;
