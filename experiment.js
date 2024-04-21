class Experiment {
  // Group Details
  static rollNos = '102117151,102117153,102297020'
  static names = 'Dev Inder Garg,Armandeep Singh,Yaman Bansal'

  canvasSel = '#myCanvas'

  run() {

    this.hideSteppers()
    canvasSetup(this.canvasSel)

    const race = new Race(this.canvasSel)
    const raceRafFn = (ts) => {
      race.startRace();
      window.requestAnimationFrame(raceRafFn);
    };

    window.requestAnimationFrame(raceRafFn);


  }

  runSteppers() {

    // Steppers
    // --------------------------------------------------
    const stepperOneRaf
      = window.requestAnimationFrame(stepperOne)

    const stepperTwoRaf
      = window.requestAnimationFrame(stepperTwo)

    const stepperThree = new StepperThree(
      '#valueFromStepperThree', 15
    )
    const stepperThreeFn = (ts) => {
      if (!stepperThree.isActive) stepperThree.start()
      stepperThree.step(ts)
      window.requestAnimationFrame(stepperThreeFn)
    }
    const stepperThreeRaf
      = window.requestAnimationFrame(stepperThreeFn)
    // --------------------------------------------------

  }

  hideSteppers() {
    document.querySelector('#side-note')
      .classList.add('hidden')
  }
}
