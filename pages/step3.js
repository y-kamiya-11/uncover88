// pages/step3.js

import { useRouter } from 'next/router';
import PasswordProtectedPage from '../components/PasswordProtectedPage';
import StepPage from '../components/StepPage';

export default function Step3() {
  const router = useRouter();
  const { query } = router;
  const password = query.pwd;

  // クエリを含めたURLを作成
  const url = {
    pathname: '/step4',
    query: { pwd: password },
  };

  return (
    <PasswordProtectedPage>
      <StepPage
        title="ステップ3"
        videoSrc="/videos/step3.mp4"
        displayImageSrc="/images/step3.png"
        correctAnswer="さくらじょうすい"
        nextRoute={url}
        hintMessage="ヒント：電車以外にも着目"
      />
    </PasswordProtectedPage>
  );
}