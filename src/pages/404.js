// pages/404.js
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>

        <div className="flex gap-x-4">
          <Link href="/">Ana Sayfa</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
