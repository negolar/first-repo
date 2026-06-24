const stocks = [
  {
    code: "600519",
    name: "贵州茅台",
    market: "沪A",
    industry: "白酒",
    price: 1652.3,
    change: 0.78,
    pe: 22.1,
    pb: 6.72,
    roe: 28.68,
    turnover: 0.12,
    liquidity: "高",
    grossMargin: 52.31,
    revenueGrowth: 15.28,
    debt: 14.23,
    cashflow: 561.23,
    dividend: 2.28,
    institution: 74.16,
    momentum: 75,
    valuation: 68,
    fundamental: 88,
    capital: 70,
    sentiment: 58,
    volatility: 31,
    spark: [42, 50, 57, 54, 61, 52, 45, 50, 57, 55, 63, 60, 68, 66, 74],
  },
  {
    code: "300750",
    name: "宁德时代",
    market: "深A",
    industry: "电池",
    price: 219.68,
    change: 1.36,
    pe: 24.8,
    pb: 4.18,
    roe: 19.42,
    turnover: 1.18,
    liquidity: "高",
    grossMargin: 23.64,
    revenueGrowth: 12.75,
    debt: 56.82,
    cashflow: 238.4,
    dividend: 1.09,
    institution: 68.9,
    momentum: 78,
    valuation: 62,
    fundamental: 82,
    capital: 73,
    sentiment: 66,
    volatility: 44,
    spark: [38, 44, 49, 56, 54, 61, 65, 58, 64, 71, 76, 72, 79, 82, 78],
  },
  {
    code: "601318",
    name: "中国平安",
    market: "沪A",
    industry: "保险",
    price: 43.56,
    change: -0.42,
    pe: 9.4,
    pb: 0.87,
    roe: 10.62,
    turnover: 0.35,
    liquidity: "高",
    grossMargin: 18.4,
    revenueGrowth: 6.16,
    debt: 72.1,
    cashflow: 126.9,
    dividend: 5.12,
    institution: 62.37,
    momentum: 54,
    valuation: 82,
    fundamental: 67,
    capital: 55,
    sentiment: 48,
    volatility: 38,
    spark: [64, 58, 61, 56, 52, 55, 49, 48, 52, 46, 44, 48, 43, 45, 42],
  },
  {
    code: "600036",
    name: "招商银行",
    market: "沪A",
    industry: "银行",
    price: 36.88,
    change: 0.24,
    pe: 6.5,
    pb: 0.95,
    roe: 16.71,
    turnover: 0.28,
    liquidity: "高",
    grossMargin: 39.2,
    revenueGrowth: 4.84,
    debt: 63.3,
    cashflow: 342.7,
    dividend: 5.86,
    institution: 71.85,
    momentum: 64,
    valuation: 79,
    fundamental: 76,
    capital: 66,
    sentiment: 56,
    volatility: 27,
    spark: [46, 48, 51, 49, 53, 55, 54, 57, 59, 58, 61, 62, 60, 64, 65],
  },
  {
    code: "002594",
    name: "比亚迪",
    market: "深A",
    industry: "汽车",
    price: 268.12,
    change: 2.18,
    pe: 25.9,
    pb: 5.21,
    roe: 20.25,
    turnover: 1.46,
    liquidity: "高",
    grossMargin: 21.88,
    revenueGrowth: 18.36,
    debt: 61.44,
    cashflow: 198.5,
    dividend: 1.24,
    institution: 65.7,
    momentum: 83,
    valuation: 59,
    fundamental: 80,
    capital: 76,
    sentiment: 72,
    volatility: 51,
    spark: [45, 52, 58, 63, 61, 70, 66, 73, 79, 75, 82, 86, 81, 88, 91],
  },
  {
    code: "300760",
    name: "迈瑞医疗",
    market: "深A",
    industry: "医疗器械",
    price: 286.45,
    change: 0.62,
    pe: 28.6,
    pb: 7.82,
    roe: 27.36,
    turnover: 0.42,
    liquidity: "中高",
    grossMargin: 64.3,
    revenueGrowth: 11.2,
    debt: 19.4,
    cashflow: 118.3,
    dividend: 2.1,
    institution: 69.2,
    momentum: 69,
    valuation: 56,
    fundamental: 85,
    capital: 64,
    sentiment: 61,
    volatility: 34,
    spark: [51, 56, 54, 58, 61, 59, 63, 66, 64, 69, 71, 67, 72, 75, 74],
  },
  {
    code: "688981",
    name: "中芯国际",
    market: "科创板",
    industry: "半导体",
    price: 58.62,
    change: -1.15,
    pe: 64.2,
    pb: 2.78,
    roe: 5.43,
    turnover: 1.62,
    liquidity: "中高",
    grossMargin: 19.7,
    revenueGrowth: 9.4,
    debt: 35.8,
    cashflow: 84.6,
    dividend: 0.0,
    institution: 47.1,
    momentum: 48,
    valuation: 38,
    fundamental: 52,
    capital: 46,
    sentiment: 53,
    volatility: 62,
    spark: [58, 55, 49, 52, 47, 42, 46, 44, 39, 42, 38, 35, 37, 33, 31],
  },
  {
    code: "601138",
    name: "工业富联",
    market: "沪A",
    industry: "电子制造",
    price: 27.48,
    change: 1.92,
    pe: 18.7,
    pb: 3.06,
    roe: 17.88,
    turnover: 1.84,
    liquidity: "高",
    grossMargin: 8.1,
    revenueGrowth: 13.86,
    debt: 44.2,
    cashflow: 151.9,
    dividend: 2.98,
    institution: 58.9,
    momentum: 81,
    valuation: 71,
    fundamental: 72,
    capital: 78,
    sentiment: 75,
    volatility: 49,
    spark: [36, 41, 44, 51, 49, 57, 62, 68, 72, 70, 77, 81, 84, 80, 86],
  },
];

