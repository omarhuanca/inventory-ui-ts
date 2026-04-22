import { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import ProductClient from "../../product/api/ProductClient";
import {LineAPI} from "../dto/LineAPI.ts";

type Props = {
  selectedLine: string;
  onSelectLine: (line: string) => void;
};

const LineComponent = ({ selectedLine, onSelectLine }: Props) => {
  const [lines, setLines] = useState<LineAPI[]>([]);

  useEffect(() => {
    ProductClient.get<LineAPI[]>("v1/lines")
      .then((res) => setLines(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <FormControl size="small" sx={{ minWidth: 220 }}>
      <Select
        value={selectedLine}
        onChange={(e) => onSelectLine(e.target.value)}
        displayEmpty
      >
        <MenuItem value="">Todas </MenuItem>
        {lines.map((line) => (
          <MenuItem key={line.id} value={line.name}>
            {line.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LineComponent;
