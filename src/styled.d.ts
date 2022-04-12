import 'styled-components';

type colors =
  | 'primarySuperDark'
  | 'primaryDark'
  | 'primary'
  | 'primaryLight'
  | 'primarySuperLight'
  | 'accentSuperDark'
  | 'accentDark'
  | 'accent'
  | 'accentLight'
  | 'accentSuperLight'
  | 'dangerLight'
  | 'danger'
  | 'successLight'
  | 'success';

type fontSizes = 'xxs' | 'xs' | 's' | 'base' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [T in colors]: string;
    };
    fontSizes: {
      [T in fontSizes]: string;
    };
    radius: string;
  }
}
