/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { configIcons } from './svg/buildSvg';
import { IconSize, Icons } from './types.icon';

interface Props {
  type: Icons;
  className: string;
  size?: IconSize;
}

interface DefineSize {
  width: number;
  height: number;
}

const sizes = new Map<IconSize, DefineSize>();

sizes.set('xxs', { width: 10, height: 10 });
sizes.set('xs', { width: 15, height: 15 });
sizes.set('sm', { width: 20, height: 20 });
sizes.set('lg', { width: 30, height: 30 });
sizes.set('default', { width: 25, height: 25 });

const defineSize = (size?: IconSize): DefineSize => {
  if (!size) {
    return sizes.get('default')!;
  }
  return sizes.get(size)!;
};

export const Icon: React.FC<Props> = ({ type, className, size }) => {
  const { height, width } = defineSize(size);

  return configIcons[type]({ color: className, height, width });
};
