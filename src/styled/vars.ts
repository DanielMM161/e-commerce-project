
/** Light Theme */
const light_text_color = '#000000'
const light_subtitle_color = '#dbdbdb'
const light_background_color = '#fff'
const light_modal_body = '#fff'
const light_overlay = "#2F2F2F"
const light_shadow_color = "0 0 0"
const light_background_input = "#fff"

/** Dark Theme */
const dark_text_color = '#fff'
const dark_subtitle_color = '#dbdbdb'
const dark_background_color = '#2C2C2C'
const dark_modal_body = '#333333'
const dark_overlay = '#2F2F2F'
const dark_shadow_color = "147 147 147"
const dark_background_input = "#8f8f8f"

/** Opacity */
const high_emphasis = '87%' ;
const medium_emphasis = '60%';
const low_emphasis = '38%';

export const textOpacity = {
  high: high_emphasis,
  medium: medium_emphasis,
  low: low_emphasis
}

const modalProps = {
  shadowHeader: '#4c4c4c'
}

export const lightTheme = {
  body: light_background_color,
  title: light_text_color,
  subtitle: light_subtitle_color,
  modal: light_modal_body,
  overlay: light_overlay,
  shadowColor: light_shadow_color,
  backgroundInpt: light_background_input
}

export const darkTheme = {
  body: dark_background_color,
  title: dark_text_color,
  subtitle: dark_subtitle_color,
  modal: dark_modal_body,
  overlay: dark_overlay,
  shadowColor: dark_shadow_color,
  backgroundInpt: dark_background_input
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