export enum Icons {
  DASHBOARD = 'dashboard',
  CASH_BOOK = 'cash_book',
  ANALYSIS = 'analysis',
  CASH_FLOW = 'cahs_flow',
  REGISTER = 'register',
  CLOSE = 'close',
  DIRECTION_RIGHT = 'direction_right',
  INFO = 'info',
  UNDO = 'undo',
  WARNING = 'warning',
  STOP = 'stop',
  MORE = 'more',
  CHECK = 'check',
  COMPARE = 'compare',
  AREA_CONTROL = 'area_control',
  AREA_ANALYSE = 'area_analyse',
  AREA_PLAN = 'area_plan',
  REGISTER_ADD = 'register_add',
  SEAL_NEW = 'seal_new',
  UPGRADE = 'upgrade',
  USER = 'user',
  BELL = 'bell',
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface SvgProps {
  color: string;
  width: number;
  height: number;
}

export type IconSize = 'sm' | 'default' | 'lg' | 'xs' | 'xxs';
