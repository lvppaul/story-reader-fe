import type { Story } from "@/shared/types";

interface LatestStoriesProps {
  stories?: Story[];
}

const LatestStories = ({ stories }: LatestStoriesProps) => {
  // Mock data for demonstration
  const mockStories: Story[] = stories || [
    {
      id: "1",
      title: "Hoạt Nhân Thâm Xứ",
      author: "hivit",
      coverImage: "/mock-latest-1.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Huyền huyễn"],
      chapters: 150,
      views: 50000,
      rating: 4.3,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2025-12-01",
    },
    {
      id: "2",
      title: "Mạo Bài Đại Anh Hùng",
      author: "Nhân Mã",
      coverImage: "/mock-latest-2.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Huyền huyễn"],
      chapters: 85,
      views: 30000,
      rating: 4.1,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2025-11-20",
    },
    {
      id: "3",
      title: "Vô Hiệp: Bắt Đầu Long Tượng",
      author: "thantruongg",
      coverImage: "/mock-latest-3.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Võ hiệp"],
      chapters: 120,
      views: 45000,
      rating: 4.4,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2025-11-15",
    },
    {
      id: "4",
      title: "Thế Gian Bach Xà Tiên",
      author: "Nhân Mã",
      coverImage: "/mock-latest-4.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Tiên hiệp"],
      chapters: 95,
      views: 35000,
      rating: 4.2,
      status: "ongoing",
      updatedAt: "2025-12-13",
      createdAt: "2025-11-25",
    },
    {
      id: "5",
      title: "Thế Giới Game Xâm Lấn, Cướp",
      author: "Nhân Mã",
      coverImage: "/mock-latest-5.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Game"],
      chapters: 75,
      views: 28000,
      rating: 4.0,
      status: "ongoing",
      updatedAt: "2025-12-13",
      createdAt: "2025-12-05",
    },
    {
      id: "6",
      title: "Cải Thế",
      author: "Athox",
      coverImage: "/mock-latest-6.jpg",
      description: "Truyện mới cập nhật",
      genres: ["Huyền huyễn"],
      chapters: 60,
      views: 25000,
      rating: 4.1,
      status: "ongoing",
      updatedAt: "2025-12-12",
      createdAt: "2025-12-01",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Truyện mới nhất</h2>
      <div className="space-y-4">
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="flex gap-3 hover:bg-gray-50 p-2 rounded transition-colors cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs text-gray-500 text-center px-1">
                    {story.title.substring(0, 3)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm line-clamp-2 hover:text-blue-600 transition-colors">
                {story.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">{story.author}</p>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <span>{story.chapters} chương</span>
                <span>•</span>
                <span>{(story.views / 1000).toFixed(0)}K lượt đọc</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium text-sm">
        Xem thêm →
      </button>
    </div>
  );
};

export default LatestStories;
