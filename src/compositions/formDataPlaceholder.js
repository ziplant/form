import { reactive } from "vue";

export default function usePlaceholder() {
  const placeholder = reactive({
    sex: [
      { id: 1, name: "Мужской" },
      { id: 2, name: "Женский" },
    ],
    group: [
      { id: 1, name: "VIP" },
      { id: 2, name: "Проблемные" },
      { id: 3, name: "ОМС" },
    ],
    therapist: [
      { id: 1, name: "Иванов" },
      { id: 2, name: "Захаров" },
      { id: 3, name: "Чернышева" },
    ],
    doctype: [
      { id: 1, name: "Паспорт" },
      { id: 2, name: "Свидетельство о рождении" },
      { id: 3, name: "Вод. удостоверение" },
    ],
  });

  return {
    placeholder,
  };
}
