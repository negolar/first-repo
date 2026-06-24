# A股智能研判

一个可直接部署到 GitHub Pages 的静态网页。用户输入 A 股股票代码或公司名后，点击“开始分析”即可在约 1 秒内看到研究结论、综合评分、风险提示与投资建议。

## 本地预览

直接在浏览器中打开 `index.html` 即可使用；也可以用任意静态服务器预览。

## 部署到 GitHub Pages

1. 将本目录提交到 GitHub 仓库。
2. 在仓库设置中进入 `Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub 生成线上地址。

## 数据说明

当前版本使用内置样本数据与浏览器端启发式模型，优点是响应快、无需后端、适合 GitHub Pages。后续如果要接入真实行情、财报或新闻数据，可在 `script.js` 的 `findStock` / `makeEstimatedStock` 附近替换为真实 API 数据源。

页面输出仅供研究参考，不构成投资建议。
