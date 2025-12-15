import type { Story } from "@/shared/types";

interface TopWeeklyStoriesProps {
  stories?: Story[];
}

const TopWeeklyStories = ({ stories }: TopWeeklyStoriesProps) => {
  // Mock data for demonstration
  const mockStories: Story[] = stories || [
    {
      id: "1",
      title: "Danh Sách Đường Cái Cầu Sinh: Ta...",
      author: "Hauvandz1993",
      coverImage: "/mock-top-1.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 725,
      views: 300000,
      rating: 4.8,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
    },
    {
      id: "2",
      title: "Cầu Tại Vô Đạo Thế Giới Thành...",
      author: "Sweeti3",
      coverImage: "/mock-top-2.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 705,
      views: 250000,
      rating: 4.7,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-02-01",
    },
    {
      id: "3",
      title: "Ta Rất Muốn Trúng Sinh",
      author: "LycheeNguyen",
      coverImage: "/mock-top-3.jpg",
      description: "Top truyện tuần",
      genres: ["Đô thị"],
      chapters: 1079,
      views: 120000,
      rating: 4.6,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2023-01-01",
    },
    {
      id: "4",
      title: "Bạch Cốt Đại Thánh",
      author: "LinhNhiEpx",
      coverImage: "/mock-top-4.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 3852,
      views: 108000,
      rating: 4.5,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2022-01-01",
    },
    {
      id: "5",
      title: "Võ Luyện Đỉnh Phong",
      author: "Author5",
      coverImage: "/mock-top-5.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 2100,
      views: 95000,
      rating: 4.4,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2022-06-01",
    },
    {
      id: "6",
      title: "Tu Tiên Vô Song",
      author: "Author6",
      coverImage: "/mock-top-6.jpg",
      description: "Top truyện tuần",
      genres: ["Tiên hiệp"],
      chapters: 1800,
      views: 88000,
      rating: 4.3,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2022-08-01",
    },
    {
      id: "7",
      title: "Thiên Hạ Đệ Nhất",
      author: "Author7",
      coverImage: "/mock-top-7.jpg",
      description: "Top truyện tuần",
      genres: ["Võ hiệp"],
      chapters: 1500,
      views: 82000,
      rating: 4.2,
      status: "ongoing",
      updatedAt: "2025-12-13",
      createdAt: "2022-09-01",
    },
    {
      id: "8",
      title: "Đại Đường Song Long Truyện",
      author: "Author8",
      coverImage: "/mock-top-8.jpg",
      description: "Top truyện tuần",
      genres: ["Võ hiệp"],
      chapters: 1300,
      views: 75000,
      rating: 4.1,
      status: "ongoing",
      updatedAt: "2025-12-13",
      createdAt: "2022-10-01",
    },
    {
      id: "9",
      title: "Kiếm Đạo Độc Tôn",
      author: "Author9",
      coverImage: "/mock-top-9.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 1200,
      views: 68000,
      rating: 4.0,
      status: "ongoing",
      updatedAt: "2025-12-13",
      createdAt: "2022-11-01",
    },
    {
      id: "10",
      title: "Thần Mộ",
      author: "Author10",
      coverImage: "/mock-top-10.jpg",
      description: "Top truyện tuần",
      genres: ["Huyền huyễn"],
      chapters: 1100,
      views: 62000,
      rating: 4.0,
      status: "ongoing",
      updatedAt: "2025-12-12",
      createdAt: "2022-12-01",
    },
  ];

  // Chia danh sách thành 2 cột: 5 truyện mỗi cột
  const leftStories = mockStories.slice(0, 5);
  const rightStories = mockStories.slice(5, 10);

  const renderStoryItem = (story: Story, index: number) => (
    <div
      key={story.id}
      className="hover:bg-gray-50 p-3 rounded transition-colors cursor-pointer border-b last:border-b-0"
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-20 h-28 bg-gradient-to-br from-gray-200 to-gray-300 rounded overflow-hidden shadow-sm relative">
            {index < 3 && (
              <div
                className={`absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-l-transparent ${
                  index === 0
                    ? "border-t-red-500"
                    : index === 1
                      ? "border-t-yellow-500"
                      : "border-t-orange-500"
                }`}
              >
                <span className="absolute -top-7 right-0.5 text-white text-xs font-bold">
                  TOP
                </span>
              </div>
            )}
            <div className="w-full h-full flex items-center justify-center px-2">
              <span className="text-xs text-gray-500 text-center">
                {story.title.substring(0, 5)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm line-clamp-2 hover:text-blue-600 transition-colors mb-1">
            {story.title}
          </h3>
          <p className="text-xs text-gray-600 mb-2">{story.author}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="text-blue-600 font-medium">
              {story.chapters} Chương
            </span>
            <span className="text-gray-500">
              {(story.views / 1000).toFixed(0)} Đề cử/Tuần
            </span>
          </div>
          <div className="mt-2">
            <blockquote className="text-xs text-gray-600 italic line-clamp-2 border-l-2 border-gray-300 pl-2">
              {story.description}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 border-b pb-2 flex items-center">
        <span>Top Ngọc Phiếu (tuần)</span>
      </h2>

      {/* Grid 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cột trái - 5 truyện đầu */}
        <div className="space-y-4">
          {leftStories.map((story, index) => renderStoryItem(story, index))}
        </div>

        {/* Cột phải - 5 truyện tiếp theo */}
        <div className="space-y-4">
          {rightStories.map((story, index) =>
            renderStoryItem(story, index + 5),
          )}
        </div>
      </div>

      <button className="w-full mt-4 py-2 text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium text-sm">
        Xem thêm →
      </button>
    </div>
  );
};

export default TopWeeklyStories;
