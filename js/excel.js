'use strict';

let user = JSON.parse(localStorage.getItem('user'));

if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    fetch('https://script.google.com/macros/s/AKfycbyV2b_CW3DwoJK9u-IYRjewq1K-WPyi8uW2nHTfVX2_lIoVi3xFilbJa79qDHV5A13p/exec', {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(() => {
            localStorage.clear();
        })
} else {
    localStorage.clear();
}
