export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-8">
            <a
              href="#top"
              className="text-lg font-semibold tracking-tight text-text-primary"
            >
              HengQi Hills
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#diverge"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Diverge
              </a>
              <a
                href="#everpeak"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Everpeak
              </a>
              <a
                href="#crossroads"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Crossroads
              </a>
              <a
                href="#nexus"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Nexus
              </a>
              <a
                href="#contact"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                联系我们
              </a>
            </nav>
          </div>
          <p className="text-sm text-text-tertiary">
            © 2026 HengQi Hills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
