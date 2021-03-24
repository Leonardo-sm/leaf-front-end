import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      menu: string;
      green: string;
      selected: string;
      text: string;
      placeholder: string;
      blue: string;
      lightPurple: string;
      chatBackground: string;
    };
  }
}
