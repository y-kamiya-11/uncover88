// pages/step2.js

import { useRouter } from 'next/router';
import PasswordProtectedPage from '../components/PasswordProtectedPage';
import StepPage from '../components/StepPage';

export default function Step2() {
  const router = useRouter();
  const { query } = router;
  const password = query.pwd;

  // クエリを含めたURLを作成
  const url = {
    pathname: '/step5',
    query: { pwd: password },
  };

  return (
    <PasswordProtectedPage>
      <StepPage
        title="ステップ4"
        videoSrc="/videos/step4.mp4"
        displayImageSrc="/images/step4.png"
        correctAnswer="きくな"
        nextRoute={url}
        hintMessage="ヒント：電車以外にも着目"
      />
    </PasswordProtectedPage>
  );
}