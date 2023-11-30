/* eslint-disable @typescript-eslint/no-explicit-any */
import { onNavigate } from '$app/navigation';
export const preparePageTransition = () => {
	onNavigate((navigation) => {
		if (!(document as any).startViewTransition) return;

		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
};
