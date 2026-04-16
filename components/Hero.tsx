type HeroProps = {
  onDemoClick: () => void;
  onTestClick: () => void;
};

export function Hero({ onDemoClick, onTestClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-up-border/60 bg-gradient-to-b from-white via-up-mint-soft/40 to-background pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.12),_transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-up-teal/25 bg-white/80 px-4 py-1.5 text-xs font-medium text-up-teal-dark shadow-sm">
          <span className="text-up-teal">•</span>
          Dự án EdTech AI - Đang trong giai đoạn phát triển
        </p>

        <h1 className="text-balance text-3xl font-bold tracking-tight text-up-ink sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          <span className="block">Đừng chỉ đoán định tương lai.</span>
          <span className="mt-2 block bg-gradient-to-r from-up-teal-dark to-up-teal bg-clip-text text-transparent">
            Hãy xây luôn lộ trình học nó.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-up-muted sm:text-lg">
          UpPath không chỉ giúp bạn tìm ra ngành nghề phù hợp. AI của chúng tôi tự động tạo Lộ
          trình từ A-Z kèm theo Link khóa học, tài liệu thực chiến để bạn bắt đầu học ngay hôm
          nay.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={onDemoClick}
            className="inline-flex w-full min-w-[220px] items-center justify-center gap-2 rounded-lg bg-up-teal px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-up-teal/25 transition hover:bg-up-teal-dark sm:w-auto"
          >
            Xem Demo Lộ Trình
            <span aria-hidden>↓</span>
          </button>
          <button
            type="button"
            onClick={onTestClick}
            className="inline-flex w-full min-w-[220px] items-center justify-center rounded-lg border-2 border-up-border bg-white px-6 py-3.5 text-sm font-semibold text-up-ink transition hover:border-up-teal/40 hover:bg-up-mint-soft/30 sm:w-auto"
          >
            Làm Test Đánh Giá
          </button>
        </div>
      </div>
    </section>
  );
}
