import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PasswordProtectedPage = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const queryPassword = router.query.pwd || '';
    const correctPassword = process.env.NEXT_PUBLIC_PAGE_PASSWORD;

    if (queryPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      // router.replace('/unauthorized');
    }
  }, [router.isReady]);

  if (!isAuthenticated) {
    return null; // 認証されるまで何も表示しない
  }

  return <>{children}</>;
};

export default PasswordProtectedPage;