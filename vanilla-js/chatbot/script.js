const button = document.querySelector('.collapsible');

button.addEventListener('click', function() {
    this.classList.toggle('active');

        const content = this.nextElementSibling;

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
});

// for get time
function getTIme() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}


function firstBotMessage() {
    let firstMessage = `Hai, Selamat datang di sipesan`;
    document.getElementById('bot-starter-message').innerHTML = `<p class="bot-text"><span>${firstMessage}</span></p>`;

    let time = getTIme();
    $('#chat-timestamp').append(time);
    document.getElementById('user-input').scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = `<p class="bot-text"><span>${botResponse}</span></p>`;

    $('#chatbox').append(botHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

function getResponse() {
    let userText = document.getElementById('text-input').value;

    if(userText == "") {
        userText = "...";
    }

    let userHtml = `<p class="user-text"><span>${userText}</span></p>`;
    
    $('#text-input').val('');
    $('#chatbox').append(userHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000);
}

function sendButton() {
    getResponse();
}

$('#text-input').keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
});

function getBotResponse(input) {
    if(input.includes('halo')) {
        return `Halo, ada yang bisa saya bantu?`;
    } else if(input.includes('cara memesan')) {
        return  `
                    Berikut ini cara memesan produk kami: <br>
                    1. Pastikan anda telah login terlebih dahulu. <br>
                    2. Pilih produk yang di inginkan di setiap menu yang ada. <br>
                    3. Masukkan detail produk. <br>
                    4. Lakukan pembayaran. <br>
                    5. Pesanan akan dikirimkan
                    <br>
                    <br>

                    Selamat berbelanja...
                `;
    } else if(input == "produk") {
        return  `
                   Berikut adalah daftar produk-produk kami: 
                   <br>
                   <br>
                   1. Spanduk. <br>
                   2. Stiker. <br>
                   3. Kartu. Nama <br>
                   4. Undangan. <br>
                   5. Brosur
                `;
    } else if(input.includes('terimakasih')) {
        return  `
                    Terimakasih telah berkunjung
                `;
    } else {
        return `Silahkan coba lagi.`;
    }

}