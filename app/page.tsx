import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import KeyFeatures from "@/components/KeyFeatures";
import { About } from "@/components/modules/about/AboutSection";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import AuthButtons from "@/components/header/auth-buttons";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10">
      <header className="fixed top-0 w-full z-50 bg-black border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between h-20">
          <Logo />
          <Navigation />
          <AuthButtons />
        </div>
      </header>
      <main>
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32">
          <div className="container relative">
            <div className="mx-auto max-w-[980px] text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Build blockchain applications with Rust
              </h1>
              <p className="mt-6 text-lg text-white/60 md:text-xl max-w-[700px] mx-auto">
                A scaffold platform optimized for developing on Stellar and
                other blockchains. Start fast, scale with confidence.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button className="h-12 px-6 bg-white text-black hover:bg-white/90">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 bg-black text-white hover:text-white border-white/10 hover:bg-black hover:border-white/20 transition-colors"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-[180px] mb-[96px]">
            <KeyFeatures />
          </div>
          <About />
        </section>

        <section className="py-24 relative">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative space-y-4 p-6 rounded-2xl border border-white/5 bg-white/5">
                  <div className="p-3 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-label="Fast Development Icon"
                    >
                      <title>Fast Development Icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Fast Development</h3>
                  <p className="text-white/60">
                    Pre-configured and optimized templates to start developing
                    in minutes.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative space-y-4 p-6 rounded-2xl border border-white/5 bg-white/5">
                  <div className="p-3 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Security Icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Built-in Security</h3>
                  <p className="text-white/60">
                    Implement security best practices from day one with our
                    pre-configured security features and guidelines.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                  {" "}
                </div>
                <div className="relative space-y-4 p-6 rounded-2xl border border-white/5 bg-white/5">
                  <div className="p-3 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>Fast Development Icon</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Multi-Chain</h3>
                  <p className="text-white/60">
                    Compatibility with multiple blockchains that use Rust as
                    their base language.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
}
