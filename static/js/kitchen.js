//(function (window, document) {

    function receivedText(e) {
        lines = e.target.result;
        var obj = JSON.parse(lines);
        alert('obj[a]=' + obj['a'] + ', obj[c] = ' + obj['c']);
    }

    function handleSelection() {
        var files = document.getElementById('input').files;
        if (!files.lenght) {
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(files[0]);
        }
    }

    function triggerDialog() {
        document.getElementById('input').click();
    }

    function instructDom() {
        var button = document.getElementById('button');
        button.addEventListener('click', triggerDialog);

        var file = document.getElementById('input');
        file.addEventListener('change', handleSelection, false);
    }

//})(window, document);
