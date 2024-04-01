var dostavka = document.getElementById('dostavka'),
    oplata = document.getElementById('oplata'),
    tab1 = document.querySelector('.tab1'),
    tab2 = document.querySelector('.tab2'),
    input = document.querySelectorAll('input');
for (var i=0; i<input.length; i++) {
  input[i].onchange = function() {
    if (dostavka.checked) {
      tab1.style.display = 'block';
      tab2.style.display = 'none';
    } else if (oplata.checked) {
      tab1.style.display = 'none';
      tab2.style.display = 'block';
    };
  };
};
const botToken = '7118763595:AAG2EgsoXdklo9duSkrwdtOhyn4EXWGLVrY';
const chatId = '-4128480305';
function sendFormData(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.telegram.org/bot' + botToken + '/sendMessage', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Сообщение успешно отправлено в Telegram');
    } else {
      console.error('Ошибка при отправке сообщения в Telegram');
    }
  };
  const message = {
    chat_id: chatId,
    text: "Новое сообщение из формы обратной связи:\nИмя: " + formData.get("name") + "\nНомер телефона: " + formData.get("phone") + "\nИдея: " + formData.get("message") + "\nКомментарий: " + formData.get("comment"),
  };
  xhr.send(JSON.stringify(message));
}
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  sendFormData(formData);
}
const form = document.getElementById('feedback-form');
form.addEventListener('submit', handleSubmit);

function clearForm() {
  setTimeout(function() {
      document.getElementById("feedback-form").reset();
  }, 200); // 1000 миллисекунд = 1 секунда
}