import { useRef, useLayoutEffect } from "preact/hooks";
import gsap from "gsap";

type Props = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: Props) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onFinish(),
    });

    tl.fromTo(
      loaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        textRef.current,
        { y: 0, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        textRef.current,
        { y: 0, opacity: 0, duration: 1, ease: "power3.in" },
        "+=1"
      )
      .to(
        loaderRef.current,
        { opacity: 0, duration: 1, ease: "power2.inOut" },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={loaderRef}
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div ref={textRef} class="text-3xl">
        Welcome to my Portfolio
      </div>
    </div>
  );
}
