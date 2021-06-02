<template>
  <div class="wraper login-wraper">
    <a-form
      name="custom-validation"
      ref="formRef"
      :model="formState"
      :rules="rules"
      v-bind="layout"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item required has-feedback label="用户名" name="username">
        <a-input
          v-model:value="formState.username"
          type="username"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item required has-feedback label="密码" name="password">
        <a-input
          v-model:value="formState.password"
          type="password"
          autocomplete="off"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18, offset: 6 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { _userLogin } from '@/api/user'
import { setCookie } from '@/utils'

export default defineComponent({
  name: 'Login',
  setup() {
    const formRef = ref()
    const formState = reactive({
      username: '',
      password: '',
    })

    const rules = {
      password: [
        {
          validator: async (rule, value) => {
            if (value === '') {
              return Promise.reject('Please input the password')
            } else {
              return Promise.resolve()
            }
          },
          trigger: 'change',
        },
      ],
      username: [
        {
          validator: async (rule, value) => {
            if (value === '') {
              return Promise.reject('Please input the password again')
            } else {
              return Promise.resolve()
            }
          },
          trigger: 'change',
        },
      ],
    }
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
    }

    const handleFinish = async () => {
      const result = await _userLogin(formState)
      if (result.data.code) {
        setCookie('token', result.data.token)
      }
    }

    const handleFinishFailed = errors => {
      console.log(errors)
    }

    const resetForm = () => {
      formRef.value.resetFields()
    }

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
    }
  },
})
</script>

<style>
@import url('./login.css');
</style>
