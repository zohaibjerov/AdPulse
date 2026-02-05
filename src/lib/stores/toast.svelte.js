let toasts = $state([]);

export function addToast(message, type = 'info') {
    const id = crypto.randomUUID();
    const duration = 3000;

    toasts.push({ id, message, type });

    setTimeout(() => {
        removeToast(id);
    }, duration);
}

export function removeToast(id) {
    const index = toasts.findIndex(t => t.id === id);
    if (index !== -1) {
        toasts.splice(index, 1);
    }
}

export function getToasts() {
    return toasts;
}
