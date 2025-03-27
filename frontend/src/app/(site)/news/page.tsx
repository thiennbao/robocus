import NewsArchive from "@/components/partials/newsArchive";
import PageWall from "@/components/partials/pageWall";
import Spacer from "@/components/partials/spacer";

const NewsPage = async ({ searchParams }: { searchParams: Promise<{ search: string; take: string }> }) => {
  return (
    <main>
      <PageWall title="TIN TỨC" image="https://robocus.org/images/slider-image/test-02.jpg" />
      <Spacer count={6} />
      <NewsArchive searchParams={(await searchParams)} />
      <Spacer count={6} />
    </main>
  );
};

export default NewsPage;
