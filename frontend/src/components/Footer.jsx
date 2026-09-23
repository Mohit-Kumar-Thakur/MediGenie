import { ShieldAlert } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p className="disclaimer">
        <ShieldAlert size={18} />
        MediGenie provides general wellness information for educational purposes only. It is not a
        substitute for professional medical advice, diagnosis or treatment. In an emergency, call your
        local emergency number.
      </p>
      <p className="copyright">© {new Date().getFullYear()} MediGenie</p>
    </div>
  </footer>
);

export default Footer;
