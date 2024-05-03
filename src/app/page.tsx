import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p>
          Welcome to DigitalHippo. Every asset on our platform is verified by
          our team to ensure our highest quality standards.
        </p>
        <div>
          <Link href="/products">Browse Trending</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
