import type { JobItem } from "@/lib/riasec";

export const JOB_DATABASE: JobItem[] = [
  { id: "fpa", industry: "Finance", niche: "corp", title: "Chuyên viên Phân tích Tài chính (FP&A)", hollandCode: "IEC", description: "Phân tích ngân sách, hiệu suất và dự báo tài chính cho doanh nghiệp." },
  { id: "chief-accountant", industry: "Finance", niche: "acc", title: "Kế toán Tổng hợp / Kế toán trưởng", hollandCode: "CEI", description: "Quản lý sổ sách kế toán, chuẩn hóa báo cáo và kiểm soát tuân thủ tài chính." },
  { id: "auditor", industry: "Finance", niche: "acc", title: "Kiểm toán viên (Auditor)", hollandCode: "CIE", description: "Đánh giá tính chính xác của báo cáo tài chính và rủi ro kiểm soát nội bộ." },
  { id: "cfo", industry: "Finance", niche: "corp", title: "Giám đốc Tài chính (CFO)", hollandCode: "EIC", description: "Lãnh đạo chiến lược tài chính, dòng tiền và tăng trưởng lợi nhuận." },
  { id: "tax-consultant", industry: "Finance", niche: "acc", title: "Chuyên viên Tư vấn Thuế", hollandCode: "CES", description: "Tư vấn chính sách thuế, tối ưu nghĩa vụ thuế và đảm bảo tuân thủ pháp lý." },
  { id: "credit-specialist", industry: "Finance", niche: "inv", title: "Chuyên viên Ngân hàng / Tín dụng", hollandCode: "ESC", description: "Thẩm định hồ sơ tín dụng và đề xuất phương án cho vay phù hợp." },
  { id: "investment-analyst", industry: "Finance", niche: "inv", title: "Chuyên viên Phân tích Đầu tư (Quỹ)", hollandCode: "IEA", description: "Nghiên cứu thị trường vốn, mô hình định giá và đề xuất chiến lược đầu tư." },

  { id: "software-engineer", industry: "Tech", niche: "dev", title: "Kỹ sư Phần mềm (Software Engineer)", hollandCode: "IRC", description: "Thiết kế và triển khai hệ thống phần mềm có khả năng mở rộng." },
  { id: "data-analyst", industry: "Tech", niche: "data", title: "Chuyên viên Phân tích Dữ liệu (Data Analyst)", hollandCode: "ICR", description: "Làm sạch dữ liệu, xây dashboard và rút insight kinh doanh." },
  { id: "data-scientist", industry: "Tech", niche: "data", title: "Kỹ sư Khoa học Dữ liệu (Data Scientist)", hollandCode: "IRE", description: "Xây dựng mô hình dự đoán và thuật toán phục vụ quyết định." },
  { id: "uiux", industry: "Tech", niche: "product", title: "Chuyên viên Thiết kế UI/UX", hollandCode: "AIE", description: "Thiết kế trải nghiệm người dùng và giao diện tối ưu chuyển đổi." },
  { id: "product-manager", industry: "Tech", niche: "product", title: "Quản lý Sản phẩm (Product Manager)", hollandCode: "EIS", description: "Định hình roadmap sản phẩm, phối hợp team và tối ưu giá trị người dùng." },
  { id: "security-engineer", industry: "Tech", niche: "dev", title: "Kỹ sư An toàn thông tin (Security)", hollandCode: "RCI", description: "Xây dựng cơ chế bảo mật, rà soát lỗ hổng và ứng phó sự cố." },

  { id: "digital-marketing", industry: "Marketing", niche: "perf", title: "Chuyên viên Digital Marketing", hollandCode: "EAI", description: "Vận hành quảng cáo đa kênh, tối ưu chi phí và tăng chuyển đổi." },
  { id: "brand-manager", industry: "Marketing", niche: "strategy", title: "Quản lý Thương hiệu (Brand Manager)", hollandCode: "EAS", description: "Xây chiến lược thương hiệu và đảm bảo thông điệp nhất quán." },
  { id: "content-creator", industry: "Marketing", niche: "content", title: "Chuyên viên Sáng tạo Nội dung", hollandCode: "AIE", description: "Sản xuất nội dung đa định dạng phục vụ tăng trưởng thương hiệu." },
  { id: "pr-specialist", industry: "Marketing", niche: "content", title: "Chuyên viên Quan hệ Công chúng (PR)", hollandCode: "ESA", description: "Xây dựng quan hệ truyền thông và xử lý hình ảnh công chúng." },
  { id: "sales-director", industry: "Marketing", niche: "strategy", title: "Giám đốc Kinh doanh (Sales Director)", hollandCode: "ESC", description: "Lập chiến lược doanh số, mở rộng thị trường và quản trị đội sales." },
  { id: "market-researcher", industry: "Marketing", niche: "strategy", title: "Chuyên viên Nghiên cứu Thị trường", hollandCode: "IEC", description: "Phân tích hành vi khách hàng và xu hướng thị trường để ra quyết định." },

  { id: "graphic-designer", industry: "Design", niche: "2d", title: "Thiết kế Đồ họa (Graphic Designer)", hollandCode: "ARI", description: "Thiết kế nhận diện, ấn phẩm và hình ảnh truyền thông 2D." },
  { id: "art-director", industry: "Design", niche: "2d", title: "Giám đốc Nghệ thuật (Art Director)", hollandCode: "AEI", description: "Định hướng concept sáng tạo và quản lý chất lượng hình ảnh thương hiệu." },
  { id: "video-editor", industry: "Design", niche: "3d", title: "Chuyên viên Dựng phim / Video Editor", hollandCode: "ARC", description: "Biên tập video, nhịp kể chuyện và hiệu ứng thị giác." },
  { id: "architect", industry: "Design", niche: "3d", title: "Kiến trúc sư / Thiết kế Nội thất", hollandCode: "ARE", description: "Thiết kế không gian công năng kết hợp thẩm mỹ và kỹ thuật." },

  { id: "mechanical-engineer", industry: "Engineering", niche: "mech", title: "Kỹ sư Cơ khí / Chế tạo máy", hollandCode: "RIC", description: "Thiết kế, vận hành và cải tiến hệ thống cơ khí sản xuất." },
  { id: "automation-engineer", industry: "Engineering", niche: "mech", title: "Kỹ sư Tự động hóa / Cơ điện tử", hollandCode: "RCI", description: "Tích hợp điều khiển tự động và tối ưu dây chuyền vận hành." },
  { id: "construction-pm", industry: "Engineering", niche: "civil", title: "Quản lý Dự án Xây dựng", hollandCode: "ERC", description: "Quản trị tiến độ, ngân sách và phối hợp triển khai công trình." },
  { id: "qaqc-engineer", industry: "Engineering", niche: "civil", title: "Kỹ sư Quản lý Chất lượng (QA/QC)", hollandCode: "CRI", description: "Thiết lập tiêu chuẩn chất lượng và giám sát tuân thủ kỹ thuật." },

  { id: "headhunter", industry: "Social", niche: "hr", title: "Chuyên viên Tuyển dụng (Headhunter)", hollandCode: "ESI", description: "Tìm kiếm và kết nối ứng viên phù hợp cho nhu cầu nhân sự." },
  { id: "ld-specialist", industry: "Social", niche: "hr", title: "Chuyên viên Đào tạo (L&D)", hollandCode: "SEA", description: "Thiết kế chương trình phát triển năng lực và lộ trình học nội bộ." },
  { id: "hr-cb", industry: "Social", niche: "hr", title: "Chuyên viên Hành chính (HR/C&B)", hollandCode: "CSE", description: "Quản lý chính sách lương thưởng, hồ sơ và vận hành nhân sự." },
  { id: "corporate-lawyer", industry: "Social", niche: "law", title: "Luật sư / Pháp chế doanh nghiệp", hollandCode: "EIC", description: "Tư vấn pháp lý, rà soát hợp đồng và kiểm soát rủi ro tuân thủ." },
  { id: "psychological-counselor", industry: "Social", niche: "psy", title: "Chuyên viên Tham vấn Tâm lý", hollandCode: "SIA", description: "Tham vấn tâm lý, hỗ trợ cảm xúc và định hướng phát triển cá nhân." },
];
