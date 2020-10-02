var videos, sources, i, l, orig, current, modified;
sources = document.getElementsByTagName('source');
for (i = 0, l = sources.length; i < l; i++) {
    orig = sources[i].getAttribute('src');
    sources[i].setAttribute('data-orig', orig);
    sources[i].setAttribute('src', orig.replace(/(\w+)\.(\w+)/, 'bumper-in.$2'));
}
videos = document.getElementsByTagName('video');
for (i = 0, l = videos.length; i < l; i++) {
    videos[i].load();
    modified = false;
    videos[i].addEventListener('ended', function() {
        sources = this.getElementsByTagName('source');
        for (i = 0, l = sources.length; i < l; i++) {
            orig = sources[i].getAttribute('data-orig');
            if (orig) {
                sources[i].setAttribute('src', orig);
                modified = true;
            } else {
                current = sources[i].getAttribute('src');
                if (current.indexOf('bumper-out') == -1) {
                    sources[i].setAttribute('src', current.replace(/([\w]+)\.(\w+)/, 'bumper-out.$2'));
                    modified = true;
                } else {
                    this.pause();
                    modified = false;
                }
            }
            sources[i].setAttribute('data-orig', '');
        }
        if (modified) {
            this.load();
            this.play();
        }
    });
}