class Piano {
    constructor() {
        this.pianoEl = document.querySelector('.piano');
        this.fullToneKey = 'img/piano_key.png';
        this.halfToneKey = 'img/piano_halftone_key.png';
        this.fullToneKeyOn = 'img/piano_key_on.png';
        this.halfToneKeyOn = 'img/piano_halftone_key_on.png';
        this.fullToneBoxClass = 'fulltone_box';
        this.halfToneBoxClass = 'halftone_box';
    }

    initEvents() {
        window.addEventListener('keydown', event => {
            const audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);
            const keyEl = document.querySelector(`div[data-key="${event.keyCode}"]`);
            if(audioEl) {
                this.playAudio(audioEl);
                this.setKeyOn(keyEl);
            } else {
                return;
            }
        });

        // window.addEventListener('keyup', event => {
        //     const audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        //     const keyEl = document.querySelector(`div[data-key="${event.keyCode}"]`);
        //     if(audioEl) {
        //         // this.stopAudio(audioEl);
        //         this.setKeyOff(keyEl);
        //     } else {
        //         return;
        //     }
        // });
    }

    playAudio(audio) {
        // audio.currentTime = 0;
        audio.play();
    }
    
    stopAudio(audio) {
        // audio.currentTime = 0;
        // audio.pause();
    }

    setKeyOn(key) {
        const keyParent = key.parentElement;
        const keyImg = key.firstElementChild;        
        if(keyParent.classList.contains(this.fullToneBoxClass)) {
            keyImg.setAttribute('src', this.fullToneKeyOn);
        } else if (keyParent.classList.contains(this.halfToneBoxClass)) {
            keyImg.setAttribute('src', this.halfToneKeyOn);
        }
    }

    setKeyOff(key) {
        const keyParent = key.parentElement;
        const keyImg = key.firstElementChild;        
        if(keyParent.classList.contains(this.fullToneBoxClass)) {
            keyImg.setAttribute('src', this.fullToneKey);
        } else if (keyParent.classList.contains(this.halfToneBoxClass)) {
            keyImg.setAttribute('src', this.halfToneKey);
        }
    }

    
}

const piano = new Piano();

piano.initEvents();
