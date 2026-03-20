import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { InvoiceGenerator } from "./pages/InvoiceGenerator";
import { InvoiceHistory } from "./pages/InvoiceHistory";
import { GSTRatesGuide } from "./pages/GSTRatesGuide";
import { HowToCalculateGST } from "./pages/HowToCalculateGST";
import { AboutGST } from "./pages/AboutGST";
import { GSTTips } from "./pages/GSTTips";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "invoice-generator", Component: InvoiceGenerator },
      { path: "invoice-history", Component: InvoiceHistory },
      { path: "gst-rates", Component: GSTRatesGuide },
      { path: "how-to-calculate-gst", Component: HowToCalculateGST },
      { path: "about-gst", Component: AboutGST },
      { path: "gst-tips", Component: GSTTips },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
      { path: "*", Component: NotFound },
    ],
  },
]);