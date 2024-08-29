window.onload=function(){
    //LISTA DE BRAWLERS
    const brawlers = [
        { id: 16000000, name: 'Shelly' },
        { id: 16000001, name: 'Colt' },
        { id: 16000002, name: 'Bull' },
        { id: 16000003, name: 'Brock' },
        { id: 16000004, name: 'Rico' },
        { id: 16000005, name: 'Spike' },
        { id: 16000006, name: 'Barley' },
        { id: 16000007, name: 'Jessie' },
        { id: 16000008, name: 'Nita' },
        { id: 16000009, name: 'Dynamike' },
        { id: 16000010, name: 'El Primo' },
        { id: 16000011, name: 'Mortis' },
        { id: 16000012, name: 'Crow' },
        { id: 16000013, name: 'Poco' },
        { id: 16000014, name: 'Bo' },
        { id: 16000015, name: 'Piper' },
        { id: 16000016, name: 'Pam' },
        { id: 16000017, name: 'Tara' },
        { id: 16000018, name: 'Darryl' },
        { id: 16000019, name: 'Penny' },
        { id: 16000020, name: 'Frank' },
        { id: 16000021, name: 'Gene' },
        { id: 16000022, name: 'Tick' },
        { id: 16000023, name: 'Leon' },
        { id: 16000024, name: 'Rosa' },
        { id: 16000025, name: 'Carl' },
        { id: 16000026, name: 'Bibi' },
        { id: 16000027, name: '8-Bit' },
        { id: 16000028, name: 'Sandy' },
        { id: 16000029, name: 'Bea' },
        { id: 16000030, name: 'Emz' },
        { id: 16000031, name: 'Mr. P' },
        { id: 16000032, name: 'Max' },
    ];

    const select = document.getElementById('brawlers');

    brawlers.forEach(brawler => {
        const option = document.createElement('option');
        option.value = brawler.id;
        option.textContent = brawler.name;
        select.appendChild(option);
    });

   //PETICION A API
   document.getElementById("btnPeticion").addEventListener("click", () => {
    const brawlerId = document.getElementById("brawlers").value;
    fetch(`https://api.brawlify.com/v1/brawlers/${brawlerId}`)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(brawler => {
            const brawlerHtml = `
                <div class="seccionbrawlers">
                    <h3 class="nombrebrawler">${brawler.name}</h3>
                    <img class="imagenbrawler" src="${brawler.imageUrl3}">
                </div>
            `;
            document.getElementById('content').innerHTML = brawlerHtml;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}); 
}