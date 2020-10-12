<template>
  <form class="addForm" @submit.prevent="sendForm()">
    <h2>Форма создания клиента</h2>
    <div class="addForm_section">
      <h3>Общая информация</h3>
      <div class="addForm_elem">
        <span>Фамилия</span>
        <div class="addForm_field">
          <input type="text" v-model="form.lastname" />
          <ValidationError v-if="$v.form.lastname.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Имя</span>
        <div class="addForm_field">
          <input type="text" v-model="form.firstname" />
          <ValidationError v-if="$v.form.firstname.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Отчество</span>
        <div class="addForm_field">
          <input type="text" v-model="form.secondname" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Дата рождения</span>
        <div class="addForm_field">
          <input type="date" v-model="form.date_of_birth" />
          <ValidationError v-if="$v.form.date_of_birth.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Номер телефона</span>
        <div class="addForm_field">
          <input type="text" v-model="form.phone" />
          <ValidationError v-if="$v.form.phone.required.$invalid">
            Обязательное поле
          </ValidationError>
          <ValidationError v-else-if="$v.form.phone.length.$invalid">
            Длина 11 символов
          </ValidationError>
          <ValidationError v-else-if="$v.form.phone.phoneRegion.$invalid">
            Неверный формат
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Пол</span>
        <div class="addForm_field">
          <label v-for="item in placeholder.sex" :key="item.id">
            <input type="radio" :value="item.id" v-model="form.sex" />
            {{ item.name }}
          </label>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Группа клиентов</span>
        <div class="addForm_field">
          <select v-model="form.group" multiple>
            <option
              v-for="item in placeholder.group"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <ValidationError v-if="$v.form.group.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Лечащий врач</span>
        <div class="addForm_field">
          <select v-model="form.therapist">
            <option
              v-for="item in placeholder.therapist"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="addForm_elem">
        <label class="--flex-end">
          <span>Не отправлять СМС</span>
          <input v-model="form.nosms" type="checkbox" />
        </label>
      </div>
    </div>
    <div class="addForm_section">
      <h3 class="addForm_subtitle">Адрес</h3>
      <div class="addForm_elem">
        <span>Индекс</span>
        <div class="addForm_field">
          <input type="text" v-model="form.zip" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Страна</span>
        <div class="addForm_field">
          <input type="text" v-model="form.country" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Область</span>
        <div class="addForm_field">
          <input type="text" v-model="form.region" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Город</span>
        <div class="addForm_field">
          <input type="text" v-model="form.city" />
          <ValidationError v-if="$v.form.city.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Улица</span>
        <div class="addForm_field">
          <input type="text" v-model="form.street" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Дом</span>
        <div class="addForm_field">
          <input type="text" v-model="form.house" />
        </div>
      </div>
    </div>
    <div class="addForm_section">
      <h3 class="addForm_subtitle">Паспорт</h3>
      <div class="addForm_elem">
        <span>Тип документа</span>
        <div class="addForm_field">
          <select v-model="form.doctype">
            <option
              v-for="item in placeholder.doctype"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
          <ValidationError v-if="$v.form.doctype.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
      <div class="addForm_elem">
        <span>Серия</span>
        <div class="addForm_field">
          <input type="text" v-model="form.series" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Номер</span>
        <div class="addForm_field">
          <input type="text" v-model="form.number" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Кем выдан</span>
        <div class="addForm_field">
          <input type="text" v-model="form.issued_by" />
        </div>
      </div>
      <div class="addForm_elem">
        <span>Дата выдачи</span>
        <div class="addForm_field">
          <input type="date" v-model="form.date_of_issue" />
          <ValidationError v-if="$v.form.date_of_issue.required.$invalid">
            Обязательное поле
          </ValidationError>
        </div>
      </div>
    </div>
    <button :disabled="$v.$errors.length" class="addForm_submit" type="submit">
      Создать
    </button>
  </form>
  <Modal v-if="modalOpen"> Клиент успешно добавлен! </Modal>
</template>

<script>
import ValidationError from "./ValidationError";
import Modal from "./Modal";
import usePlaceholder from "@/compositions/formDataPlaceholder";
import useModal from "@/compositions/modal";
import { reactive } from "vue";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    const form = reactive({ group: [] });

    const { modalOpen, showModal } = useModal();

    const sendForm = () => {
      // fetch form...

      for (let key in form) {
        form[key] = undefined;
      }

      form.group = [];

      showModal();
    };

    return {
      form,
      sendForm,
      modalOpen,
      showModal,
      ...usePlaceholder(),
    };
  },
  validations: {
    form: {
      lastname: { required },
      firstname: { required },
      date_of_birth: { required },
      phone: {
        required,
        length: (value = "") => value.length == 11,
        phoneRegion: (value = "") => {
          return value[0] == 7 && /\d{11}/.test(value);
        },
      },
      group: { required },
      city: { required },
      doctype: { required },
      date_of_issue: { required },
    },
  },
  mounted() {
    this.$v.form.$touch();
  },
  components: {
    ValidationError,
    Modal,
  },
};
</script>

<style lang="sass">
.addForm
  padding: 20px 0
  max-width: 600px
  margin: auto
  &_section
    padding: 5px 0px
  &_elem
    display: flex
    margin-bottom: 15px
    span
      width: 25%
      min-width: 100px
      text-align: right
      padding-top: 5px
      padding-right: 10px
      flex-shrink: 0

  &_field
    flex-grow: 1
    input
      padding: 10px 5px

    label
      margin: 0 5px

    option
      padding: 5px
    & > input,
    & > select

      width: 100%
      min-width: 50px
      box-sizing: border-box
  &_submit
    width: 100%
    padding: 5px
</style>