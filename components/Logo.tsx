import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/Logo_UpPath.png"
        alt="UpPath logo"
        width={175}
        height={55}
        className="h-14 w-auto object-contain"
        priority
      />
    </span>
  );
}
