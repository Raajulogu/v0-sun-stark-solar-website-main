
import WorksPage from '@/components/WorkPage';

export const metadata = {
  title: "Our Solar Projects – 600+ Installations",
  description: "Explore SunStark Solar's completed residential, commercial, and industrial solar projects across Tamil Nadu and Pondicherry.",
  alternates: {
    canonical: "https://www.sunstarksolar.com/works",
  },
  openGraph: {
    title: "Our Solar Projects – 600+ Installations",
    description: "Explore SunStark Solar's completed residential, commercial, and industrial solar projects across Tamil Nadu and Pondicherry.",
    url: "https://www.sunstarksolar.com/works",
  },
};


export default async function Page() {
  return (
    <>
      <WorksPage />
    </>
  );
};
