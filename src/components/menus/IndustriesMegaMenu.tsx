import { Link } from "react-router-dom";

interface Props {
  onClose?: () => void;
}

export default function IndustriesMegaMenu({ onClose }: Props) {
  const industries = [
    { name: "Defence", href: "/defence" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Education", href: "/education" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Media & Entertainment", href: "/media-entertainment" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 min-w-[300px] border border-border/50">
      <h3 className="font-jakarta text-sm font-semibold text-text-secondary mb-4">Industries</h3>
      <div className="flex flex-col gap-2">
        {industries.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={onClose}
            className="font-jakarta text-sm font-medium text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-primary/5 transition-all"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
