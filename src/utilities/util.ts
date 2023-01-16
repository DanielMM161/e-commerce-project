

export function changeDimension(path: string, width: number, height: number) {
    if (path.indexOf("?") != -1) {
        const splits = path.split("?")
        return `${splits[0]}?w=${width}&h=${height}`
    }
    return `https://api.lorem.space/image?w=${width}&h=${height}`
}