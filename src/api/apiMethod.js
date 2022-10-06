
export const getAccount = async (path = "") => {
    const data = await fetch(`http://localhost:8000/listAccount${path}`)
    return data
}