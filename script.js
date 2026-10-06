const STORAGE_KEY = "drip-lesson-1-5-application"

// Основные элементы уже найдены: практика посвящена пути данных, а не верстке.
const form = document.querySelector(".application-form")
const result = document.querySelector("#result")
const clearButton = document.querySelector("#clear-draft")
const localStorageStatus = document.querySelector("#local-storage-status")
const sessionStorageStatus = document.querySelector("#session-storage-status")

const nameInput = document.querySelector("#participant-name")
const emailInput = document.querySelector("#participant-email")
const topicSelect = document.querySelector("#workshop-topic")

// БЛОК 5.1
// Получите строку из localStorage. Если она существует, вызовите JSON.parse,
// верните три значения в поля и обновите result и localStorageStatus.
const storedValue = localStorage.getItem(STORAGE_KEY)
if (storedValue) {
    const parsedStoreValue = JSON.parse(storedValue)
    nameInput.value = parsedStoreValue.name
    emailInput.value = parsedStoreValue.email
    topicSelect.value = parsedStoreValue.topic
    result.textContent = "Черновик восстановлен"
    localStorageStatus.textContent = "Найден сохраненный черновик"
}

// БЛОКИ 1–4
// 1.2: замените событие click на submit.
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // 1.3: первой строкой остановите стандартное действие формы.

    console.log("1.2. Получено событие", event.type)

    // 1.3: затем покажите временное сообщение в result.


    // 3.1: создайте FormData текущей формы.
    const formData = new FormData(form)


    // 3.2: получите name, email и topic через метод get.
    const name = formData.get("name")
    const email = formData.get("email")
    const topic = formData.get("topic")


    // 3.3: проверьте значения в Console и покажите подтверждение в result.
    console.log(name);
    console.log(email);
    console.log(topic);

    result.textContent = `${name}, заявка на тему «${topic}» принята. Подтверждение: ${email}`


    // 4.1: объедините три значения в объект application.
    const application = {
        name,
        email,
        topic,
    }


    // 4.2: превратите application в строку applicationJson.
    const applicationJson = JSON.stringify(application)
    console.log(application)
    console.log(applicationJson)


    // 4.3: сохраните строку в localStorage и обновите localStorageStatus.
    localStorage.setItem(STORAGE_KEY, applicationJson)
    localStorageStatus.textContent = "Черновик сохранен"

    // 5.3: сохраните ту же строку в sessionStorage и обновите sessionStorageStatus.
})


// БЛОК 5.2
clearButton.addEventListener("click", () => {
    // Удалите обе записи, сбросьте форму и обновите три сообщения на странице.
})
