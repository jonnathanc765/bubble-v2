import LearnVueButton from './components/LearnVuebutton.vue';

export default {
  install: (app, options) => {
    app.component('LearnVueButton', LearnVueButton)
  }
}