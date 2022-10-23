export interface BannerData {
  displayText?: string;
  displayIcon?: string;
  displayImage?: string;
  targetUrl?: string;

  childData?: BannerData[];
}
