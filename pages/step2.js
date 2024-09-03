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
    pathname: '/step3',
    query: { pwd: password },
  };

  return (
    <PasswordProtectedPage>
      <StepPage
        title="ステップ2"
        videoSrc="/videos/step2.mp4"
        displayImageSrc="/images/step2.png"
        correctAnswer="やさか"
        nextRoute={url}
        hintMessage="ヒント：電車以外にも着目"
      />
    </PasswordProtectedPage>
  );
}