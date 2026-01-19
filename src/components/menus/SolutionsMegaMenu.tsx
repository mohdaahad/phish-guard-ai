import { Link } from "react-router-dom";

interface Props {
  onClose?: () => void;
}

export default function SolutionsMegaMenu({ onClose }: Props) {
  const solutions = [
    { name: "Custom AI Solutions", href: "/contact-us?interest=Custom+AI+Solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Digital Twin", href: "/contact-us?interest=Digital+Twin" },
    { name: "Edge AI Solutions", href: "/contact-us?interest=Edge+AI" },
    { name: "Custom Software", href: "/contact-us?interest=Custom+Software" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 min-w-[300px] border border-border/50">
      <h3 className="font-jakarta text-sm font-semibold text-text-secondary mb-4">Our Solutions</h3>
      <div className="flex flex-col gap-2">
        {solutions.map((item) => (
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
