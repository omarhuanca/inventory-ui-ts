import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductClient from "../../product/api/ProductClient";
import { LineAPI } from "../dto/LineAPI.ts";

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
    <nav aria-label="Lineas">
      <ul className="line-nav">
        <li>
          <NavLink
            to="/"
            className={selectedLine === "" ? "active" : undefined}
            onClick={() => onSelectLine("")}
          >
            Todas
          </NavLink>
        </li>
        {lines.map((line) => (
          <li key={line.id}>
            <NavLink
              to={`/?line=${encodeURIComponent(line.name)}`}
              className={selectedLine === line.name ? "active" : undefined}
              onClick={() => onSelectLine(line.name)}
            >
              {line.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LineComponent;
