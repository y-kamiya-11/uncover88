// pages/step3.js

import { useRouter } from 'next/router';
import PasswordProtectedPage from '../components/PasswordProtectedPage';
import StepPage from '../components/StepPage';

export default function Step5() {
  const router = useRouter();
  const { query } = router;
  const password = query.pwd;

  // クエリを含めたURLを作成
  const url = {
    pathname: '/ending',
    query: { pwd: password },
  };

  return (
    <PasswordProtectedPage>
      <StepPage
        title="ステップ5"
        videoSrc="/videos/step5.mp4"
        displayImageSrc="/images/step5.png"
        correctAnswer="やまがた"
        nextRoute={url}
        hintMessage="ヒント：電車以外にも着目"
      />
    </PasswordProtectedPage>
  );
}