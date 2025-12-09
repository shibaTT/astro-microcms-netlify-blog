export const formatDate = (date: string | undefined): string => {
    if (!date) return ""

    const dateObject = new Date(date)

    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()

    return `${year}年${month}月${day}日`
}
