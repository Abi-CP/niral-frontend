import toast from "svelte-french-toast"

export function showToast(type, message) {
    if (type === 'success') {
      toast.success(message)
    } else if (type === 'error') {
      toast.error(message)
    }
  }
  