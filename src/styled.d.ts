import 'styled-components';

type colors = 'primaryDark' | 'primary' | 'primaryLight' | 'danger' | 'success';

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
    shadow: string;
  }
}
