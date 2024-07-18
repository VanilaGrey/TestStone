// Функция для пометок шаблонных строк, в которых нужна поддержка Vue Template
// со стороны VS Code (https://marketplace.visualstudio.com/items?itemName=enhancedjs.html-in-template-string)

export const vueTemplate = (raw, ...values) => String.raw({ raw }, ...values);
