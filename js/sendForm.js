const sendForm = () => {
    const forms = document.querySelectorAll('form');
    const message = {
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
      postData(item);
    });
    
    function postData(form) {
      form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            fetch('../phpmailer/send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            }).then(data => {
                console.log(data);
                alert(message.success);
            }).catch(() => {
                alert(message.failure);
            }).finally(() => {
                form.reset();
            });
      });
    }
}

export {sendForm}