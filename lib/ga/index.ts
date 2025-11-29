import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-9WM4HJK01C";

export const initGA = () => {
  if (typeof window !== "undefined") {
    ReactGA.initialize(MEASUREMENT_ID);
  }
};

export const trackPage = (path: string) => {
  if (typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (typeof window !== "undefined") {
    ReactGA.event({ category, action, label });
  }
};
