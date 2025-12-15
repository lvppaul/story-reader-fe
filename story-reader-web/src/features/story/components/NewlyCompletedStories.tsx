import type { Story } from "@/shared/types";

interface NewlyCompletedStoriesProps {
  stories?: Story[];
}

const NewlyCompletedStories = ({ stories }: NewlyCompletedStoriesProps) => {
  // Mock data for demonstration
  const mockStories: Story[] = stories || [
    {
      id: "1",
      title: "Thế Gian Bạch Xà Tiên",
      author: "Nhân Mã",
      coverImage: "/mock-completed-1.jpg",
      description:
        "Thanh Xà Tố trần tiên hạ, Bạch Xà Tiên hiện thế gian. Có sư tán nha, chính là vẻ một Đầu Bạch Xà xuyên qua tuệ nguyệt. Đá sớm giác ngộ, dù sớm chiều quý tích cũng...",
      genres: ["Huyền huyễn"],
      chapters: 333,
      views: 1089,
      rating: 4.5,
      status: "completed",
      updatedAt: "2025-12-14",
      createdAt: "2024-01-01",
      isFull: true,
    },
    {
      id: "2",
      title: "Ta Tại Quỷ Đèm Trảm Thần Ma",
      author: "NguyenThanhLuan1995",
      coverImage: "/mock-completed-2.jpg",
      description:
        "Bạn ngày là nhân thế, đêm tối là ám gian yểu nghịch hoành hành, ta mà vô tân, trật tự sụp đổ! Ta có một đao, phương miếng diệu thế, đêm mang bạn ngày. Thần ma yêu tà...",
      genres: ["Huyền huyễn"],
      chapters: 2290,
      views: 1442,
      rating: 4.6,
      status: "completed",
      updatedAt: "2025-12-14",
      createdAt: "2023-06-01",
      isFull: true,
    },
    {
      id: "3",
      title: "Tu Tiên Ta Có Thể Xuyên Qua...",
      author: "whistle",
      coverImage: "/mock-completed-3.jpg",
      description:
        "Chư thiên vạn giới, ức vạn chúng sinh bước lên con đường tu hành, điều cầu mong duy nhất chính là sư siêu thoát, đạt đến cảnh giới vô cầu vô thức!",
      genres: ["Tiên hiệp"],
      chapters: 596,
      views: 4260,
      rating: 4.7,
      status: "completed",
      updatedAt: "2025-12-13",
      createdAt: "2023-08-01",
      isFull: true,
    },
    {
      id: "4",
      title: "Trọng Sinh Mạt Thế Giang Tiểu",
      author: "Hoàng Hỉ Bình",
      coverImage: "/mock-completed-4.jpg",
      description:
        "Trọng Sinh Mạt Thế Giang Tiểu' kể về Giang Tiểu, một cô gái sống ngay tận thế giới bằng giá khác tân thế gian. Có trong một thế giới bừng...",
      genres: ["Huyền huyễn"],
      chapters: 490,
      views: 1089,
      rating: 4.4,
      status: "completed",
      updatedAt: "2025-12-13",
      createdAt: "2023-09-01",
      isFull: true,
    },
    {
      id: "5",
      title: "Thiên Long Bát Bộ Chi Ma...",
      author: "thantruongg",
      coverImage: "/mock-completed-5.jpg",
      description:
        "Thiên Long Bát Bộ Chi Ma Lư tại là một câu chuyện hấp dẫn về Thiên Long Bát Bộ chủ, chỉ tâm loại hạo hố phấp gồm thiên thần, rồng, xà... Theo Phấp Hoa Kinh ghi chép: 'Thiên chúng, Long chúng, Da...",
      genres: ["Võ hiệp"],
      chapters: 1030,
      views: 626,
      rating: 4.3,
      status: "completed",
      updatedAt: "2025-12-12",
      createdAt: "2023-03-01",
      isFull: true,
    },
    {
      id: "6",
      title: "Vô Hạn Thế Giới Game Arcade",
      author: "LinhNhiEpx",
      coverImage: "/mock-completed-6.jpg",
      description:
        "Vô sổ trò chơi Arcade (thùng) ngày xưa nay xuất hiện trở lại dưới dạng những phố bản đặc biệt. Những Máo Hiểm Giả phiêu lưu trong đó, dinh sát mỗi chuyển đ...",
      genres: ["Game"],
      chapters: 843,
      views: 1796,
      rating: 4.5,
      status: "completed",
      updatedAt: "2025-12-12",
      createdAt: "2023-05-01",
      isFull: true,
    },
    {
      id: "7",
      title: "Trọng Sinh Thương Ngày Tu...",
      author: "helloemdx",
      coverImage: "/mock-completed-7.jpg",
      description:
        "Chấn Quán Nguyên Anh cảnh đỏ kiếp thật bại, trở lại thời học sinh. Năm 2013, đây là niên đại mà mạng internet mạnh mẽ bùng nổ, còn lũ thời đại cuồn cuộn quật qua đời...",
      genres: ["Đô thị"],
      chapters: 1050,
      views: 5802,
      rating: 4.8,
      status: "completed",
      updatedAt: "2025-12-11",
      createdAt: "2023-02-01",
      isFull: true,
    },
    {
      id: "8",
      title: "Cái Này Thật Không Phải Máy...",
      author: "NguyenThanhLuan1995",
      coverImage: "/mock-completed-8.jpg",
      description:
        "Vừa mở mắt ra, Lý Minh đã thấy mình bị cuốn vào thế giới hỗn loạn giữa các vỉ sao. Ở đây một hỏi người vợ cũ đại đẩu hủy pháp ứng chấc súng sần, đôi theo vừ trụ vối ảnh mật thể khát...",
      genres: ["Khoa huyễn"],
      chapters: 2098,
      views: 1440,
      rating: 4.6,
      status: "completed",
      updatedAt: "2025-12-11",
      createdAt: "2023-04-01",
      isFull: true,
    },
    {
      id: "9",
      title: "Tích Trữ Hàng Hóa Phiêu Lưu...",
      author: "YooAhin",
      coverImage: "/mock-completed-9.jpg",
      description:
        "Báo táp, sóng thần, mắt điển, giống bão và mưa đá, sinh vật biến dị... Thế giới đẫn trở nên hỗn loạn. Khi Thứ Phúc tỉnh dậy sau một giác mơ, có chột nhân ra rằng mình...",
      genres: ["Khoa huyễn"],
      chapters: 470,
      views: 2143,
      rating: 4.7,
      status: "completed",
      updatedAt: "2025-12-10",
      createdAt: "2023-07-01",
      isFull: true,
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Mới Hoàn Thành</h2>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1">
          Tất cả
          <span>→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
          >
            <div className="flex gap-4 p-4">
              {/* Cover Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded overflow-hidden shadow-sm relative">
                  {story.isFull && (
                    <div className="absolute top-0 left-0 bg-green-600 text-white text-xs px-2 py-1 rounded-br">
                      FULL
                    </div>
                  )}
                  <div className="w-full h-full flex items-center justify-center px-2">
                    <span className="text-xs text-gray-500 text-center">
                      {story.title.substring(0, 5)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm line-clamp-2 hover:text-blue-600 transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{story.author}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="text-green-600 font-medium">
                    {story.chapters} Chương
                  </span>
                  <span className="text-gray-500">
                    {story.views.toLocaleString()} Đọc
                  </span>
                </div>
                <blockquote className="text-xs text-gray-600 italic line-clamp-3 border-l-2 border-gray-300 pl-2">
                  {story.description}
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewlyCompletedStories;
