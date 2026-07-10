import Link from "next/link";
import { Link2 } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-background text-foreground">
      <div className="container mx-auto max-w-7xl px-5 py-14">

        {/* Top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Link2 className="h-5 w-5 text-primary" />
              </div>

              <h2 className="text-2xl font-bold">
                ShortLink
              </h2>

            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              Modern SaaS URL shortening platform for creating,
              managing and tracking links with powerful analytics.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="mb-5 font-semibold">
              Product
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-5 font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>

            </ul>

          </div>

          {/* Connect */}
          <div>

            <h3 className="mb-5 font-semibold">
              Connect
            </h3>

            <div className="flex gap-3">

              <a
                href="https://github.com/meheraz1100"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-background p-3 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              contact@shortlink.dev
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center md:flex-row">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShortLink. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with ❤️ by{" "}
            <span className="font-semibold text-foreground">
              Mosaiyeb Meheraz
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}