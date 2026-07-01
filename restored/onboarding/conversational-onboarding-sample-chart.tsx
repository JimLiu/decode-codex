// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Bundled sample sales chart used by the conversational-onboarding "turn this
// CSV into a chart" task: a stacked-column recharts BarChart plus an SVG
// accessibility overlay, the localized model builder, and an off-screen
// renderer that rasterizes the chart to a PNG byte array.
import React from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Customized,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { RawIntlProvider, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";

interface SampleSalesBaseDatum {
  online: number;
  retail: number;
  corporate: number;
}

interface SampleSalesChartDatum extends SampleSalesBaseDatum {
  month: string;
  monthLong: string;
  total: number;
}

interface SampleSalesChartSeries {
  key: keyof SampleSalesBaseDatum;
  label: string;
  color: string;
}

interface ConversationalOnboardingSampleChartModel {
  title: string;
  subtitle: string;
  ordersLabel: string;
  accessibilityDescription: string;
  data: SampleSalesChartDatum[];
  series: SampleSalesChartSeries[];
}

const SAMPLE_SALES_BASE_DATA: SampleSalesBaseDatum[] = [
  { online: 184, retail: 96, corporate: 42 },
  { online: 196, retail: 102, corporate: 38 },
  { online: 231, retail: 110, corporate: 47 },
  { online: 218, retail: 121, corporate: 44 },
  { online: 256, retail: 134, corporate: 53 },
  { online: 247, retail: 146, corporate: 57 },
  { online: 279, retail: 162, corporate: 49 },
  { online: 305, retail: 179, corporate: 66 },
  { online: 402, retail: 265, corporate: 81 },
  { online: 386, retail: 281, corporate: 76 },
  { online: 574, retail: 398, corporate: 109 },
  { online: 641, retail: 432, corporate: 126 },
];

const SAMPLE_CHART_WIDTH = 1496;
const SAMPLE_CHART_HEIGHT = 970;
const SAMPLE_CHART_Y_TICKS = [0, 300, 600, 900, 1200];

function buildConversationalOnboardingSampleChartModel(
  intl: IntlShape,
): ConversationalOnboardingSampleChartModel {
  const data: SampleSalesChartDatum[] = SAMPLE_SALES_BASE_DATA.map(
    (entry, index) => {
      const monthDate = new Date(Date.UTC(2026, index, 1));
      return {
        ...entry,
        month: intl.formatDate(monthDate, {
          month: "short",
          timeZone: "UTC",
        }),
        monthLong: intl.formatDate(monthDate, {
          month: "long",
          timeZone: "UTC",
        }),
        total: entry.online + entry.retail + entry.corporate,
      };
    },
  );

  return {
    title: intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.sampleChart.title",
      defaultMessage: "SnapDock monthly sales orders by channel",
      description: "Title of the sample monthly sales chart",
    }),
    subtitle: intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.sampleChart.subtitle",
      defaultMessage:
        "The chart makes the September retail expansion and November–December holiday surge immediately visible",
      description: "Subtitle of the sample monthly sales chart",
    }),
    ordersLabel: intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.sampleChart.orders",
      defaultMessage: "Orders",
      description: "Vertical axis label in the sample monthly sales chart",
    }),
    accessibilityDescription: intl.formatMessage(
      {
        id: "electron.onboarding.conversationalOnboarding.sampleChart.accessibilityDescription",
        defaultMessage:
          "Stacked monthly columns show direct online, retail partner, and corporate orders. Total orders rise from {startTotal} in {startMonth} to {endTotal} in {endMonth}, with the sharpest growth during the holiday season.",
        description: "Accessible description of the sample monthly sales chart",
      },
      {
        startTotal: intl.formatNumber(data[0]?.total ?? 0),
        startMonth: data[0]?.monthLong,
        endTotal: intl.formatNumber(data.at(-1)?.total ?? 0),
        endMonth: data.at(-1)?.monthLong,
      },
    ),
    data,
    series: [
      {
        key: "online",
        label: intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.sampleChart.directOnline",
          defaultMessage: "Direct online",
          description: "Direct online sales channel in the sample chart",
        }),
        color: "#0b6fc9",
      },
      {
        key: "retail",
        label: intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.sampleChart.retailPartners",
          defaultMessage: "Retail partners",
          description: "Retail partner sales channel in the sample chart",
        }),
        color: "#fac936",
      },
      {
        key: "corporate",
        label: intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.sampleChart.corporate",
          defaultMessage: "Corporate",
          description: "Corporate sales channel in the sample chart",
        }),
        color: "#e369ad",
      },
    ],
  };
}

interface SampleSalesBarTotalLabelProps {
  formatNumber: IntlShape["formatNumber"];
  value?: unknown;
  width?: unknown;
  x?: unknown;
  y?: unknown;
}

