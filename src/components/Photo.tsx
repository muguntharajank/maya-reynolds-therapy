import Image from "next/image";

type Shape = "arch" | "circle" | "leaf" | "blob" | "none";
type Props = { src: string; alt: string; width: number; height: number; className?: string; priority?: boolean; sizes?: string; pos?: string; shape?: Shape; soft?: boolean; tint?: boolean };

// Image wrapper driven by the .photo / .shape-* / .photo--* classes in globals.css
export default function Photo({ src, alt, width, height, className = "", priority, sizes = "(min-width: 1024px) 50vw, 100vw", pos, shape = "none", soft, tint }: Props) {
  const cls = ["photo", shape !== "none" && `shape-${shape}`, soft && "photo--soft", tint && "photo--tint", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} style={{ objectPosition: pos }} />
    </div>
  );
}
