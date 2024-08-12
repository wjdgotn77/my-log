export const ThinDivider = () => <hr className="border-t border-gray-200" />;

export const Title = ({
  children,
  fontSize = "xl",
  fontWeight = "normal",
}: {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: "light" | "normal" | "bold" | "black";
}) => <h1 className={`text-${fontSize} font-${fontWeight}`}>{children}</h1>;
