import { serverUrl } from '../../public/env'
import toast from 'svelte-french-toast'

function showToast(type, message) {
  if (type === 'success') {
    toast.success(message)
  } else if (type === 'error') {
    toast.error(message)
  }
}

export async function fetchPayments(endpoint) {
  try {
    const response = await fetch(`${serverUrl}/admin/payments/${endpoint}Payments`)
    if (response.ok) {
      const responseData = await response.json()
      if (responseData.transactions) {
        showToast('success', 'Fetch successful!')
        console.log(responseData.transactions)
        // console.log(JSON.stringify(responseData.transactions, null, 2))
        return responseData.transactions
      } else {
        showToast('error', 'No transactions found')
        return []
      }
    } else {
      const responseData = await response.json()
      showToast('error', responseData.errorMessage || 'Error connecting to server')
      return []
    }
  } catch (error) {
    console.error('Error fetching pending payments:', error)
    showToast('error', 'Error fetching pending payments')
    return []
  }
}

export async function updateTransactions(data) {
  console.log(data)
  try {
    const response = await fetch(`${serverUrl}/admin/payments/setStatus`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    } else {
      showToast('success', 'Operation Successful')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
