"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Nadya",
          email: "naDya89@mail.ru",
          password: await bcrypt.hash("naDya89@mail.ru", 10),
          isAdmin: false,
        },
        {
          name: "Ernest",
          email: "ernEst47@mail.ru",
          password: await bcrypt.hash("ernEst47@mail.ru", 10),
          isAdmin: false,
        },
        {
          name: "Admin",
          email: "isadmin@mail.ru",
          password: await bcrypt.hash("isAdmin123!", 10),
          isAdmin: true,
        },
        {
          name: "Andrey",
          email: "AnDrey547@mail.ru",
          password: await bcrypt.hash("AnDrey547@mail.ru", 10),
          isAdmin: false,
        },
        {
          name: "Alan",
          email: "AlahaM747@mail.ru",
          password: await bcrypt.hash("AlahaM747@mail.ru", 10),
          isAdmin: false,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Contents",
      [
        {
          user_id: 3,
          word: "Closure",
          desc: "Функция, которая сохраняет доступ к переменным из внешней (лексической) области видимости даже после завершения выполнения внешней функции.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Hoisting",
          desc: "Механизм JavaScript, при котором объявления переменных и функций перемещаются в начало своей области видимости перед выполнением кода.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          word: "Promise",
          desc: "Объект, представляющий промежуточное состояние операции, которая может завершиться успешно или с ошибкой в будущем.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Callback",
          desc: "Функция, передаваемая в другую функцию в качестве аргумента и вызываемая по завершении какой-либо операции.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word: "Event Loop",
          desc: "Механизм, который позволяет JavaScript обрабатывать асинхронные операции, несмотря на свою однопоточную природу.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Prototype",
          desc: "Механизм наследования в JavaScript, при котором объекты могут наследовать свойства и методы от других объектов.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word: "this",
          desc: "Ключевое слово, которое ссылается на объект, в контексте которого вызвана функция.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          word: "Arrow Function",
          desc: "Краткий синтаксис для записи функций, который не создаёт собственного контекста this.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Strict Mode",
          desc: "Режим выполнения кода с более строгими правилами, помогающий избежать распространённых ошибок.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word: "DOM",
          desc: "Document Object Model — программный интерфейс для HTML и XML документов, позволяющий изменять структуру, стиль и содержимое страницы.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Async/Await",
          desc: "Синтаксический сахар над промисами, позволяющий писать асинхронный код в синхронном стиле.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word: "Destructuring",
          desc: "Синтаксис для извлечения значений из массивов или объектов в отдельные переменные.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          word: "Spread Operator",
          desc: "Оператор (...), позволяющий расширить итерируемые элементы (например, массивы) в местах, где ожидается список аргументов или элементов.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Rest Parameters",
          desc: "Синтаксис для сбора неограниченного количества аргументов функции в массив.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word: "Module",
          desc: "Файл с кодом, который может экспортировать функции, объекты или примитивы для использования в других файлах.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Lexical Scope",
          desc: "Область видимости, определяемая положением переменной в исходном коде и вложенностью функций.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word: "IIFE",
          desc: "Immediately Invoked Function Expression — функция, которая вызывается сразу после своего определения.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          word: "JSON",
          desc: "JavaScript Object Notation — лёгкий формат обмена данными, основанный на синтаксисе объектов JavaScript.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Truthy/Falsy",
          desc: "Значения, которые при приведении к булевому типу становятся true (truthy) или false (falsy).",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word: "Event Bubbling",
          desc: "Процесс всплытия события от целевого элемента к корню DOM-дерева.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          word: "Map",
          desc: "Структура данных, хранящая пары ключ-значение, где ключи могут быть любого типа.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          word: "Set",
          desc: "Структура данных, хранящая уникальные значения любого типа.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          word: "Template Literals",
          desc: "Строки, позволяющие встраивать выражения с помощью синтаксиса `${expression}` и поддерживать многострочность.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          word: "Higher-Order Function",
          desc: "Функция, принимающая другую функцию в качестве аргумента или возвращающая функцию как результат.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          word: "Garbage Collection",
          desc: "Автоматический процесс освобождения памяти от объектов, которые больше не используются.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          desc: "function",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "data",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "runtime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "scope",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "async",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "basics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "browser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "es6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "syntax",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "collection",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "dom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desc: "promices",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Supports",
      [
        {
          tag_id: 1,
          content_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 1,
          content_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 2,
          content_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 2,
          content_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 3,
          content_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 3,
          content_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 4,
          content_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 4,
          content_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 4,
          content_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 4,
          content_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 4,
          content_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 5,
          content_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 5,
          content_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 5,
          content_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 5,
          content_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 6,
          content_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 6,
          content_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 6,
          content_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 6,
          content_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 7,
          content_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 7,
          content_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 7,
          content_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 7,
          content_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 8,
          content_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 8,
          content_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 8,
          content_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 9,
          content_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 10,
          content_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 10,
          content_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 10,
          content_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 10,
          content_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 10,
          content_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 11,
          content_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 11,
          content_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 12,
          content_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 12,
          content_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 13,
          content_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag_id: 13,
          content_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contents", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Tags", null, {});
    await queryInterface.bulkDelete("Supports", null, {});
  },
};
