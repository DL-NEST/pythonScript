<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <DialogContent />
      <n-notification-provider>
        <n-message-provider>
          <MessageContent />
          <DialogContent />
          <LoadingContent />
          <Notification />
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script>
import { defineComponent } from 'vue'
import {
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLoadingBarProvider
} from 'naive-ui'
import MessageContent from './MessageContent'
import DialogContent from './DialogContent'
import LoadingContent from './LoadingContent'
import Notification from './Notification'

export default defineComponent({
  name: 'Application',
  components: {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
    MessageContent,
    Notification,
    DialogContent,
    LoadingContent
  },
  setup () {
    return {}
  }
})
</script>
