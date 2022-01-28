import React from 'react';

function ThemeSwitchButton(props) {
  let active;
  let buttonClassName;
  if (props.dark) {
    active = 'dark';
    buttonClassName = 'SwitchBtn SwitchBtn-Active';
  } else {
    active = 'light';
    buttonClassName = 'SwitchBtn';
  }

  const activeDayIcon = `/assets/img/${active}-theme/icon-day.svg`;
  const activeNightIcon = `/assets/img/${active}-theme/icon-night.svg`;

  return (
    <div className="DarkThemeSwitchBtn-wrapper">
      <picture className="ThemeIndicator-Icon">
        <img alt="icon for lite theme" height={150} src={activeDayIcon} width={150} />
      </picture>
      <div className="SwitchBtn-Track" onClick={props.changeTheme}>
        <button className={buttonClassName} />
      </div>
      <picture className="ThemeIndicator-Icon">
        <Image alt="icon for dark theme" height={150} src={activeNightIcon} width={150} />
      </picture>
    </div>
  );
}

export default ThemeSwitchButton;
