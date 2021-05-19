async function handleResponse(response) {
    const json = await response.json()
    if (response.status !== 200) {
        throw new Error(json.errorMessage)
    }
    return json
}

module.exports = { handleResponse }