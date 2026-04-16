import type { Trait } from "@/lib/riasec";

export type RIASECQuestion = {
  id: number;
  trait: Trait;
  text: string;
};

export const RIASEC_QUESTIONS: RIASECQuestion[] = [
  { id: 1, trait: "R", text: "Bạn thích tự tay tháo lắp, vọc vạch máy móc, đồ công nghệ hay tự sửa chữa đồ đạc?" },
  { id: 2, trait: "R", text: "Bạn thích làm việc ngoài trời, di chuyển liên tục thay vì ngồi một chỗ văn phòng?" },
  { id: 3, trait: "R", text: "Bạn có hứng thú với việc điều khiển các phương tiện, thiết bị kỹ thuật phức tạp?" },
  { id: 4, trait: "R", text: "Bạn thích các công việc tay chân tỉ mỉ như làm mộc, nấu ăn chuyên nghiệp, chăm cây?" },
  { id: 5, trait: "R", text: "Bạn ưu tiên giải quyết vấn đề bằng công cụ và hành động thực tế hơn là lý thuyết?" },
  { id: 6, trait: "I", text: "Bạn hay tò mò 'tại sao lại thế' và thích lặn ngụp tìm dữ liệu để đào tận gốc vấn đề?" },
  { id: 7, trait: "I", text: "Viết code, giải toán hay phân tích số liệu phức tạp làm não bộ bạn được kích thích?" },
  { id: 8, trait: "I", text: "Bạn thích đọc các báo cáo nghiên cứu, phân tích xu hướng thị trường hoặc khoa học?" },
  { id: 9, trait: "I", text: "Bạn thường quan sát tỉ mỉ để tìm ra quy luật của một sự vật, sự việc?" },
  { id: 10, trait: "I", text: "Bạn giỏi trong việc tìm ra các lỗ hổng logic trong lập luận của người khác?" },
  { id: 11, trait: "A", text: "Bạn yêu cầu công việc phải cho phép mình tự do thể hiện phong cách và sự sáng tạo?" },
  { id: 12, trait: "A", text: "Bạn đặc biệt nhạy cảm với cái đẹp, màu sắc, bố cục (ví dụ: thiết kế, chỉnh ảnh)?" },
  { id: 13, trait: "A", text: "Bạn thích viết lách, sáng tạo nội dung, lên ý tưởng kịch bản độc đáo?" },
  { id: 14, trait: "A", text: "Bạn có xu hướng suy nghĩ vượt ra khỏi các khuôn khổ, luật lệ truyền thống?" },
  { id: 15, trait: "A", text: "Bạn dành nhiều thời gian để thưởng thức nghệ thuật, âm nhạc, kịch hoặc phim ảnh?" },
  { id: 16, trait: "S", text: "Bạn cảm thấy tràn đầy năng lượng khi được giúp đỡ, lắng nghe vấn đề của người khác?" },
  { id: 17, trait: "S", text: "Bạn thích làm mentor, hướng dẫn hoặc đào tạo kỹ năng cho người mới?" },
  { id: 18, trait: "S", text: "Bạn thường xuyên tham gia các hoạt động xã hội, tình nguyện, cộng đồng?" },
  { id: 19, trait: "S", text: "Bạn đề cao sức mạnh của làm việc nhóm và thích sự gắn kết trong tập thể?" },
  { id: 20, trait: "S", text: "Bạn nhạy bén trong việc nắm bắt cảm xúc và tâm lý của những người xung quanh?" },
  { id: 21, trait: "E", text: "Bạn tự tin khi phải thuyết phục, chốt deal hoặc tranh luận để bảo vệ ý kiến?" },
  { id: 22, trait: "E", text: "Bạn luôn muốn đứng ra nhận trách nhiệm làm Leader, điều phối team và ra quyết định?" },
  { id: 23, trait: "E", text: "Bạn có hứng thú mãnh liệt với kinh doanh, khởi nghiệp và tạo ra doanh thu?" },
  { id: 24, trait: "E", text: "Bạn thích mở rộng mạng lưới quan hệ (networking) với những người có tầm ảnh hưởng?" },
  { id: 25, trait: "E", text: "Bạn sẵn sàng chấp nhận mức độ rủi ro cao để đạt được những mục tiêu tham vọng?" },
  { id: 26, trait: "C", text: "Bạn thấy thoải mái nhất khi mọi thứ được sắp xếp có hệ thống, quy trình rõ ràng?" },
  { id: 27, trait: "C", text: "Bạn rất giỏi làm việc với Excel, kiểm tra lỗi sai và quản lý hồ sơ giấy tờ?" },
  { id: 28, trait: "C", text: "Bạn luôn lập kế hoạch chi tiết cho mọi dự án và rất ghét sự thay đổi đột ngột?" },
  { id: 29, trait: "C", text: "Bạn muốn theo dõi chi tiết thu chi tài chính, tính toán dòng tiền, hóa đơn?" },
  { id: 30, trait: "C", text: "Bạn tuân thủ nghiêm ngặt các nguyên tắc, quy định và không bao giờ trễ deadline?" },
];
