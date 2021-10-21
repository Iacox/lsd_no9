<template>
  <v-container fluid fill-height>
    <v-fade-transition>
      <SpinnerLoader v-if="dataLoading" />
      <v-row v-else class="text-center">
        <v-col
          class="content--wrapper mx-auto col-12 col-md-4 b-1"
          align-self="center"
        >
          <v-file-input
            @change="test"
            v-model="files"
            :rules="rules"
            accept=".pdf,.docx, image/png"
            label="Выберите файлы"
            placeholder="Выберите файлы"
            prepend-icon="mdi-paperclip"
            truncate-length="25"
            counter
            multiple
            show-size
            small-chips
          ></v-file-input>

          <v-divider class="my-4"/>

          <v-subheader>Выбор качества проверки (влияет на скорость выполнения)</v-subheader>
          <v-slider
            :tick-labels="[100, 200, 300, 400, 500, 600]"
            v-model="dpiValue"
            :min="100"
            :max="600"
            step="100"
            :thumb-label="true"
            ticks="always"
            tick-size="6"
          ></v-slider>

          <v-divider class="mt-4 mb-6"/>

          <v-btn
            color="secondary"
            elevation="5"
          >Отправить</v-btn>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: 'MainPage',
  components: {
    SpinnerLoader: () => import('@components/SpinnerLoader.vue'),
  },
  data() {
    return {
      dataLoading: false,
      dpiValue: 100,
      files: [],
      rules: [
        value => !value || value.size < 10240000 || 'Размер файла не должен превышать 10 MB!',
      ],
    }
  },
  methods: {
    ...mapMutations(['SET_STATE']),
    ...mapActions(['sendFiles']),

    test(e) {
      console.log(`files`, this.files)
      console.log(`e`, e)
    },
  },
}
</script>

<style lang="scss" scoped>
.content--wrapper {
  border: 1px solid black;
  border-radius: 1em;
}
</style>