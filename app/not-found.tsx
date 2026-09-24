import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
        <Leaf className="h-8 w-8" strokeWidth={1.5} />
      </span>
      <span className="eyebrow mt-6">404</span>
      <h1 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
        This Page Wandered Off the Path
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved. Let&rsquo;s get
        you back to something that smells like sandalwood.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
