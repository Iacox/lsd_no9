<template>
  <v-container class="page_wrapper" fluid fill-height>
    <v-fade-transition>
      <SpinnerLoader v-if="dataLoading"/>
      <template v-else>
        <v-row class="main_form flex-column">
          <v-col class="mx-auto col-12 col-md-8">
            <v-card class="main_form-block px-10 py-5">
              <v-file-input
                @change="test"
                v-model="files"
                :rules="rules"
                accept=".pdf,.docx, image/png"
                label="Выберите файлы"
                placeholder="Выберите файлы"
                prepend-icon=""
                truncate-length="25"
                counter
                multiple
                show-size
                small-chips
              />
            </v-card>
          </v-col>

          <v-col class="mx-auto col-12 col-md-8 my-md-5">
            <v-card class="main_form-block px-10 py-5">
              <v-subheader>Разрешение DPI (влияет на скорость выполнения)</v-subheader>
              <v-slider
                :tick-labels="[100, 200, 300, 400, 500, 600]"
                v-model="dpiValue"
                :min="100"
                :max="600"
                step="100"
                :thumb-label="true"
                ticks="always"
                tick-size="6"
              />
            </v-card>
          </v-col>

          <v-col class="d-flex">
            <v-btn
              elevation="5"
              x-large
              class="main_form-btn_send mx-auto px-10"
            >Отправить</v-btn>
          </v-col>
        </v-row>
      </template>
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
      dpiValue: 300,
      files: [],
      rules: [
        array => (!array.length || array.every(file => file.size < 10240000)) || 'Размер каждого файла не должен превышать 10 MB!',
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

<style lang="scss">
.content--wrapper {
  border: 1px solid black;
  border-radius: 1em;
}

.theme--light {
  .page_wrapper {
    background: #EBEBEC !important;
  }
  .main_form {
    &-block {
      background: #FFFFFF;
      box-shadow: inset 4px 4px 20px #EBEBEC;
      border-radius: 24px;

      .v-subheader {
        text-align: center;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 16px;
        color: #000000;
        padding: 0;
      }
    }

    &-btn_send {
      background-color: #151721 !important;
      color: #EBEBEC !important;
      border-radius: 14px;
    }

    .v-slider__track-background {
      background-color: #CCCCCC !important;
    }
    .v-slider__track-fill {
      background-color: #9B9B9F !important;
    }
    .v-slider__thumb,
    .v-slider__thumb-label {
      background-color: #9B9B9F !important;
    }
  }
}
.theme--dark {
  .page_wrapper {
    background: #191D28 !important;
  }

  .main_form {
    &-block {
      background: #2B3244;
      box-shadow: inset 4px 4px 20px #151721;
      border-radius: 24px;

      .v-subheader {
        text-align: center;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 16px;
        color: #FFFFFF;
        padding: 0 5px;
      }
    }

    &-btn_send {
      background-color: #FFFFFF !important;
      color: #191D28 !important;
      border-radius: 14px;
    }

    .v-slider__thumb-label {
      color: #151721 !important;
    }
  }
}
</style>