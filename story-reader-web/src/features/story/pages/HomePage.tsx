import FeaturedStories from "../components/FeaturedStories";
import LatestStories from "../components/LatestStories";
import TopWeeklyStories from "../components/TopWeeklyStories";
import NewlyCompletedStories from "../components/NewlyCompletedStories";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Banner thông báo */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
          <p className="text-sm">
            <span className="font-semibold text-red-600">
              Website của Đức phiên bản demo
            </span>
            .
          </p>
        </div>

        {/* Truyện đề xuất - phía trên */}
        <FeaturedStories />

        {/* Layout 2 cột: Truyện mới (trái 3/12) và Top tuần (phải 9/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Cột trái - Truyện mới nhất (3 cột) */}
          <div className="lg:col-span-3">
            <LatestStories />
          </div>

          {/* Cột phải - Top truyện trong tuần (9 cột) */}
          <div className="lg:col-span-9">
            <TopWeeklyStories />
          </div>
        </div>

        {/* Truyện mới hoàn thành - phía dưới cùng */}
        <NewlyCompletedStories />
      </div>
    </div>
  );
};

export default HomePage;
