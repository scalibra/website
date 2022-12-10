import { AnalyticsBrowser } from "@segment/analytics-next";

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.ANALYTICS_WRITE_KEY,
});

export default analytics;
