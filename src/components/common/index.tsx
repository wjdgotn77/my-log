import { NextFont } from "next/dist/compiled/@next/font";

export const ThinDivider = () => <hr className="border-t border-gray-200" />;

export const Title = ({
  children,
  fontFamily,
  fontSize = "xl",
  fontWeight = "normal",
}: {
  children: React.ReactNode;
  fontFamily?: NextFont;
  fontSize?: string;
  fontWeight?: "light" | "normal" | "bold" | "black";
}) => (
  <h1
    className={`${fontFamily?.className} text-${fontSize} font-${fontWeight}`}
  >
    {children}
  </h1>
);
