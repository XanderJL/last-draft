export default function imageHotspot(hotspot) {
  return {
    backgroundPositionX: `${hotspot.x * 100}%`,
    backgroundPositionY: `${hotspot.y * 100}%`,
  }
}