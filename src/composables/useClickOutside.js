import { onMounted, onBeforeUnmount } from 'vue'

export function useClickOutside(targetRef, callback) {
  const handleClick = (e) => {
    if (targetRef.value && !targetRef.value.contains(e.target)) {
      callback(e)
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClick)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClick)
  })
}
