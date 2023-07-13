class Camera {
    constructor(videoNode) {
        this.videoNode = videoNode;
    }

    power() {
        console.log("Se abrio la camara");
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 100,
                height: 100
            }
        }).then((stream) => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        })
    }

    off() {
        this.videoNode.pause();
        if (this.stream) {
            this.stream.getTracks()[0].stop();
        }
    }

    takePhoto() {
        let canvas = document.createElement('canvas');
        canvas.setAttribute('width', 100);
        canvas.setAttribute('height', 100);
        let context = canvas.getContext('2d');
        context.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);
        this.photo = context.canvas.toDataURL();
        canvas = null;
        context = null;
        return this.photo;
    }

}

