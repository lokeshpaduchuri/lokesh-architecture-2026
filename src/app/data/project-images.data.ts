import { ImageAsset } from '../models/image-asset.model';

export const PORTFOLIO_IMAGE: ImageAsset = {
  src: '/assets/images/projects/portfolio-implementation.png',
  width: 1280,
  height: 650,
};

export function resolveProjectImage(src: string): ImageAsset {
  return src === PORTFOLIO_IMAGE.src ? PORTFOLIO_IMAGE : { src, width: 1672, height: 941 };
}