function SampleSalesBarTotalLabel({
  formatNumber,
  value,
  width,
  x,
  y,
}: SampleSalesBarTotalLabelProps): React.ReactElement | null {
  if (
    typeof value !== "number" ||
    typeof width !== "number" ||
    typeof x !== "number" ||
    typeof y !== "number"
  ) {
    return null;
  }
  const centerX = x + width / 2;
  const labelY = y - 13;
  return (
    <text
      x={centerX}
      y={labelY}
      fill="#171717"
      fontSize={26}
      textAnchor="middle"
    >
      {formatNumber(value)}
    </text>
  );
}

interface SampleSalesChartAccessibilityOverlayProps {
  model: ConversationalOnboardingSampleChartModel;
}

function SampleSalesChartAccessibilityOverlay({
  model,
}: SampleSalesChartAccessibilityOverlayProps): React.ReactElement {
  const legendColumnX = [19, 253, 512];
  const legendItems = model.series.map((entry, index) => (
    <g key={entry.key} transform={`translate(${legendColumnX[index]} 163)`}>
      <rect width={20} height={20} rx={5} fill={entry.color} />
      <text x={34} y={19} fill="#171717" fontSize={28}>
        {entry.label}
      </text>
    </g>
  ));
  return (
    <g>
      <title>{model.title}</title>
      <desc>{model.accessibilityDescription}</desc>
      <text x={20} y={56} fill="#171717" fontSize={34} fontWeight={700}>
        {model.title}
      </text>
      <text x={20} y={118} fill="#171717" fontSize={28}>
        {model.subtitle}
      </text>
      {legendItems}
      <text x={115} y={247} fill="#888888" fontSize={24}>
        {model.ordersLabel}
      </text>
    </g>
  );
}

function ConversationalOnboardingSampleSalesChart(): React.ReactElement {
  const intl = useIntl();
  const model = buildConversationalOnboardingSampleChartModel(intl);

  const formatThousands = (value: number): string =>
    value === 0
      ? intl.formatNumber(value)
      : intl.formatMessage(
          {
            id: "electron.onboarding.conversationalOnboarding.sampleChart.thousandsOfOrders",
            defaultMessage: "{value}k",
            description:
              "Compact thousands value on the sample monthly sales chart axis",
          },
          {
            value: intl.formatNumber(value / 1e3, {
              maximumFractionDigits: 1,
            }),
          },
        );

  return (
    <BarChart
      accessibilityLayer
      width={SAMPLE_CHART_WIDTH}
      height={SAMPLE_CHART_HEIGHT}
      aria-label={model.title}
      barCategoryGap={8}
      data={model.data}
      margin={{ top: 322, right: 25, bottom: 0, left: 20 }}
      role="img"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <CartesianGrid vertical={false} stroke="#e6e6e6" />
      <XAxis
        dataKey="month"
        axisLine={{ stroke: "#888888" }}
        height={63}
        interval={0}
        padding={{ left: -8, right: -8 }}
        tick={{ fill: "#888888", fontSize: 24 }}
        tickLine={false}
        tickMargin={17}
      />
      <YAxis
        width={95}
        axisLine={false}
        domain={[0, 1200]}
        tick={{ fill: "#888888", fontSize: 24 }}
        tickFormatter={formatThousands}
        tickLine={false}
        ticks={SAMPLE_CHART_Y_TICKS}
      />
      {model.series.map((entry, index) => (
        <Bar
          key={entry.key}
          dataKey={entry.key}
          fill={entry.color}
          isAnimationActive={false}
          stackId="orders"
        >
          {index === model.series.length - 1 ? (
            <LabelList
              dataKey="total"
              content={
                <SampleSalesBarTotalLabel formatNumber={intl.formatNumber} />
              }
            />
          ) : null}
        </Bar>
      ))}
      <Customized
        component={<SampleSalesChartAccessibilityOverlay model={model} />}
      />
    </BarChart>
  );
}

export async function renderConversationalOnboardingSampleChartToPng(
  intl: IntlShape,
): Promise<Uint8Array> {
  const container = document.createElement("div");
  const root = createRoot(container);
  flushSync(() => {
    root.render(
      <RawIntlProvider value={intl}>
        <ConversationalOnboardingSampleSalesChart />
      </RawIntlProvider>,
    );
  });
  try {
    const svg = container.querySelector("svg");
    if (svg == null) throw Error("Sample sales chart did not render an SVG");
    const svgUrl = URL.createObjectURL(
      new Blob([new XMLSerializer().serializeToString(svg)], {
        type: "image/svg+xml;charset=utf-8",
      }),
    );
    try {
      const image = new Image();
      image.src = svgUrl;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = svg.width.baseVal.value;
      canvas.height = svg.height.baseVal.value;
      const context = canvas.getContext("2d");
      if (context == null)
        throw Error("Sample sales chart canvas is unavailable");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((result) => {
          if (result == null) {
            reject(Error("Sample sales chart PNG encoding failed"));
            return;
          }
          resolve(result);
        }, "image/png");
      });
      return new Uint8Array(await blob.arrayBuffer());
    } finally {
      URL.revokeObjectURL(svgUrl);
    }
  } finally {
    root.unmount();
  }
}
