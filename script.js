document.getElementById('generateButton').addEventListener('click', function() {
    var loadingText = document.getElementById('loading');
    var protocolText = document.getElementById('protocolNumber');

    // Mostrar texto de loading e ocultar o número de protocolo
    loadingText.style.display = 'block';
    protocolText.textContent = '';

    setTimeout(function() {
        var now = new Date();
        var year = now.getFullYear();
        var month = ('0' + (now.getMonth() + 1)).slice(-2);
        var day = ('0' + now.getDate()).slice(-2);
        var hours = ('0' + now.getHours()).slice(-2);
        var minutes = ('0' + now.getMinutes()).slice(-2);
        var seconds = ('0' + now.getSeconds()).slice(-2);
        var protocolNumber = `${year}${month}${day}${hours}${minutes}${seconds}`;

        // Ocultar texto de loading e mostrar o número de protocolo
        loadingText.style.display = 'none';
        protocolText.textContent = `Número de Protocolo: ${protocolNumber}`;
    }, 2500); // 2500 milissegundos = 2.5 segundos
});
