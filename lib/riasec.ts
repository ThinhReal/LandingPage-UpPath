export type Trait = "R" | "I" | "A" | "S" | "E" | "C";

export type IndustryId =
  | "Finance"
  | "Tech"
  | "Marketing"
  | "Design"
  | "Engineering"
  | "Social";

export type NicheId =
  | "acc"
  | "inv"
  | "corp"
  | "dev"
  | "data"
  | "product"
  | "perf"
  | "content"
  | "strategy"
  | "2d"
  | "3d"
  | "mech"
  | "civil"
  | "hr"
  | "law"
  | "psy";

export type ScoreMap = Record<Trait, number>;

export type JobItem = {
  id: string;
  industry: IndustryId;
  niche: NicheId;
  title: string;
  description: string;
  hollandCode: `${Trait}${Trait}${Trait}`;
};

export type RankedJob = JobItem & {
  baseScore: number;
  bonusScore: number;
  totalScore: number;
  matchPercent: number;
};

export const INDUSTRY_OPTIONS: Array<{ value: IndustryId; label: string }> = [
  { value: "Finance", label: "Kinh tế / Tài chính / Kế toán" },
  { value: "Tech", label: "Công nghệ Thông tin / Data" },
  { value: "Marketing", label: "Marketing / Truyền thông / Sales" },
  { value: "Design", label: "Thiết kế / Nghệ thuật sáng tạo" },
  { value: "Engineering", label: "Kỹ thuật / Sản xuất / Xây dựng" },
  { value: "Social", label: "Nhân sự / Luật / Xã hội học" },
];

export const NICHES_BY_INDUSTRY: Record<
  IndustryId,
  Array<{ value: NicheId; label: string }>
> = {
  Finance: [
    { value: "acc", label: "Kế toán - Kiểm toán - Thuế" },
    { value: "inv", label: "Đầu tư - Ngân hàng - Chứng khoán" },
    { value: "corp", label: "Tài chính nội bộ FP&A / CFO" },
  ],
  Tech: [
    { value: "dev", label: "Lập trình - Phát triển phần mềm" },
    { value: "data", label: "Dữ liệu - Trí tuệ nhân tạo" },
    { value: "product", label: "Phát triển Sản phẩm UI/UX / PM" },
  ],
  Marketing: [
    { value: "perf", label: "Digital Marketing - Quảng cáo" },
    { value: "content", label: "Sáng tạo Nội dung - PR" },
    { value: "strategy", label: "Chiến lược - Quản lý Thương hiệu" },
  ],
  Design: [
    { value: "2d", label: "Đồ họa 2D - Nhận diện thương hiệu" },
    { value: "3d", label: "Dựng Video - Đồ họa 3D - Kiến trúc" },
  ],
  Engineering: [
    { value: "mech", label: "Cơ khí - Tự động hóa" },
    { value: "civil", label: "Xây dựng - Quản lý chất lượng QA/QC" },
  ],
  Social: [
    { value: "hr", label: "Nhân sự - Tuyển dụng - L&D" },
    { value: "law", label: "Luật - Pháp chế doanh nghiệp" },
    { value: "psy", label: "Tâm lý học - Công tác xã hội" },
  ],
};

export const INITIAL_SCORES: ScoreMap = {
  R: 0,
  I: 0,
  A: 0,
  S: 0,
  E: 0,
  C: 0,
};

export function submitAnswer(current: ScoreMap, trait: Trait, point: number): ScoreMap {
  const safePoint = Math.max(1, Math.min(5, point));
  return { ...current, [trait]: current[trait] + safePoint };
}

export function calculateHollandCode(scores: ScoreMap): `${Trait}${Trait}${Trait}` {
  const top3 = (Object.entries(scores) as Array<[Trait, number]>)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([trait]) => trait)
    .join("");
  return top3 as `${Trait}${Trait}${Trait}`;
}

export function calculateMatchScore(params: {
  userScores: ScoreMap;
  jobCode: `${Trait}${Trait}${Trait}`;
  selectedNiche: NicheId;
  jobNiche: NicheId;
}) {
  const { userScores, jobCode, selectedNiche, jobNiche } = params;
  const traits = jobCode.split("") as Trait[];
  const baseScore = userScores[traits[0]] * 3 + userScores[traits[1]] * 2 + userScores[traits[2]] * 1;
  const bonusScore = selectedNiche === jobNiche ? 30 : 0;
  const totalScore = baseScore + bonusScore;
  const matchPercent = Math.min(99, Math.round((totalScore / 150) * 100));

  return { baseScore, bonusScore, totalScore, matchPercent };
}

export function rankTopJobs(params: {
  jobs: JobItem[];
  industry: IndustryId;
  niche: NicheId;
  userScores: ScoreMap;
}): RankedJob[] {
  const { jobs, industry, niche, userScores } = params;
  return jobs
    .filter((job) => job.industry === industry)
    .map((job) => {
      const score = calculateMatchScore({
        userScores,
        jobCode: job.hollandCode,
        selectedNiche: niche,
        jobNiche: job.niche,
      });
      return { ...job, ...score };
    })
    .sort((a, b) => b.matchPercent - a.matchPercent || b.totalScore - a.totalScore)
    .slice(0, 3);
}