const defaultHistory = [
  ["贵州茅台", "600519", 82, "积极关注"],
  ["宁德时代", "300750", 78, "积极关注"],
  ["中国平安", "601318", 67, "谨慎持有"],
  ["招商银行", "600036", 71, "积极关注"],
  ["迈瑞医疗", "300760", 75, "积极关注"],
];

const elements = {
  form: document.querySelector("#analyzeForm"),
  input: document.querySelector("#stockInput"),
  clear: document.querySelector("#clearInput"),
  button: document.querySelector("#analyzeButton"),
  helper: document.querySelector("#inputHelp"),
  loading: document.querySelector("#loadingBanner"),
  save: document.querySelector("#saveButton"),
  history: document.querySelector("#historyTable"),
  resetHistory: document.querySelector("#resetHistory"),
  stockName: document.querySelector("#stockName"),
  stockCode: document.querySelector("#stockCode"),
  stockMarket: document.querySelector("#stockMarket"),
  stockIndustry: document.querySelector("#stockIndustry"),
  analysisTime: document.querySelector("#analysisTime"),
  stockPrice: document.querySelector("#stockPrice"),
  stockChange: document.querySelector("#stockChange"),
  stockPe: document.querySelector("#stockPe"),
  stockRoe: document.querySelector("#stockRoe"),
  stockTurnover: document.querySelector("#stockTurnover"),
  stockLiquidity: document.querySelector("#stockLiquidity"),
  conclusionText: document.querySelector("#conclusionText"),
  elapsedTime: document.querySelector("#elapsedTime"),
  overallScore: document.querySelector("#overallScore"),
  scoreArc: document.querySelector("#scoreArc"),
  adviceTitle: document.querySelector("#adviceTitle"),
  adviceText: document.querySelector("#adviceText"),
  upsideText: document.querySelector("#upsideText"),
  positionText: document.querySelector("#positionText"),
  riskText: document.querySelector("#riskText"),
  momentumScore: document.querySelector("#momentumScore"),
  valuationScore: document.querySelector("#valuationScore"),
  fundamentalScore: document.querySelector("#fundamentalScore"),
  capitalScore: document.querySelector("#capitalScore"),
  sentimentScore: document.querySelector("#sentimentScore"),
  momentumTag: document.querySelector("#momentumTag"),
  valuationTag: document.querySelector("#valuationTag"),
  fundamentalTag: document.querySelector("#fundamentalTag"),
  capitalTag: document.querySelector("#capitalTag"),
  sentimentTag: document.querySelector("#sentimentTag"),
  momentumText: document.querySelector("#momentumText"),
  valuationText: document.querySelector("#valuationText"),
  fundamentalText: document.querySelector("#fundamentalText"),
  capitalText: document.querySelector("#capitalText"),
  sentimentText: document.querySelector("#sentimentText"),
  momentumSpark: document.querySelector("#momentumSpark"),
  sentimentSpark: document.querySelector("#sentimentSpark"),
  valuationMarker: document.querySelector("#valuationMarker"),
  fundamentalBars: document.querySelector("#fundamentalBars"),
  capitalFlows: document.querySelector("#capitalFlows"),
  metricTable: document.querySelector("#metricTable"),
};

