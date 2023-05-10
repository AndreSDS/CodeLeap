import { FC } from "react";

interface LabelProps {
  title: string;
}

export const Label: FC<LabelProps> = ({ title }) => {
  return <label className="text-base">{title}</label>;
};
