
/** Light Theme */
const light_text_color = '#000000'
const light_subtitle_color = '#dbdbdb'
const light_background_color = '#fff'
const light_modal_body = '#1E1E1E'
const light_overlay = "#2F2F2F"

/** Dark Theme */
const dark_text_color = '#fff'
const dark_subtitle_color = '#dbdbdb'
const dark_background_color = '#2C2C2C'
const dark_modal_body = '#333333'
const dark_overlay = '#2F2F2F'

const dark_high_empahis = 'rgb(0 0 0 / 87%)'
const dark_medium_emphasis = 'rgb(0 0 0 / 60%)';
const dark_low_emphasis = 'rgb(0 0 0 / 38%)';

/** Opacity */
const ligh_high_emphasis = 'rgb(255 255 255 / 87%)' ;
const ligh_medium_emphasis = 'rgb(255 255 255 / 60%)';
const ligh_low_emphasis = 'rgb(255 255 255 / 38%)';

const modalProps = {

  borderBottom: '#4c4c4c'
}

export const lightTheme = {
  body: light_background_color,
  title: light_text_color,
  subtitle: light_subtitle_color,
  modal: light_modal_body,
  overlay: light_overlay,
  texts: {
    high: ligh_high_emphasis,
    medium: ligh_medium_emphasis,
    low: ligh_low_emphasis
  }
}

export const darkTheme = {
  body: dark_background_color,
  title: dark_text_color,
  subtitle: dark_subtitle_color,
  modal: dark_modal_body,
  overlay: dark_overlay,
  texts: {
    high: dark_high_empahis,
    medium: dark_medium_emphasis,
    low: dark_low_emphasis
  }
}

export const medias = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992, 
  xl: 1200,
  xxl: 1400,
  xxxl: 2400
}