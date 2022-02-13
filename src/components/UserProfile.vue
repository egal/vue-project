<template>
  <div class="profile-container">
    <div class="user-info-container">
      <h5>{{ userInfoHeader }}</h5>
      <div class="user-avatar">
        <e-avatar
          size="xxl"
          :imgUrl="require('../assets/avatar.svg')"
          class="avatar"
        ></e-avatar>
        <div class="edit-btn">
          <e-button size="lg" softColors="true">
            <BootstrapIcon
              class="button-icon"
              icon="pencil-square"
            ></BootstrapIcon>
          </e-button>
        </div>
      </div>
      <div class="user-info">
        <div v-for="(widget, index) in userInfoWidgetSet" :key="index"></div>
      </div>
      <div class="user-job-info">
        <h5>{{ userJobInfoHeader }}</h5>
      </div>
    </div>
    <div class="user-stats">
      <div></div>
    </div>
  </div>
</template>

<script>
import { styleConfig } from '@/assets/styleTemplates/EButton'
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons'
export default {
  name: 'UserProfile',
  components: { BootstrapIcon },
  data() {
    return {
      userInfoHeader: 'Основная информация',
      userJobInfoHeader: 'Информация по проекту',
      buttonStyleConfig: styleConfig,
      userInfo: {
        name: 'Name',
        surname: 'Surname',
        phone: '+7(888)888 88 88',
      },
      userInfoWidgetSet: [
        {
          name: 'EInput',
          placeholder: 'Name',
          label: 'Name',
          type: 'text',
          required: true,
          clearable: true,
        },
        {
          name: 'EInput',
          placeholder: 'Surname',
          label: 'Surname',
          type: 'text',
          required: true,
          clearable: true,
        },
        {
          name: 'EInput',
          placeholder: 'Phone',
          label: 'Phone',
          type: 'tel',
          required: true,
          clearable: true,
        },
      ],
      UserJobInfoWidgetSet: [
        {
          name: 'ESelect',
          label: 'Role',
          required: true,
          options: [],
        },
        {
          name: 'ESelect',
          label: 'Department',
          required: true,
          options: [],
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/variables';
.profile-container {
  height: auto;
  margin: 26px 48px 0 24px;
  display: flex;
  .user-info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    width: 316px;
    min-height: 661px;
    height: auto;
    box-shadow: $shadow-sm;
    border-radius: $all-sides-2xl;
    background: $base-white;
    h5 {
      margin-bottom: 24px;
    }
    .user-avatar {
      display: flex;
      align-items: flex-end;
      margin-bottom: 34px;
      position: relative;
      .edit-btn {
        width: 64px;
        height: 46px;
        position: absolute;
        left: 70px;
        top: 80px;
        z-index: 2;
      }
      .button-icon {
        width: 15px;
        height: 15px;
        fill: $default-accent;
      }
    }
    .user-info {
      min-height: 250px;
    }
    .user-job-info {
      padding-top: 24px;
      border-top: 1px solid $gray-300;
      width: 100%;
    }
  }
}
</style>
