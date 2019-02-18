class Piano {
    constructor() {
        this.pianoEl = document.querySelector('.piano');
        this.fullToneKey = 'img/piano_key.png';
        this.halfToneKey = 'img/piano_halftone_key.png';
        this.fullToneKeyOn = 'img/piano_key_on.png';
        this.halfToneKeyOn = 'img/piano_halftone_key_on.png';
        this.fullToneBoxClass = 'fulltone_box';
        this.halfToneBoxClass = 'halftone_box';
        this.keys = document.querySelectorAll('.piano [data-key]');
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
                this.setKey(elements.keyEl, this.fullToneKey, this.halfToneKey);
            } else {
                return;
            }
        });

        this.keys.forEach(key => {
            key.addEventListener('mousedown', event => {
                let keyCode = event.target.parentElement.dataset.key;
                const elements = this.findClickedElements(keyCode);
                this.playAudio(elements.audioEl);
                this.setKey(elements.keyEl, this.fullToneKeyOn, this.halfToneKeyOn);
            });
        });

        this.keys.forEach(key => {
            key.addEventListener('mouseup', event => {
                let keyCode = event.target.parentElement.dataset.key;
                const elements = this.findClickedElements(keyCode);
                this.setKey(elements.keyEl, this.fullToneKey, this.halfToneKey);
            });
        });
    }

    mouseUpEvent

    findClickedElements(code) {
        const audioEl = document.querySelector(`audio[data-key="${code}"]`);
        const keyEl = document.querySelector(`div[data-key="${code}"]`);
        return { audioEl, keyEl };
    }

    findElements(event) {
        const audioEl = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const keyEl = document.querySelector(`div[data-key="${event.keyCode}"]`);
        return { audioEl, keyEl };
    }

    playAudio(audio) {
        audio.currentTime = 0;
        audio.volume = 0.6;
        audio.play();
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
}

const piano = new Piano();

piano.initEvents();
