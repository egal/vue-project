<template>
  <div class="profile-container">
    <div class="user-info-container">
      <h3>{{ userInfoHeader }}</h3>
      <div class="user-avatar">
        <e-avatar name="user name" bgColor="#A0AEC0" isOnline="true"></e-avatar>
        <e-button size="sm" rounded="true" :style-config="buttonStyleConfig">
          <BootstrapIcon class="button-icon" icon="bell"></BootstrapIcon>
        </e-button>
      </div>
      <div class="user-info"></div>
      <div class="user-job-info">
        <h3>{{ userJobInfoHeader }}</h3>
      </div>
    </div>
    <div class="user-stats"></div>
  </div>
</template>

<script>
import { styleConfig } from '@/assets/styleTemplates/EButton'
export default {
  name: 'UserProfile',
  data() {
    return {
      userInfoHeader: 'Основная информация',
      userJobInfoHeader: 'Информация по проекту',
      buttonStyleConfig: styleConfig,
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
  }
}
</style>
