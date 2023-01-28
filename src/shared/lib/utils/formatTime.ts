export const formatTime = (date: string) => {
    const objectDate = new Date(date);

    const hourse = objectDate.getHours().toString();
    const minutes = objectDate.getMinutes().toString();

    return `${hourse.length === 1 ? '0' : ''}${hourse}:${minutes.length === 1 ? '0' : ''}${minutes}`;
}