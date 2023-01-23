export const formatDate = (date: string) => {
    const objectDate = new Date(date);

    const number = objectDate.getDate().toString();
    const month = (objectDate.getMonth() + 1).toString();
    const year = objectDate.getFullYear().toString();

    return `${number.length === 1 ? '0' : ''}${number}.${month.length === 1 ? '0' : ''}${month}.${year}`;
}