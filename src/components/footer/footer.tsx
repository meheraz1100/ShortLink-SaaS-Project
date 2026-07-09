import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-14">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              ShortLink
            </h2>

            <p className="mt-4 text-sm text-muted-foreground leading-6">
              A modern SaaS platform for shortening,
              managing and tracking links with ease.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/meheraz1100"
                target="_blank"
              >
                <FaGithub className="h-5 w-5 hover:text-primary transition" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
              >
                <FaLinkedin className="h-5 w-5 hover:text-primary transition" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
              >
                <FaXTwitter className="h-5 w-5 hover:text-primary transition" />
              </a>

            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              contact@shortlink.dev
            </p>

          </div>

        </div>

        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShortLink. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground mt-3 md:mt-0">
            Built with ❤️ Mosaiyeb Meheraz
          </p>

        </div>

      </div>
    </footer>
  );
}