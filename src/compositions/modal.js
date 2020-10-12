import { ref } from "vue";

export default function useModal() {
	const modalOpen = ref(false);
	
	let timerId

	const showModal = () => {
		clearTimeout(timerId)
		modalOpen.value = true
		timerId = setTimeout(() => {
			modalOpen.value = false
		}, 1000)
	}

  return {
		modalOpen,
		showModal
	};
}
