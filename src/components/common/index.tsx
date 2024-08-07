import Link from "next/link";

export const ThinDivider = () => (
  <hr className="border-t border-gray-200 py-3" />
);

export const Title = ({
  children,
  fontSize = "2xl",
  fontWeight = "normal",
}: {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: "light" | "normal" | "bold" | "black";
}) => (
  <h1 className={`text-${fontSize} font-${fontWeight} pb-3`}>{children}</h1>
);
