class Player {
  constructor({ playerId }){
    this.playerElement = document.querySelector(`#${playerId}`);
    this.controls = this.playerElement.querySelector('.controls');
    this.progressBar = this.playerElement.querySelector('.progress-bar');
    this.playBtn = this.controls.querySelector('.play');
    this.pauseBtn = this.controls.querySelector('.pause');
    this.forwardBtn = this.controls.querySelector('.forward');
    this.backwardBtn = this.controls.querySelector('.backward');
    this.audioElement = this.playerElement.querySelector('audio');
    this.audioUm = document.querySelector('#audio1');
    this.audioDois = document.querySelector('#audio2');

    this.handleEventListeners();
  }

  handleEventListeners(){
    this.playBtn.addEventListener('click', () => {
      this.audioElement.play();
    });

    this.pauseBtn.addEventListener('click', () => {
      this.audioElement.pause();
    });

    this.forwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime += 10;
    });

    this.backwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime -= 10;
    });

    this.audioElement.addEventListener('timeupdate', () => {
      const {
        currentTime,
        duration,
      } = this.audioElement;
      this.progressBar.style.width = `${100 * currentTime / duration}%`;
    });

    document.querySelector('#range1').addEventListener('change', () => {
      console.log('mudou');
      this.audioUm.currentTime = document.querySelector('#range1').value*1.95;
    });

    document.querySelector('#range2').addEventListener('change', () => {
      console.log('mudou');
      this.audioDois.currentTime = document.querySelector('#range2').value*2.05;
    });
  }
}