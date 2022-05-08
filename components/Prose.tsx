type Props = {
  children: React.ReactNode;
};

export default function Prose({ children }: Props) {
  return <div className="min-w-prose mx-auto px-40">{children}</div>;
}
