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


// БЛОКИ 1–4
form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("1.2. Получено событие", event.type)

  result.textContent = "Форма обработана без перезагрузки"


  // 3.1: создайте FormData текущей формы.


  // 3.2: получите name, email и topic через метод get.


  // 3.3: проверьте значения в Console и покажите подтверждение в result.


  // 4.1: объедините три значения в объект application.


  // 4.2: превратите application в строку applicationJson.


  // 4.3: сохраните строку в localStorage и обновите localStorageStatus.


  // 5.3: сохраните ту же строку в sessionStorage и обновите sessionStorageStatus.
})


// БЛОК 5.2
clearButton.addEventListener("click", () => {
  // Удалите обе записи, сбросьте форму и обновите три сообщения на странице.
})
