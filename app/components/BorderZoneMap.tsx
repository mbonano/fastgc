'use client'

import { useEffect, useRef } from 'react'

interface BorderZoneMapProps {
  lat: number
  lon: number
  isInside: boolean
  distanceMiles: number
  yourLocationLabel: string
  milesFromBorderLabel: string
  legendText: string
}

export default function BorderZoneMap({
  lat,
  lon,
  isInside,
  distanceMiles,
  yourLocationLabel,
  milesFromBorderLabel,
  legendText,
}: BorderZoneMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const styleId = 'leaflet-css'
    if (!document.getElementById(styleId)) {
      const link = document.createElement('link')
      link.id = styleId
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    import('leaflet').then((L) => {
      if (!containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current, { zoomControl: true, attributionControl: true }).setView(
        [lat, lon],
        6
      )
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map)

      // 100-mile circle = 160,934 meters
      const zoneColor = isInside ? '#f97316' : '#16a34a'
      const zoneFill = isInside ? '#fed7aa' : '#bbf7d0'

      L.circle([lat, lon], {
        radius: 160934,
        color: zoneColor,
        fillColor: zoneFill,
        fillOpacity: 0.25,
        weight: 2,
        dashArray: '6 4',
      }).addTo(map)

      const dot = L.divIcon({
        className: '',
        html: `<div style="width:14px;height:14px;border-radius:50%;background:${zoneColor};border:3px solid white;box-shadow:0 0 0 2px ${zoneColor}"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      L.marker([lat, lon], { icon: dot })
        .addTo(map)
        .bindPopup(`<strong>${yourLocationLabel}</strong><br>~${distanceMiles} ${milesFromBorderLabel}`)
        .openPopup()
    })

    return () => {
      if (mapRef.current) {
        ;(mapRef.current as { remove: () => void }).remove()
        mapRef.current = null
      }
    }
  }, [lat, lon, isInside, distanceMiles, yourLocationLabel, milesFromBorderLabel])

  return (
    <div className="relative z-0">
      <div ref={containerRef} className="w-full rounded-lg overflow-hidden" style={{ height: 280 }} />
      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-xs text-gray-600 px-2 py-1 rounded shadow pointer-events-none">
        {legendText}
      </div>
    </div>
  )
}
