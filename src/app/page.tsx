import { HomePage } from '@/components/pages/HomePage';
import { defaultContent } from '@/lib/default-content';

export default function Home() {
  return <HomePage content={defaultContent} language="en" techletterPosts={[]} isLoadingTechletter={false} />;
}
