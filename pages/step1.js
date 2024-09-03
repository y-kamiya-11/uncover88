// pages/step1.js

import { useRouter } from 'next/router';
import PasswordProtectedPage from '../components/PasswordProtectedPage';
import StepPage from '../components/StepPage';

export default function Step1() {
  const router = useRouter();
  const { query } = router;
  const password = query.pwd;

  // クエリを含めたURLを作成
  const url = {
    pathname: '/step2',
    query: { pwd: password },
  };

  return (
    <PasswordProtectedPage>
      <StepPage
        title="ステップ1"
        videoSrc="/videos/step1.mp4"
        displayImageSrc="/images/step1.png"
        correctAnswer="たばた"
        nextRoute={url}
        hintMessage="ヒント：電車以外にも着目"
      />
    </PasswordProtectedPage>
  );
}