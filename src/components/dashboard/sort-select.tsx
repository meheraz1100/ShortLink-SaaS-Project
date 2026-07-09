"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({
  value,
  onChange,
}: Props) {
  return (
    <Select
  value={value}
  onValueChange={(newValue) => {
    if (newValue) {
      onChange(newValue);
    }
  }}
>
      <SelectTrigger className="w-55">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="newest">
          Newest
        </SelectItem>

        <SelectItem value="oldest">
          Oldest
        </SelectItem>

        <SelectItem value="most-clicked">
          Most Clicked
        </SelectItem>

        <SelectItem value="least-clicked">
          Least Clicked
        </SelectItem>

        <SelectItem value="a-z">
          A → Z
        </SelectItem>

        <SelectItem value="z-a">
          Z → A
        </SelectItem>
      </SelectContent>
    </Select>
  );
}