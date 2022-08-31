import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 13px;
  box-shadow: ${({ theme }) => theme.containerDropShadow};
  border-radius: 0 0 5px 5px;

  .rw-container-main {
    color: ${({ theme }) => theme.locationFontColor};
    height: 100%;
    width: 100%;
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.gradientStart}, ${theme.gradientMid}, ${theme.gradientEnd})`};
    display: flex;
    border-radius: ${({ showForecast }) =>
      showForecast ? '5px 5px 0 0' : '12px'};
  }

  .rw-container-header {
    margin: 0 0 10px 0;
    font-weight: 300;
    font-size: x-large;
    letter-spacing: 2px;
  }

  .rw-container-left {
    padding: 25px;
    width: 75%;
  }

  .rw-container-right {
    background-color: rgba(0, 0, 0, 0.1);
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rw-today-date {
    color: ${({ theme }) => theme.todayDateFontColor};
    font-size: 16px;
    margin: 0 0 10px 0;
  }

  .rw-today-hr {
    width: 10px;
    height: 80px;
    border-left: solid 1px #fff;
    opacity: 0.4;
    margin: 0px 10px 0px 20px;
  }

  .rw-today-current {
    font-size: 45px;
    color: ${({ theme }) => theme.todayTempFontColor};
  }

  .rw-today-range {
    color: ${({ theme }) => theme.todayRangeFontColor};
    font-size: 14px;
    margin: 0 0 5px 2px;
  }

  .rw-today-desc {
    color: ${({ theme }) => theme.todayDescFontColor};
    font-size: 16px;
    margin-top: 16px;
  }

  .rw-today-info {
    color: ${({ theme }) => theme.todayInfoFontColor};
    font-size: 16px;
  }

  
`;
