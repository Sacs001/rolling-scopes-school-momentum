// Local Storage Greeting

document.addEventListener("beforeunload", () => {
    localStorage.setItem('name', enterYourName.value)
});

document.addEventListener("load", () => {
    if (localStorage.getItem("name")) enterYourName.value = LocalStorage.getItem('name')

});
