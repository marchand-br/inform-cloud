import toast, { ToastPosition } from 'react-hot-toast';

export function appToast(
	message  : string, 
	variant  : 'default' | 'danger' = 'default',
	position : ToastPosition = 'top-center', 
	duration : number = 3000, 
) {

	if (variant === 'danger') {
		return (
			toast(message, {
				duration: duration,
				position: position,
				style: {
					background: "rgb(185, 28, 28)",
					color: "#FFFFFF",
				}
			})
		)
	} else {
		return (
			toast(message, {
				duration: duration,
				position: position,
			})
		)
	}
}