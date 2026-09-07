import Image from "next/image";

/*
  Real captures only. Skywave: the macOS app, captured 2026-09-07. Ulpiano: the landing.
  Listening Robots: its own mark, the product is not public yet.
*/
export function ProductVisual({
  name,
  className,
  priority = false,
}: {
  name: string;
  className?: string;
  priority?: boolean;
}) {
  if (name === "Skywave") {
    return (
      <div className={`frame rounded-2xl ${className ?? ""}`}>
        <Image
          src="/products/skywave-mac.png"
          alt="Skywave on macOS: explore view with stations, focus and easy-to-follow rows"
          width={1568}
          height={1057}
          sizes="(min-width: 768px) 33vw, 100vw"
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    );
  }
  if (name === "Ulpiano") {
    return (
      <div className={`frame rounded-2xl ${className ?? ""}`}>
        <Image
          src="/products/ulpiano.png"
          alt="Ulpiano landing page with a terminal running ulpiano check"
          width={1600}
          height={1000}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="block h-auto w-full"
        />
      </div>
    );
  }
  if (name === "Listening Robots") {
    return (
      <div
        className={`frame flex items-center justify-center rounded-2xl ${className ?? ""}`}
        style={{ background: "#fbf7ea", aspectRatio: "1568 / 1057" }}
      >
        <Image
          src="/products/listening-robots-logo.svg"
          alt="Listening Robots mark"
          width={260}
          height={200}
          className="h-auto w-[46%]"
        />
      </div>
    );
  }
  return null;
}
