import toast, { ToastPosition } from 'react-hot-toast';

export function appToast(
	message  : string, 
	variant  : 'default' | 'danger' = 'default',
	position : ToastPosition = 'top-center', 
	duration : number = 3000, 
) {

	const background = (variant === 'danger')
		? "text-white"
		: "hsl(var(--secondary))";
		
	const color = (variant === 'danger')
		? "text-red-700"
		: "hsl(var(--secondary-foreground))";		

	return (
		toast(message, {
			duration: duration,
			position: position,
			style: {
				background,
				color,
			}
		})
	)
}