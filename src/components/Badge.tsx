import React from "react";
import { BadgeLabel } from "../types";
import { Color } from "../ui/colors";


interface BadgeProps {
  label: BadgeLabel;
  color: Color;
  value: number;
}
export const Badge = ({ color, label, value }: BadgeProps) => {
  return (
    <span className={`badge bg-${color}`}>
      {label}:{value}
    </span>
  );
};