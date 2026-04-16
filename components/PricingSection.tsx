import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "79.000đ",
    period: "/tháng",
    description: "Cho người mới bắt đầu định hướng và học đều đặn.",
    features: [
      "1 lộ trình AI đầy đủ / tháng",
      "Gợi ý khóa học & tài liệu theo chặng",
      "Theo dõi tiến độ cơ bản",
      "Ưu đãi waitlist: -20% trọn đời",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "127.000đ",
    period: "/tháng",
    description: "Khi bạn muốn tối ưu lộ trình và đi sâu thực chiến.",
    features: [
      "Không giới hạn chỉnh sửa lộ trình",
      "Job matching & skill gap chi tiết",
      "Mentor checklist & mục tiêu theo tuần",
      "Ưu đãi waitlist: -20% trọn đời",
    ],
    highlighted: true,
  },
];

type PricingSectionProps = {
  onRegister: () => void;
};

export function PricingSection({ onRegister }: PricingSectionProps) {
  return (
    <section id="bang-gia" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-up-ink sm:text-3xl">
            Sở hữu lộ trình của riêng bạn
          </h2>
          <p className="mt-2 text-sm font-medium text-up-teal-dark sm:text-base">
            Giảm 20% trọn đời khi tham gia waitlist trước khi ra mắt.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? "border-up-teal/40 bg-gradient-to-b from-up-mint-soft/50 to-white shadow-lg shadow-up-teal/10"
                  : "border-up-border bg-up-card"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-up-ink">{plan.name}</h3>
                {plan.highlighted ? (
                  <span className="rounded-full bg-up-teal/15 px-2.5 py-0.5 text-xs font-semibold text-up-teal-dark">
                    Phổ biến
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-up-muted">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-up-ink">{plan.price}</span>
                <span className="text-sm text-up-muted">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-up-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-up-mint/35 text-up-teal-dark">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onRegister}
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-up-teal text-white shadow-md shadow-up-teal/25 hover:bg-up-teal-dark"
                    : "border-2 border-up-border bg-white text-up-ink hover:border-up-teal/40"
                }`}
              >
                Đăng ký
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