let records = [...defaultHistory];
let currentStock = stocks[0];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function hashText(text) {
  return [...text].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) % 9973, 7);
}

function normalizeInput(value) {
  return value.trim().replace(/\s+/g, "").toUpperCase();
}

function formatNumber(value, digits = 2) {
  return new Intl.NumberFormat("zh-CN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function percent(value) {
  return `${value.toFixed(2)}%`;
}

function findStock(query) {
  const normalized = normalizeInput(query);
  if (!normalized) return null;
  return (
    stocks.find((stock) => stock.code === normalized) ||
    stocks.find((stock) => stock.name.includes(query.trim())) ||
    stocks.find((stock) => normalized.includes(stock.code) || query.includes(stock.name))
  );
}

function makeEstimatedStock(query) {
  const normalized = normalizeInput(query);
  const seed = hashText(normalized || query);
  const numericCode = /^\d{6}$/.test(normalized)
    ? normalized
    : String(600000 + (seed % 80000)).slice(0, 6);
  const isTech = seed % 3 === 0;
  const industry = isTech ? "科技制造" : seed % 3 === 1 ? "消费服务" : "周期金融";

  return {
    code: numericCode,
    name: /^\d/.test(normalized) ? `样本股票 ${numericCode}` : query.trim(),
    market: numericCode.startsWith("3") ? "深A" : numericCode.startsWith("8") ? "北交所" : "沪A",
    industry,
    price: 8 + (seed % 220) + (seed % 100) / 100,
    change: ((seed % 520) - 220) / 100,
    pe: 8 + (seed % 420) / 10,
    pb: 0.7 + (seed % 720) / 100,
    roe: 5 + (seed % 2400) / 100,
    turnover: 0.12 + (seed % 280) / 100,
    liquidity: seed % 4 === 0 ? "中" : seed % 4 === 1 ? "中高" : "高",
    grossMargin: 12 + (seed % 5200) / 100,
    revenueGrowth: -8 + (seed % 3300) / 100,
    debt: 18 + (seed % 6200) / 100,
    cashflow: 20 + (seed % 7200) / 10,
    dividend: (seed % 520) / 100,
    institution: 28 + (seed % 5600) / 100,
    momentum: 42 + (seed % 47),
    valuation: 38 + ((seed * 3) % 50),
    fundamental: 45 + ((seed * 5) % 45),
    capital: 40 + ((seed * 7) % 48),
    sentiment: 36 + ((seed * 11) % 50),
    volatility: 28 + ((seed * 13) % 44),
    spark: Array.from({ length: 15 }, (_, index) =>
      clamp(42 + ((seed + index * 13) % 38) + (index % 3) * 3 - index, 22, 88),
    ),
  };
}

function getScore(stock) {
  const stability = 100 - stock.volatility;
  return Math.round(
    stock.momentum * 0.2 +
      stock.valuation * 0.18 +
      stock.fundamental * 0.27 +
      stock.capital * 0.18 +
      stock.sentiment * 0.09 +
      stability * 0.08,
  );
}

function getLevel(score) {
  if (score >= 78) return { title: "积极关注", tone: "strong" };
  if (score >= 66) return { title: "谨慎持有", tone: "strong" };
  if (score >= 54) return { title: "中性观望", tone: "watch" };
  return { title: "控制仓位", tone: "risk" };
}

function tagByScore(score, labels = ["偏弱", "中性", "偏强", "优秀"]) {
  if (score >= 82) return labels[3];
  if (score >= 66) return labels[2];
  if (score >= 52) return labels[1];
  return labels[0];
}

function classByScore(score) {
  if (score >= 66) return "strong";
  if (score >= 52) return "watch";
  return "risk";
}

function makeConclusion(stock, score) {
  const trend = stock.momentum >= 70 ? "趋势动能较强" : stock.momentum >= 55 ? "趋势处于修复区间" : "短期趋势仍偏弱";
  const value = stock.valuation >= 70 ? "估值具备一定安全边际" : stock.valuation >= 52 ? "估值处于合理区间" : "估值消化仍需时间";
  const quality = stock.fundamental >= 75 ? "基本面质量较稳健" : stock.fundamental >= 58 ? "基本面表现中性" : "基本面仍有修复压力";
  const capital = stock.capital >= 68 ? "资金关注度较好" : "资金面尚未形成持续共识";

  return `${stock.name}综合评分 ${score} 分，${trend}，${value}，${quality}，${capital}。当前结论适合做观察与仓位管理参考，仍需结合最新公告、行业景气度与个人风险承受能力。`;
}

function makeAdvice(stock, score) {
  const level = getLevel(score);
  const bandLow = stock.price * (score >= 66 ? 1.08 : 0.98);
  const bandHigh = stock.price * (score >= 66 ? 1.18 : 1.08);
  const support = stock.price * (score >= 66 ? 0.92 : 0.88);

  if (score >= 78) {
    return {
      level,
      text: "中长期逻辑较顺，适合加入重点观察；若短线快速拉升，优先等待回踩确认。",
      upside: `上行观察区间：${formatNumber(bandLow)} - ${formatNumber(bandHigh)} 元`,
      position: "仓位建议：分批跟踪，单一标的不宜过度集中",
      risk: `风险提示：若跌破 ${formatNumber(support)} 元且放量走弱，需降低仓位`,
    };
  }

  if (score >= 66) {
    return {
      level,
      text: "整体质量尚可，但安全边际不算充分；更适合作为组合中的观察或持有标的。",
      upside: `上行观察区间：${formatNumber(bandLow)} - ${formatNumber(bandHigh)} 元`,
      position: "仓位建议：轻仓或维持既有仓位，等待更明确的量价信号",
      risk: `风险提示：若跌破 ${formatNumber(support)} 元，说明趋势可能转弱`,
    };
  }

  if (score >= 54) {
    return {
      level,
      text: "多空信号并不充分，短期性价比一般；优先等待基本面或资金面改善。",
      upside: `上行观察区间：${formatNumber(bandLow)} - ${formatNumber(bandHigh)} 元`,
      position: "仓位建议：以观望为主，避免情绪化追涨",
      risk: "风险提示：板块热度回落或业绩低于预期时，波动可能放大",
    };
  }

  return {
    level,
    text: "当前风险收益比偏弱，除非有明确研究依据，否则不宜主动提高仓位。",
    upside: `反弹观察区间：${formatNumber(bandLow)} - ${formatNumber(bandHigh)} 元`,
    position: "仓位建议：控制风险暴露，等待趋势与基本面同步改善",
    risk: "风险提示：若继续缩量下行，应优先保护本金与流动性",
  };
}

function renderSparkline(svg, values) {
  const width = 220;
  const height = 70;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - 8 - ((value - min) / range) * (height - 18);
    return [x, y];
  });
  const path = points.map(([x, y], index) => `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const last = points[points.length - 1];
  svg.innerHTML = `<path d="${path}"></path><circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="4"></circle>`;
}

function renderBars(container, baseScore) {
  const values = Array.from({ length: 8 }, (_, index) => clamp(baseScore - 28 + ((index * 17) % 39), 18, 92));
  container.innerHTML = values.map((value) => `<span style="height:${value}%"></span>`).join("");
}

function renderFlows(container, stock) {
  const values = Array.from({ length: 8 }, (_, index) => ((hashText(stock.code) + index * 19) % 80) - 28);
  container.innerHTML = values
    .map((value) => {
      const height = clamp(Math.abs(value), 8, 64);
      const className = value < 0 ? "negative" : "";
      return `<span class="${className}" style="height:${height}%"></span>`;
    })
    .join("");
}

function renderMetrics(stock) {
  const metrics = [
    ["市盈率 TTM", `${stock.pe.toFixed(1)}x`, "估值越低，安全边际通常越高"],
    ["市净率 LF", `${stock.pb.toFixed(2)}x`, "需结合行业资产属性判断"],
    ["ROE", percent(stock.roe), "衡量股东权益回报能力"],
    ["毛利率", percent(stock.grossMargin), "反映产品或服务议价能力"],
    ["营收增速", percent(stock.revenueGrowth), "关注增长持续性与基数效应"],
    ["资产负债率", percent(stock.debt), "杠杆水平需与现金流一起看"],
    ["经营现金流", `${stock.cashflow.toFixed(1)} 亿`, "现金流质量影响长期韧性"],
    ["机构持股", percent(stock.institution), "反映中长期资金关注度"],
  ];

  elements.metricTable.innerHTML = metrics
    .map(
      ([label, value, help]) => `
        <div class="metric-cell">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${help}</small>
        </div>
      `,
    )
    .join("");
}

function renderHistory() {
  elements.history.innerHTML = `
    <div class="history-row header">
      <span>股票名称</span>
      <span>代码</span>
      <span>评分</span>
      <span>建议</span>
    </div>
    ${records
      .slice(0, 6)
      .map(
        ([name, code, score, advice]) => `
          <div class="history-row">
            <strong>${name}</strong>
            <span>${code}</span>
            <span>${score}</span>
            <span class="advice">${advice}</span>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderStock(stock, elapsed = 0) {
  const score = getScore(stock);
  const advice = makeAdvice(stock, score);
  const levelClass = advice.level.tone;
  const dashOffset = 339.3 - (339.3 * score) / 100;

  currentStock = stock;
  elements.stockName.textContent = stock.name;
  elements.stockCode.textContent = stock.code;
  elements.stockMarket.textContent = stock.market;
  elements.stockIndustry.textContent = stock.industry;
  elements.analysisTime.textContent = new Date().toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  elements.stockPrice.textContent = formatNumber(stock.price);
  elements.stockChange.textContent = `${stock.change >= 0 ? "+" : ""}${percent(stock.change)}`;
  elements.stockChange.className = stock.change >= 0 ? "up" : "down";
  elements.stockPe.textContent = `${stock.pe.toFixed(1)}x`;
  elements.stockRoe.textContent = percent(stock.roe);
  elements.stockTurnover.textContent = percent(stock.turnover);
  elements.stockLiquidity.textContent = stock.liquidity;
  elements.conclusionText.textContent = makeConclusion(stock, score);
  elements.elapsedTime.textContent = elapsed ? `本次分析用时 ${elapsed} ms` : "预计用时 < 1 秒";
  elements.overallScore.textContent = score;
  elements.scoreArc.style.strokeDashoffset = dashOffset;
  elements.adviceTitle.textContent = advice.level.title;
  elements.adviceTitle.className = levelClass;
  elements.adviceText.textContent = advice.text;
  elements.upsideText.textContent = advice.upside;
  elements.positionText.textContent = advice.position;
  elements.riskText.textContent = advice.risk;

  updateFactor("momentum", stock.momentum, tagByScore(stock.momentum), "股价趋势、均线结构与相对强度共同驱动该评分。");
  updateFactor("valuation", stock.valuation, tagByScore(stock.valuation, ["偏贵", "合理", "低估", "低估"]), "结合 PE、PB 与盈利质量评估估值压力。");
  updateFactor("fundamental", stock.fundamental, tagByScore(stock.fundamental), "盈利能力、收入增长、现金流与资产负债表构成基本面评分。");
  updateFactor("capital", stock.capital, tagByScore(stock.capital), "资金评分来自换手、机构关注和资金流估算。");
  updateFactor("sentiment", stock.sentiment, tagByScore(stock.sentiment, ["偏冷", "中性", "活跃", "过热"]), "情绪评分用于识别短期热度，不代表长期价值。");

  renderSparkline(elements.momentumSpark, stock.spark);
  renderSparkline(
    elements.sentimentSpark,
    stock.spark.map((value, index) => clamp(value - 10 + ((index * 11) % 22), 18, 90)),
  );
  elements.valuationMarker.style.left = `${clamp(100 - stock.valuation, 8, 92)}%`;
  renderBars(elements.fundamentalBars, stock.fundamental);
  renderFlows(elements.capitalFlows, stock);
  renderMetrics(stock);

  const entry = [stock.name, stock.code, score, advice.level.title];
  records = [entry, ...records.filter((item) => item[1] !== stock.code)].slice(0, 8);
  renderHistory();
}

function updateFactor(key, score, tag, text) {
  elements[`${key}Score`].textContent = score;
  elements[`${key}Tag`].textContent = tag;
  elements[`${key}Tag`].className = `tag ${classByScore(score)}`;
  elements[`${key}Text`].textContent = text;
}

function setLoading(isLoading) {
  elements.button.disabled = isLoading;
  elements.loading.hidden = !isLoading;
}

function analyze(query) {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    elements.helper.textContent = "请先输入股票代码或公司名。";
    elements.helper.classList.add("error");
    elements.input.focus();
    return;
  }

  elements.helper.textContent = "正在快速计算，请稍候。";
  elements.helper.classList.remove("error");
  setLoading(true);

  const stock = findStock(cleanQuery) || makeEstimatedStock(cleanQuery);
  const startedAt = performance.now();
  const latency = 360 + (hashText(cleanQuery) % 360);

  window.setTimeout(() => {
    const elapsed = Math.round(performance.now() - startedAt);
    renderStock(stock, elapsed);
    elements.helper.textContent = findStock(cleanQuery)
      ? "已完成样本标的分析。"
      : "未匹配到内置样本，已按输入生成估算分析。";
    setLoading(false);
  }, latency);
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  analyze(elements.input.value);
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    elements.input.value = button.dataset.query;
    analyze(button.dataset.query);
  });
});

elements.clear.addEventListener("click", () => {
  elements.input.value = "";
  elements.helper.textContent = "支持沪深京 A 股代码与常见公司简称。";
  elements.helper.classList.remove("error");
  elements.input.focus();
});

elements.save.addEventListener("click", () => {
  elements.save.classList.toggle("saved");
  elements.save.lastChild.textContent = elements.save.classList.contains("saved") ? " 已观察" : " 加入观察";
});

elements.resetHistory.addEventListener("click", () => {
  records = [...defaultHistory];
  renderHistory();
});

renderStock(currentStock);
