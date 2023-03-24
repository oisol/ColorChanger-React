import { createGlobalStyle } from "styled-components";

// typar o bodyBG é uma solução para erro "Property 'bodyBg' does not exist on type 'DefaultTheme'."
export interface DefaultTheme {
    bodyBg: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
* {
    margin: 0;
}

body {
    height: 100vh;
    background-color: ${({ theme }) => theme.bodyBg};
}
`;