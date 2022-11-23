export interface BannerData {
  displayText?: string;
  displayIcon?: string;
  displayImage?: string;
  targetUrl?: string;

  childData?: BannerData[];
}

export interface BannerProps {
  bannerData?: BannerData;
}

export type BannerComponent = (props: BannerProps) => JSX.Element;