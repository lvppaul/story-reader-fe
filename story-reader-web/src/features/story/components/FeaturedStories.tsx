import type { Story } from "@/shared/types";

interface FeaturedStoriesProps {
  stories?: Story[];
}

const FeaturedStories = ({ stories }: FeaturedStoriesProps) => {
  // Mock data for demonstration
  const mockStories: Story[] = stories || [
    {
      id: "1",
      title: "Đại Sinh Ý Nhân",
      author: "Tác giả 1",
      coverImage: "/mock-cover-1.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Huyền huyễn"],
      chapters: 500,
      views: 1000000,
      rating: 4.5,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "2",
      title: "Tân Thế: Ta Có Thể Học Kỹ Năng",
      author: "Tác giả 2",
      coverImage: "/mock-cover-2.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Huyền huyễn"],
      chapters: 725,
      views: 800000,
      rating: 4.8,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "3",
      title: "Ảnh Đế Bình Hoá",
      author: "Tác giả 3",
      coverImage: "/mock-cover-3.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Đô thị"],
      chapters: 300,
      views: 500000,
      rating: 4.3,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
    },
    {
      id: "4",
      title: "Tân Thế Đại Hoang",
      author: "Tác giả 4",
      coverImage: "/mock-cover-4.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Huyền huyễn"],
      chapters: 400,
      views: 600000,
      rating: 4.6,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "5",
      title: "Cầu Thánh Thần Quân",
      author: "Tác giả 5",
      coverImage: "/mock-cover-5.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Huyền huyễn"],
      chapters: 350,
      views: 450000,
      rating: 4.4,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "6",
      title: "Thái Bình Lệnh",
      author: "Tác giả 6",
      coverImage: "/mock-cover-6.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Cổ đại"],
      chapters: 280,
      views: 700000,
      rating: 4.7,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "7",
      title: "Văn Định Quan Sơn Hải",
      author: "Tác giả 7",
      coverImage: "/mock-cover-7.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Cổ đại"],
      chapters: 320,
      views: 380000,
      rating: 4.2,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
    },
    {
      id: "8",
      title: "Ta Có Thể Nhìn Thấy Vận Vật",
      author: "Tác giả 8",
      coverImage: "/mock-cover-8.jpg",
      description: "Mô tả truyện đề xuất",
      genres: ["Huyền huyễn"],
      chapters: 420,
      views: 520000,
      rating: 4.5,
      status: "ongoing",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span>Contributor đề xuất</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {mockStories.map((story) => (
          <div key={story.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              {(story.isFull || story.isVip) && (
                <div className="absolute top-2 left-2 z-10">
                  {story.isFull && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                      FULL
                    </span>
                  )}
                  {story.isVip && (
                    <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded ml-1">
                      VIP
                    </span>
                  )}
                </div>
              )}
              <div className="aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-sm text-center px-2">
                  {story.title}
                </span>
              </div>
            </div>
            <h3 className="mt-2 text-sm font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
              {story.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedStories;
