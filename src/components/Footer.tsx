const Footer = () => (
  <footer className="px-6 md:px-12 py-10 mt-10 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <p className="text-muted-foreground text-sm mb-4">
        Questions? Contact us.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-muted-foreground mb-6">
        {["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Info", "Speed Test"].map((item) => (
          <button key={item} className="text-left hover:text-foreground transition-colors">
            {item}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 StreamX</p>
    </div>
  </footer>
);

export default Footer;
