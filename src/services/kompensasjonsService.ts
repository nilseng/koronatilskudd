export const getStatistics = async () => {
    const res = await fetch(
        "https://data.brreg.no/kompensasjonsordning/api/tilskudd/statistikk"
    ).catch(e => {
        console.error("Could not fetch")
        return undefined
    })
    return res?.json()
}