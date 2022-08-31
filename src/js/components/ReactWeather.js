import React from 'react';
import PropTypes from 'prop-types';
import Today from './Today';
import Forecast from './Forecast';
import WeatherIcon from './WeatherIcon';
import { StyledContainer } from './ReactWeather.styles';
import defaultTheme from '../defaultTheme';
import {getLabelsByLanguage} from "../utils";

const ReactWeather = ({
  unitsLabels,
  showForecast,
  lang,
  data,
  locationLabel,
  isLoading,
  errorMessage,
  theme,
}) => {
  if (data) {
    const { forecast, current } = data;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    const hasRange =
        current.temperature.min !== undefined &&
        current.temperature.max !== undefined;
    const labels = getLabelsByLanguage(lang);

    return (
        <div style={{width:'1340px'}}>
          <StyledContainer className="rw-container" theme={theme} s>
            <div className="rw-container-main">
              <div className="rw-container-left">
                <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly',alignItems: 'flex-end'}}>
                  <div>
                    <h2 className="rw-container-header">{locationLabel}</h2>
                    <div className="rw-today-date">{current.date}</div>
                  </div>
                  <div className="rw-today-hr"/>

                  <div>
                    <div className="rw-today-current">
                      {current.temperature.current} {unitsLabels.temperature}
                    </div>
                    {hasRange && (
                        <div className="rw-today-range">
                          {current.temperature.max} / {current.temperature.min}{' '}
                          {unitsLabels.temperature}
                        </div>
                    )}
                  </div>

                  <div className="rw-today-hr"/>

                  <div className="rw-today-info">
                    <div>
                      {labels.wind}: <b>{current.wind}</b> {unitsLabels.windSpeed}
                    </div>
                    <div>
                      {labels.humidity}: <b>{current.humidity}</b> %
                    </div>
                    <div className="rw-today-desc">{current.description}</div>
                  </div>

                </div>


              </div>
              <div className="rw-container-right">
                <WeatherIcon
                    path={current.icon}
                    size={120}
                    color={theme.todayIconColor}
                    title={current.description}
                />
              </div>
            </div>
            {showForecast && (
                <Forecast
                    unitsLabels={unitsLabels}
                    forecast={forecast}
                    lang={lang}
                    theme={theme}
                />
            )}
          </StyledContainer>
        </div>

    );
  }
  return null;
};

ReactWeather.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  unitsLabels: PropTypes.object,
  showForecast: PropTypes.bool,
  lang: PropTypes.string,
  locationLabel: PropTypes.string,
  theme: PropTypes.object,
};

ReactWeather.defaultProps = {
  data: null,
  locationLabel: '',
  errorMessage: null,
  isLoading: false,
  unitsLabels: {
    temperature: 'C',
    windSpeed: 'Km/h',
  },
  showForecast: true,
  lang: 'en',
  theme: defaultTheme,
};

export default ReactWeather;
