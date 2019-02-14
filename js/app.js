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
            const elements = this.findElements(event);
            if(elements.audioEl) {
                this.playAudio(elements.audioEl);
                this.setKey(elements.keyEl, this.fullToneKeyOn, this.halfToneKeyOn);
            } else {
                return;
            }
        });

        window.addEventListener('keyup', event => {
            const elements = this.findElements(event);
            if(elements.audioEl) {
                this.stopAudio(elements.audioEl);
                this.setKey(elements.keyEl, this.fullToneKey, this.halfToneKey);
            } else {
                return;
            }
        });
    }

    findElements(event) {
        const audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const keyEl = document.querySelector(`div[data-key="${event.keyCode}"]`);
        return { audioEl, keyEl };
    }

    playAudio(audio) {
        audio.play();
    }
    
    stopAudio(audio) {
        audio.currentTime = 0;
        audio.pause();
    }

    setKey(key, fullToneImg, halfToneImg) {
        const keyParent = key.parentElement;
        const keyImg = key.firstElementChild;        
        if(keyParent.classList.contains(this.fullToneBoxClass)) {
            keyImg.setAttribute('src', fullToneImg);
        } else if (keyParent.classList.contains(this.halfToneBoxClass)) {
            keyImg.setAttribute('src', halfToneImg);
        }
    }

    // setKeyOn(key) {
    //     const keyParent = key.parentElement;
    //     const keyImg = key.firstElementChild;        
    //     if(keyParent.classList.contains(this.fullToneBoxClass)) {
    //         keyImg.setAttribute('src', this.fullToneKeyOn);
    //     } else if (keyParent.classList.contains(this.halfToneBoxClass)) {
    //         keyImg.setAttribute('src', this.halfToneKeyOn);
    //     }
    // }

    // setKeyOff(key) {
    //     const keyParent = key.parentElement;
    //     const keyImg = key.firstElementChild;        
    //     if(keyParent.classList.contains(this.fullToneBoxClass)) {
    //         keyImg.setAttribute('src', this.fullToneKey);
    //     } else if (keyParent.classList.contains(this.halfToneBoxClass)) {
    //         keyImg.setAttribute('src', this.halfToneKey);
    //     }
    // }

    
}

const piano = new Piano();

piano.initEvents();
