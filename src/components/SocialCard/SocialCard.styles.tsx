import styled from "styled-components";

export const IconImage = styled.img`
    width: 38.04px;
    filter: contrast(${ ({ theme }) => theme.icon });

    &:hover {
        scale: 115%;
    }
`
