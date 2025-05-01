interface Props {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavLink({ href, label, isActive, onClick }: Props) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? "nav-link-active" : ""}`}
    >
      {label}
    </a>
  );
}
