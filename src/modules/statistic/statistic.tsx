import { FC } from "react";

import style from "./statistic.module.sass";
import { Card } from "../card/card";
import { Htag } from "@/components/ui/htag/htag";

import data from "src/mock/statisticMock.json";
import {
  LineSegment,
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

export const Statistic: FC = () => {
  const sixDaysData = data.filter((item, index) => {
    if (index < 7) {
      return item;
    }
  });
  return (
    <div className={style.main}>
      <Card size="m">
        <Htag content="Statistic" variant="h4" />

        <VictoryChart theme={VictoryTheme.material} height={200} width={400}>
          <VictoryAxis style={{ tickLabels: { fontSize: 8 } }} offsetY={20} />
          <VictoryAxis dependentAxis />
          <VictoryLine
            animate
            labelComponent={<VictoryTooltip />}
            interpolation="natural"
            data={sixDaysData}
            y={"revenue"}
            x={"date"}
            style={{
              data: {
                stroke: "#5F1ED9",
                strokeWidth: "2px",
                strokeLinecap: "round",
              },
              border: {
                strokeWidth: "1px",
              },
            }}
          />
        </VictoryChart>
      </Card>
    </div>
  );
};
